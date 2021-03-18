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

function make_paragraf(element = "", text = "") {
  let type = document.createElement(element);

  let text_in_box = document.createTextNode(text);

  type.appendChild(text_in_box);

  document.getElementById("text_box").appendChild(type);
}

function make_button(element = "", text = "") {
  let type = document.createElement(element);

  let text_in_box = document.createTextNode(text);

  type.appendChild(text_in_box);
  type.value = "knap";
  document.getElementById("fakta_topnav").appendChild(type);
}

make_button("Button", "Den specifikke kategori");
make_button("Button", "Om - SORA");
make_button("Button", "Hvem er vi");
//Herfra og ned virker ikke en skid så det skal fikses
let button = document.querySelectorAll('#fakta_topnav button[value="knap"]');

function choose_correct_paragraph() {
  if (event.target.value === "Den specifikke kategori") {
    make_paragraf(
      "p",
      "Indenfor den specifikke kategori, angående emnet droneflyvning, findes der yderligere tre ansøgningsmuligheder. Den første mulighed er at arbejde efter et såkaldt standardscenarie (STS). Et standardscenarie er nogle præ-definerede retningslinjer der gælder, så længe der bliver fløjet med droner under forudsætning af at disse retningslinjer overholdes."
    );
    make_paragraf(
      "p",
      "Ud over (STS) kan der laves to andre former for ansøgninger. Den ene kaldes Predefined Risk Assessment (PDRA) og den anden \textit{Specific Operations Risk Assessment} (SORA). PDRA minder rigtig meget om førnævnte STS, da dette er prædefinerede retningslinjer der skal overholdes, og der derfor ikke eksisterer nogen fleksibilitet. Dog skal der dokumenteres mere omkring flyvningen fra operatørens side, end ved en STS.Her kommer SORA ind i billedet, da denne form for ansøgning giver operatøren mulighed for at skræddersy sin ansøgning til lige præcis den droneflyvning vedkommende har planlagt.Dette giver en masse fleksibilitet i ansøgningsprocessen og gør det derved muligt at tilpasse den fuldstændigt efter behov. Med dette kommer dog også en række besværligheder, da man bliver nødt til at sætte sig ind i væsentligt flere love, og retningslinjer, selv i henhold til den plan man har for sin flyvning. Derudover, er der en række sikkerhedsmæssige vurderinger, man igen selv skal tage stilling til, eller i hvertfald dokumenterer hvad man vil foretage sig i tilfælde af en nødsituation. Dette gør det mindre overskueligt for firmaer, der har brug for at flyve med en drone et pågældende sted hvor denne nye SORA-proces bliver implementeret som i Danmark."
    );

    make_paragraf(
      "p",
      "Dette giver en masse fleksibilitet i ansøgningsprocessen og gør det derved muligt at tilpasse den fuldstændigt efter behov. Med dette kommer dog også en række besværligheder, da man bliver nødt til at sætte sig ind i væsentligt flere love, og retningslinjer, selv i henhold til den plan man har for sin flyvning. Derudover, er der en række sikkerhedsmæssige vurderinger, man igen selv skal tage stilling til, eller i hvertfald dokumenterer hvad man vil foretage sig i tilfælde af en nødsituation. Dette gør det mindre overskueligt for firmaer, der har brug for at flyve med en drone et pågældende sted hvor denne nye SORA-proces bliver implementeret som i Danmark."
    );
  } else if (event.target.value === "Hvem er vi") {
    make_paragraf(
      "p",
      "Vi er en gruppen SWB2-21, der studere software på AAU. Formålet med denne webapplikation er at overskueliggøre og simplificere processem ved ansøgninger omkring droneflyvning."
    );
  }
}

button.addEventListener("click", choose_correct_paragraph);
