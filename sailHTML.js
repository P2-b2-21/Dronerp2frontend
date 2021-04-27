//Disse json-filer skal hentes i stedet for det her shit, men jeg har givet op:/
let SAIL = 2;
let txt, level, osoName, integrity, assurance, compliance;
let SailLevels = 6;
let objNumber = 1;
let oso_json, sail_json;

txt += "<table border='1' id='sailTable'>"
txt += "<tr><th>OSO #</th><th>Name</th><th>Robustness</th><th>Integrity</th><th>Assurance</th><th>Compliance</th></tr>"

fetch("./OSO_integrity_assurance.json").then(res => res.json()).then(data => {
    sail_json = data["sail"];
    oso_json = data["OSOia"];

    for (obj in sail_json) {

        for (let i = 1; i < SailLevels; i++) {
            if (SAIL === i) {
                level = sail_json["OSO#" + objNumber].level[i];
                osoName = sail_json["OSO#" + objNumber].description;
                integrity = oso_json["OSO#" + objNumber][level.toLowerCase()]["integrity"];
                integrity = integrity.replace(/•/g, '</dd></li="underliste">' + '<br>' + '<li id="overliste">• ');
                integrity = integrity.replace(/- /g, '<br>' + '<li id="underliste">- ');
                assurance = oso_json["OSO#" + objNumber][level.toLowerCase()]["assurance"];
                assurance = assurance.replace(/•/g, '</dd></li id="underliste">' + '<br><li id="overliste">• ');
                assurance = assurance.replace(/- /g, '<br>' + '<li id="underliste">- ');
                objNumber++;
            }
        }
        txt += "<tr><td>" + obj + "</td><td>" + osoName + "</td><td>" + level + "</td><td>" + integrity + "</td><td>" + assurance + "</td><td><input type=textfield placeholder='Write how you wish to comply to the given OSO'></input></td></tr>";
    }
    txt += "</table>"
    document.getElementById("sailDiv").innerHTML = txt;
});

//Convert to pdf
function GeneratePDF() {
    let doc = new jsPDF('l');
    doc.autoTable(
        {
            html: '#sailTable',
            theme: 'grid',
            tableWidth: 250,
            bodyStyles: {
                minCellHeight: 5, fontSize: 8,
                margin: {
                    top: 10,
                    bottom: 40,
                    left: 1,
                    right: 1,
                    minCellWidth: 'auto'
                },
            }
        });
    doc.save("sailPDF_test");
}
