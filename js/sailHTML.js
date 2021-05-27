let txt, level, osoName, integrity, assurance, compliance;
let SailLevels = 6;
let objNumber = 1;
let oso_json, sail_json;
let params = new URLSearchParams(location.search);
let UID = params.get("uid");
let user = params.get("user");
txt += "<table border='1' id='sailTable'>";
txt +=
  "<tr><th>OSO #</th><th>Name</th><th>Robustness</th><th>Integrity</th><th>Assurance</th><th>Compliance</th></tr>";
let ansoegning = {};
//Fetches the users SAIL-determination from the database so that the PDF is generated with the correct integrity and assurance levels.
fetch(`http://server.malthelarsen.dk:3000/sail?uid=${UID}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    ansoegning = data;
    console.log(ansoegning);
    let SAIL = ansoegning["SAIL"];

    fetch("../data/OSO_integrity_assurance.json")
      .then((res) => res.json())
      .then((data) => {
        sail_json = data["sail"];
        oso_json = data["OSOia"];

        //Generates a table, from the SAIL found above (l. 13), with the correct OSO's (integrity/assurance levels)
        for (obj in sail_json) {
          level = sail_json["OSO#" + objNumber].level[SAIL];
          osoName = sail_json["OSO#" + objNumber].description;
          integrity =
            oso_json["OSO#" + objNumber][level.toLowerCase()]["integrity"];
          integrity = integrity.replace(
            /•/g,
            '</dd></li="underliste">' + '<br><li id="overliste">• '
          );
          integrity = integrity.replace(
            /- /g,
            "<br>" + '<li id="underliste">- '
          );
          assurance =
            oso_json["OSO#" + objNumber][level.toLowerCase()]["assurance"];
          assurance = assurance.replace(
            /•/g,
            '</dd></li id="underliste">' + '<br><li id="overliste">• '
          );
          assurance = assurance.replace(
            /- /g,
            "<br>" + '<li id="underliste">- '
          );
          objNumber++;
          //Inserts the different elements into the table.
          txt +=
            "<tr><td>" +
            obj +
            "</td><td class='int_as_td'>" +
            osoName +
            "</td><td>" +
            level +
            "</td><td class='int_as_td'>" +
            integrity +
            "</td><td class='int_as_td'>" +
            assurance +
            "</td><td class='inputtd'><textarea class='compIn' name='compIn[]' placeholder='Write how you wish to comply to the given OSO'></textarea></td></tr>";
        }

        txt += "</table>";
        document.getElementById("sailDiv").innerHTML = txt;
      });
  });

//Converts the HTML-page to PDF-file when the "Gem som PDF" button is clicked.
function GeneratePDF() {
  //jsPDF-library cannot convert textareas, hence the "conversion" to a <p> element adding the users inputs to the generated PDF.
  let compIn = document.getElementsByTagName("textarea");
  let inputtd = document.querySelectorAll(".inputtd");
  let numberOfInputs = 24;
  for (let i = 0; i < numberOfInputs; i++) {
    let t = document.createElement("p");
    t.innerHTML = compIn.item(i).value;
    t.innerHTML = t.innerHTML.replace(/\n/g, "<br>");
    t.innerHTML = t.innerHTML.replace(/\n\n/g, "<br><br>");
    inputtd.item(i).appendChild(t);

    compIn.item(i).hidden = true;
  }
  //jsPDF-library function with different options, which define the PDF's appearance
  let doc = new jsPDF("l");
  doc.autoTable({
    html: "#sailTable",
    theme: "grid",
    tableWidth: 270,
    bodyStyles: {
      minCellHeight: 5,
      fontSize: 8,
      margin: {
        top: 10,
        bottom: 40,
        left: 1,
        right: 1,
        minCellWidth: "auto",
      },
    },
  });
  doc.save("sailPDF_test");
}

function pdfSaveWithoutDownload() {
  window.location.href = `http://server.malthelarsen.dk/common/index.html`;
}
