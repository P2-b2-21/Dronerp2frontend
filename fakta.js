//Make a href link in html
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

//make a paragraph in html and remove previous if any present
function make_paragraph(element = "", text = "", element2 = "", text2 = "") {
  if (document.getElementById("paragraph_subject") !== null) {
    document.getElementById("paragraph_subject").remove();
  }
  if (document.getElementById("paragraph_subject2") !== null) {
    document.getElementById("paragraph_subject2").remove();
  }
  let type = document.createElement(element);
  let type2 = document.createElement(element2);
  let text_in_box = document.createTextNode(text);
  let text_in_box2 = document.createTextNode(text2);
  type.appendChild(text_in_box);
  type2.appendChild(text_in_box2);

  type.id = "paragraph_subject";
  type2.id = "paragraph_subject2";
  document.getElementById("text_box").appendChild(type);
  document.getElementById("text_box").appendChild(type2);
}
//make a button in html
function make_button(element = "", text = "", id_of_btn = "", nav_bar = "") {
  let type = document.createElement(element);

  let text_in_box = document.createTextNode(text);

  type.appendChild(text_in_box);
  type.name = "knap";
  type.id = id_of_btn;
  type.value = text_in_box;
  document.getElementById(nav_bar).appendChild(type);
}

make_button("Button", "Den specifikke kategori", "1", "fakta_topnav");
make_button("Button", "Om - SORA", "2", "fakta_topnav");
make_button("Button", "Hvem er vi", "3", "fakta_topnav");

let j = [
  "SORA - Trin 1",
  "SORA - Trin 2",
  "SORA - Trin 3",
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
    for (let i = 4; i <= 13; i++) {
      document.getElementById(i).remove();
    }
  }
  if (event.target.id === "1") {
    make_paragraph(
      "h1",
      "Den specifikke kategori",
      "p",
      "Indenfor den specifikke kategori, angående emnet droneflyvning, findes der yderligere tre ansøgningsmuligheder. Den første mulighed er at arbejde efter et såkaldt standardscenarie (STS). Et standardscenarie er nogle præ-definerede retningslinjer der gælder, så længe der bliver fløjet med droner under forudsætning af at disse retningslinjer overholdes. Ud over (STS) kan der laves to andre former for ansøgninger. Den ene kaldes Predefined Risk Assessment (PDRA) og den anden Specific Operations Risk Assessment (SORA). PDRA minder rigtig meget om førnævnte STS, da dette er prædefinerede retningslinjer der skal overholdes, og der derfor ikke eksisterer nogen fleksibilitet. Dog skal der dokumenteres mere omkring flyvningen fra operatørens side, end ved en STS. Her kommer SORA ind i billedet, da denne form for ansøgning giver operatøren mulighed for at skræddersy sin ansøgning til lige præcis den droneflyvning vedkommende har planlagt.Dette giver en masse fleksibilitet i ansøgningsprocessen og gør det derved muligt at tilpasse den fuldstændigt efter behov. Med dette kommer dog også en række besværligheder, da man bliver nødt til at sætte sig ind i væsentligt flere love, og retningslinjer, selv i henhold til den plan man har for sin flyvning. Derudover, er der en række sikkerhedsmæssige vurderinger, man igen selv skal tage stilling til, eller i hvertfald dokumenterer hvad man vil foretage sig i tilfælde af en nødsituation. Dette gør det mindre overskueligt for firmaer, der har brug for at flyve med en drone et pågældende sted hvor denne nye SORA-proces bliver implementeret som i Danmark. Dette giver en masse fleksibilitet i ansøgningsprocessen og gør det derved muligt at tilpasse den fuldstændigt efter behov. Med dette kommer dog også en række besværligheder, da man bliver nødt til at sætte sig ind i væsentligt flere love, og retningslinjer, selv i henhold til den plan man har for sin flyvning. Derudover, er der en række sikkerhedsmæssige vurderinger, man igen selv skal tage stilling til, eller i hvertfald dokumenterer hvad man vil foretage sig i tilfælde af en nødsituation. Dette gør det mindre overskueligt for firmaer, der har brug for at flyve med en drone et pågældende sted hvor denne nye SORA-proces bliver implementeret som i Danmark."
    );
  } else if (event.target.id === "2") {
    //Make buttons to the different sora steps
    let p = 0;
    for (let i = 4; i <= 13; i++) {
      make_button("Button", j[p], i, "fakta_sidenav");
      p++;
    }
    make_paragraph(
      "h1",
      "Hvad er SORA",
      "p",
      "SORA er den nyeste lovgivnings-metode og ansøgningsproces, vedtaget af EU angående droneflyvning. SORA er en proces for ansøgning samt godkendelse af droneflyvninger, i den specifikke kategori, som vil blive gennemgået senere i rapporten. SORA er udviklet af JARUS, som er en organisation bestående af diverse luftfartsmyndigheder i EU, samt en større del af de resterende lande i verden, der arbejder med generel luftsikkerhed, af både fly såvel som droner. I forbindelse med at EU har vedtaget SORA som den nye proces ved ansøgning samt godkendelse af droneflyvninger fra 2022, bliver dette også implementeret i Danmark. Dette bliver implementeret i etaper, så det på nuværende tidspunkt er muligt at søge om tilladelse, både efter de nye SORA retningslinjer, såvel som de gamle regler bestemt af de individuelle lande. Eftersom det i 2022 bliver et krav, at der skal ansøges efter SORA, er det derfor vigtigt at ansøgnings- samt godkendelsesprocessen bliver så nem så mulig under denne implementeringsfase, så overgangen bliver gnidningsløs. I løbet af denne problemanalyse gås der mere i dybden med de nye SORA-regler således, at der kan klarlægges hvad der skal til, for at blive godkendt. Ud over godkendelsen, vil der blive nævnt hvilke konsekvenser implementeringen af disse har, både for de firmaer der skal søge efter de nye regler, men også Trafik - Bygge og Boligstyrelsen der skal godkende det. Men inden vi går i dybden med SORA, vil vi først forklare hvad der karakteriserer en drone, samt den specifikke kategori inden for droneflyvning."
    );
  } else if (event.target.id === "3") {
    make_paragraph(
      "h1",
      "Skaberne",
      "p",
      "Vi er gruppen SWB2-21, der studere software på AAU. Formålet med denne webapplikation er at overskueliggøre og simplificere processem ved ansøgninger omkring droneflyvning."
    );
  }
}
//Text function for sidebar
function choose_correct_text_2() {
  if (event.target.id === "4") {
    make_paragraph("p", "hej");
  } else if (event.target.id === "5") {
    make_paragraph("p", "med");
  } else if (event.target.id === "6") {
    make_paragraph("p", "dig");
  } else if (event.target.id === "7") {
    make_paragraph("p", "hej");
  } else if (event.target.id === "8") {
    make_paragraph("p", "med");
  } else if (event.target.id === "9") {
    make_paragraph("p", "dig");
  } else if (event.target.id === "10") {
    make_paragraph("p", "hej");
  } else if (event.target.id === "11") {
    make_paragraph("p", "med");
  } else if (event.target.id === "12") {
    make_paragraph("p", "dig");
  } else if (event.target.id === "13") {
    make_paragraph("p", "hej");
  }
}

chosen_input.addEventListener("click", choose_correct_text);
chosen_input_2.addEventListener("click", choose_correct_text_2);
