//array used to allocate text in the txt file for the different html elements
let file_arr = [];
//function to read a file and put text inside its own index in file_arr
//the functions takes a string as a input which is the file
function line_by_line_reader(file = "") {
  fetch(file)
    .then((response) => response.text())
    //Split the text everytime there is a linebreak and allocate it in its own index in file_arr
    .then((text) => (file_arr = text.split(/\r\n|\n/)));
}

line_by_line_reader("input.txt");
//Make a href link in html, takes 4 strings as input
//element = the type of html element wanted to be made
//button_title = is the title of the button when viewed in a browser
//link = is the link where the href leads too
// append_to_element = is which element the href will be appended too
function make_href(
  element = "",
  button_title = "",
  link = "",
  append_to_element = ""
) {
  let type = document.createElement(element);

  let button_name = document.createTextNode(button_title);

  type.appendChild(button_name);

  type.title = button_name;

  type.href = link;

  document.getElementById(append_to_element).appendChild(type);
}

make_href("a", "Hjem", "index.html", "fakta_topnav");
make_href("a", "Profil", "brugerprofil.html", "fakta_topnav");

//make 2 elements in html and remove previous if any present, takes 7 strings as input
// element = the first html element wanted to be made
// element2 = the second html element wanted to be made
// text = text for the first element
// text2 = text for the second element
// append = where the elements should be appended too
// id1 = id for the first element created
// id2 = id for the second element created
//disclaimer: elements and the text are stored in the file input.txt
function make_2_html_elements(
  element = "",
  text = "",
  element2 = "",
  text2 = "",
  append = "",
  id1 = "",
  id2 = ""
) {
  for (let j = 14; j <= 19; j++) {
    if (document.getElementById(j) !== null) {
      document.getElementById(j).remove();
    }
  }
  let type = document.createElement(element);
  let type2 = document.createElement(element2);
  let text_in_box = document.createTextNode(text);
  let text_in_box2 = document.createTextNode(text2);
  type.appendChild(text_in_box);
  type2.appendChild(text_in_box2);

  type.id = id1;
  type2.id = id2;
  document.getElementById(append).appendChild(type);
  document.getElementById(append).appendChild(type2);
}
//make a button in html it takes 4 strings as input
// element is the kind of element that is wanted to be made
// text is the text on the button viewed in the browser
//id_of_btn is the id for the button
// nav_bar is which navbar the button should be appended too
function make_button(element = "", text = "", id_of_btn = "", nav_bar = "") {
  let type = document.createElement(element);

  let text_in_box = document.createTextNode(text);

  type.appendChild(text_in_box);
  type.name = "knap";
  type.id = id_of_btn;
  type.value = text_in_box;
  document.getElementById(nav_bar).appendChild(type);
}
//function to input picture in html takes 2 strings as input
//picture is the location of the picture
//append is where the picture should be appended too
function input_picture(picture = "", append = "") {
  let type = document.createElement("img");

  type.src = picture;

  type.id = "billede";

  document.getElementById(append).appendChild(type);
}

make_button("Button", "Den specifikke kategori", "1", "fakta_topnav");
make_button("Button", "Om - SORA", "2", "fakta_topnav");
make_button("Button", "Hvem er vi", "3", "fakta_topnav");

//array with names to sidenav
let sora_button_names = [
  "SORA - Trin 1",
  "SORA - Trin 2-3",
  "SORA - Trin 4",
  "SORA - Trin 5",
  "SORA - Trin 6",
  "SORA - Trin 7",
  "SORA - Trin 8",
  "SORA - Trin 9",
  "SORA - Trin 10",
];

