let txt, level, osoName, integrity, assurance, compliance;
let SailLevels = 6;
let objNumber = 1;
let oso_json, sail_json;
let params = new URLSearchParams(location.search);
let UID = params.get("uid");
let user = params.get("username");
txt += "<table border='1' id='sailTable'>";
txt +=
  "<tr><th>OSO #</th><th>Name</th><th>Robustness</th><th>Integrity</th><th>Assurance</th><th>Compliance</th></tr>";
let ansoegning = {};
fetch(`http://server.malthelarsen.dk:3000/sail?uid=${UID}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    ansoegning = data;
    console.log(ansoegning);
    let SAIL = ansoegning["SAIL"];

    fetch("./OSO_integrity_assurance.json")
      .then((res) => res.json())
      .then((data) => {
        sail_json = data["sail"];
        oso_json = data["OSOia"];

        //Ud fra den givne sail hentes de respektive OSO'er (integrity og assurance) og indsættes i en tabel.
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
          //Indsætter elementerne i tabellen
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
//Konverter HTML-siden til pdf-fil
function GeneratePDF() {
  //jsPDF-library kan ikke konvertere textarea, derfor laves den om til en <p> før den konverteres.
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
  //jsPDF-library funktion
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
function Save() {
  document.getElementById("saveBtn").addEventListener("click", async (e) => {
    e.preventDefault();

    fetch("http://server.malthelarsen.dk:3000/saved_pdfs", {
      method: "POST",
      body: JSON.stringify(document), //html
      headers: {
        "Content-Type": "text/html",
      },
    });
  });
}

function pdfSaveWithoutDownload() {
  window.location.href = `http://server.malthelarsen.dk:3000/brugerprofil.html?user=${user}`;
}