const chosen_input = document.querySelector("#fakta_topnav");
const chosen_input_2 = document.querySelector("#fakta_sidenav");
//choose the correct type of text to display depending on the selected button
function choose_correct_text() {
  //remove buttons once another button is pressed
  if (document.getElementById("4") !== null) {
    for (let i = 4; i <= 12; i++) {
      document.getElementById(i).remove();
    }
  }
  for (let j = 20; j <= 10000; j++) {
    if (document.getElementById(j) !== null) {
      document.getElementById(j).remove();
    }
  }
  //if the button with id of 1 is pressed, create the following html elements
  if (event.target.id === "1") {
    make_2_html_elements(
      file_arr[0],
      file_arr[1],
      file_arr[2],
      file_arr[3],
      "text_box",
      "14",
      "15"
    );
  }
  //if the button with id of 2 is pressed, create the following html elements
  else if (event.target.id === "2") {
    //Make buttons to the different sora steps
    let p = 0;
    for (let i = 4; i <= 12; i++) {
      make_button("Button", sora_button_names[p], i, "fakta_sidenav");
      p++;
    }
    make_2_html_elements(
      file_arr[4],
      file_arr[5],
      file_arr[6],
      file_arr[7],
      "text_box",
      "16",
      "17"
    );
  }
  //if the button with id of 3 is pressed, create the following html elements
  else if (event.target.id === "3") {
    make_2_html_elements(
      file_arr[8],
      file_arr[9],
      file_arr[10],
      file_arr[11],
      "text_box",
      "18",
      "19"
    );
  }
}
//Text function for sidebar
function choose_correct_text_2() {
  //remove textboxes from previously pressed buttons in the sidenav bar
  for (let j = 20; j <= 1000; j++) {
    if (document.getElementById(j) !== null) {
      document.getElementById(j).remove();
    }
  }
  //if the button with id of 4 is pressed, create the following html elements
  if (event.target.id === "4") {
    make_2_html_elements(
      file_arr[12],
      file_arr[13],
      file_arr[14],
      file_arr[15],
      "text_box",
      "20",
      "21"
    );
    make_2_html_elements(
      file_arr[16],
      file_arr[17],
      file_arr[18],
      file_arr[19],
      "21",
      "22",
      "23"
    );
  }
  //if the button with id of 5 is pressed, create the following html elements
  else if (event.target.id === "5") {
    let id_arr = ["text_box", "24", "25", "26", "27", "28", "29"];
    let j = 0;
    for (let i = 20; i < 32; i += 4) {
      make_2_html_elements(
        file_arr[i],
        file_arr[i + 1],
        file_arr[i + 2],
        file_arr[i + 3],
        id_arr[j],
        id_arr[j + 1],
        id_arr[j + 2]
      );
      j += 2;
    }
    input_picture("Pictures/Table2_GRC_det(ny).png", "28");
    input_picture("Pictures/Table_3_mitigations_for_GRC.png", "27");
    input_picture("Pictures/Level_of_Robustness_det.PNG", "27");
  }
  //if the button with id of 6 is pressed, create the following html elements
  else if (event.target.id === "6") {
    make_2_html_elements(
      file_arr[32],
      file_arr[33],
      file_arr[34],
      file_arr[35],
      "text_box",
      "30",
      "31"
    );
    make_2_html_elements("li", "ARC-a", "li", "ARC-b", "31", "32", "33");
    make_2_html_elements("li", "ARC-c", "li", "ARC-d", "33", "34", "35");
    make_2_html_elements(
      file_arr[36],
      file_arr[37],
      file_arr[38],
      file_arr[39],
      "35",
      "36",
      "37"
    );
    input_picture("Pictures/ArcAssignmentProcess.png", "37");
  }
  //if the button with id of 8 is pressed, create the following html elements
  else if (event.target.id === "8") {
    let id_arr = [
      "text_box",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
    ];
    let j = 0;
    for (let i = 40; i < 64; i += 4) {
      make_2_html_elements(
        file_arr[i],
        file_arr[i + 1],
        file_arr[i + 2],
        file_arr[i + 3],
        id_arr[j],
        id_arr[j + 1],
        id_arr[j + 2]
      );
      j += 2;
    }
    input_picture("Pictures/annex_d_table_4.png", "49");
  }
  //if the button with id of 9 is pressed, create the following html elements
  else if (event.target.id === "9") {
    make_2_html_elements(
      file_arr[64],
      file_arr[65],
      file_arr[66],
      file_arr[67],
      "text_box",
      "49",
      "50"
    );
  }
  //if the button with id of 10 is pressed, create the following html elements
  else if (event.target.id === "10") {
    let id_arr = ["text_box", "51", "52", "53", "54", "55", "56", "57", "58"];
    let j = 0;
    for (let i = 68; i < 84; i += 4) {
      make_2_html_elements(
        file_arr[i],
        file_arr[i + 1],
        file_arr[i + 2],
        file_arr[i + 3],
        id_arr[j],
        id_arr[j + 1],
        id_arr[j + 2]
      );
      j += 2;
    }
    input_picture("Pictures/SAIL_Tabel.png", "58");
  }
  //if the button with id of 11 is pressed, create the following html elements
  else if (event.target.id === "11") {
    let id_arr = ["text_box", "59", "60", "61", "62", "63", "63"];
    let j = 0;
    for (let i = 84; i < 96; i += 4) {
      make_2_html_elements(
        file_arr[i],
        file_arr[i + 1],
        file_arr[i + 2],
        file_arr[i + 3],
        id_arr[j],
        id_arr[j + 1],
        id_arr[j + 2]
      );
      j += 2;
    }
  }
  //if the button with id of 12 is pressed, create the following html elements
  else if (event.target.id === "12") {
    let id_arr = [
      "text_box",
      "65",
      "66",
      "67",
      "68",
      "69",
      "70",
      "71",
      "72",
      "73",
      "74",
    ];
    let j = 0;
    for (let i = 96; i < 116; i += 4) {
      make_2_html_elements(
        file_arr[i],
        file_arr[i + 1],
        file_arr[i + 2],
        file_arr[i + 3],
        id_arr[j],
        id_arr[j + 1],
        id_arr[j + 2]
      );
      j += 2;
    }
  }
  //if the button with id of 7 is pressed, create the following html elements, as of now we have choosen not to take the 5th step into account
  else if (event.target.id === "7") {
    make_2_html_elements("p", "hej");
  }
}

chosen_input.addEventListener("click", choose_correct_text);
chosen_input_2.addEventListener("click", choose_correct_text_2);
