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
function make_paragraph(
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
let j = [
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
    make_paragraph(
      "h1",
      "Den specifikke kategori",
      "p",
      "Indenfor den specifikke kategori, angående emnet droneflyvning, findes der yderligere tre ansøgningsmuligheder. Den første mulighed er at arbejde efter et såkaldt standardscenarie (STS). Et standardscenarie er nogle præ-definerede retningslinjer der gælder, så længe der bliver fløjet med droner under forudsætning af at disse retningslinjer overholdes. Ud over (STS) kan der laves to andre former for ansøgninger. Den ene kaldes Predefined Risk Assessment (PDRA) og den anden Specific Operations Risk Assessment (SORA). PDRA minder rigtig meget om førnævnte STS, da dette er prædefinerede retningslinjer der skal overholdes, og der derfor ikke eksisterer nogen fleksibilitet. Dog skal der dokumenteres mere omkring flyvningen fra operatørens side, end ved en STS. Her kommer SORA ind i billedet, da denne form for ansøgning giver operatøren mulighed for at skræddersy sin ansøgning til lige præcis den droneflyvning vedkommende har planlagt.Dette giver en masse fleksibilitet i ansøgningsprocessen og gør det derved muligt at tilpasse den fuldstændigt efter behov. Med dette kommer dog også en række besværligheder, da man bliver nødt til at sætte sig ind i væsentligt flere love, og retningslinjer, selv i henhold til den plan man har for sin flyvning. Derudover, er der en række sikkerhedsmæssige vurderinger, man igen selv skal tage stilling til, eller i hvertfald dokumenterer hvad man vil foretage sig i tilfælde af en nødsituation. Dette gør det mindre overskueligt for firmaer, der har brug for at flyve med en drone et pågældende sted hvor denne nye SORA-proces bliver implementeret som i Danmark. Dette giver en masse fleksibilitet i ansøgningsprocessen og gør det derved muligt at tilpasse den fuldstændigt efter behov. Med dette kommer dog også en række besværligheder, da man bliver nødt til at sætte sig ind i væsentligt flere love, og retningslinjer, selv i henhold til den plan man har for sin flyvning. Derudover, er der en række sikkerhedsmæssige vurderinger, man igen selv skal tage stilling til, eller i hvertfald dokumenterer hvad man vil foretage sig i tilfælde af en nødsituation. Dette gør det mindre overskueligt for firmaer, der har brug for at flyve med en drone et pågældende sted hvor denne nye SORA-proces bliver implementeret som i Danmark.",
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
      make_button("Button", j[p], i, "fakta_sidenav");
      p++;
    }
    make_paragraph(
      "h1",
      "Hvad er SORA",
      "p",
      "SORA er den nyeste lovgivnings-metode og ansøgningsproces, vedtaget af EU angående droneflyvning. SORA er en proces for ansøgning samt godkendelse af droneflyvninger, i den specifikke kategori, som vil blive gennemgået senere i rapporten. SORA er udviklet af JARUS, som er en organisation bestående af diverse luftfartsmyndigheder i EU, samt en større del af de resterende lande i verden, der arbejder med generel luftsikkerhed, af både fly såvel som droner. I forbindelse med at EU har vedtaget SORA som den nye proces ved ansøgning samt godkendelse af droneflyvninger fra 2022, bliver dette også implementeret i Danmark. Dette bliver implementeret i etaper, så det på nuværende tidspunkt er muligt at søge om tilladelse, både efter de nye SORA retningslinjer, såvel som de gamle regler bestemt af de individuelle lande. Eftersom det i 2022 bliver et krav, at der skal ansøges efter SORA, er det derfor vigtigt at ansøgnings- samt godkendelsesprocessen bliver så nem så mulig under denne implementeringsfase, så overgangen bliver gnidningsløs. I løbet af denne problemanalyse gås der mere i dybden med de nye SORA-regler således, at der kan klarlægges hvad der skal til, for at blive godkendt. Ud over godkendelsen, vil der blive nævnt hvilke konsekvenser implementeringen af disse har, både for de firmaer der skal søge efter de nye regler, men også Trafik - Bygge og Boligstyrelsen der skal godkende det. Men inden vi går i dybden med SORA, vil vi først forklare hvad der karakteriserer en drone, samt den specifikke kategori inden for droneflyvning.",
      "text_box",
      "16",
      "17"
    );
  }
  //if the button with id of 3 is pressed, create the following html elements
  else if (event.target.id === "3") {
    make_paragraph(
      "h1",
      "Skaberne",
      "p",
      "Vi er gruppen SWB2-21, der studere software på AAU. Formålet med denne webapplikation er at overskueliggøre og simplificere processem ved ansøgninger omkring droneflyvning.",
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
    make_paragraph(
      "h1",
      "Con-Ops",
      "p",
      "Ansøgeren skal oplyse relevant teknisk, operationel og system information. Informationen som ansøger skal oplyse er knyttet til to kategorier:",
      "text_box",
      "20",
      "21"
    );
    make_paragraph(
      "li",
      "Relevant information om droneoperationen.",
      "li",
      "Relevante tekniske informationer.",
      "21",
      "22",
      "23"
    );
  }
  //if the button with id of 5 is pressed, create the following html elements
  else if (event.target.id === "5") {
    make_paragraph(
      "h1",
      "Ground Risk Class (GRC)",
      "p",
      "Ground Risk Class afgør risikoen for hvorvidt en person på jorden vil blive ramt af UAS’en, såfremt ifald at UAS’en opfylder kravene. Ansøgeren skal oplyse relevant teknisk, operationel og system information:",
      "text_box",
      "24",
      "25"
    );
    make_paragraph(
      "li",
      "Dronens mål og dimensioner",
      "li",
      "Den geografiske placering for droneoperationen",
      "25",
      "26",
      "27"
    );

    make_paragraph(
      "p",
      "Det første som skal gøres for at bestemme UAS'ens GRC er at finde den intrinsic GRC på baggrund af tabel. Denne findes med UAS'ens dimensioner og de gældende omstændigheder for flyvningen. Hvis der opstår en situation således at UAS'ens dimensioner ikke stemmer overens, vil der skulle forelægges bevisgrund for den valgte kolonne. ",
      "p",
      "Dernæst korrigeres den med mitigations/risikoreduktioner fra Annex B, som kan aflæses i tabellen nederst på siden ud fra low, medium eller high robustness. Disse risikoreduktioner kan påvirke den endelige GRC i både negativ og positiv retning. For at finde robustness for hver aflæses, af table 2, 3, 6, 7, 8, og 9 i Annex B, Level of Integrity og Level of Assurance, som tilsammen angiver den aktuelle robustness. ",
      "27",
      "28",
      "29"
    );
    input_picture("Pictures/Table2_GRC_det(ny).png", "28");
    input_picture("Pictures/Table_3_mitigations_for_GRC.png", "27");
    input_picture("Pictures/Level_of_Robustness_det.PNG", "27");
  }
  //if the button with id of 6 is pressed, create the following html elements
  else if (event.target.id === "6") {
    make_paragraph(
      "h1",
      "Air Risk Class (ARC)",
      "p",
      "ARC er et udtryk for kollissionsrisikoen mellem et ubemandet fly og de bemandede fly i et givet område, uden eventuelle modregninger. ARC vil ligge under en af følgende værdier:",
      "text_box",
      "30",
      "31"
    );
    make_paragraph("li", "ARC-a", "li", "ARC-b", "31", "32", "33");
    make_paragraph("li", "ARC-c", "li", "ARC-d", "33", "34", "35");
    make_paragraph(
      "p",
      "ARC-a er defineret ved et luftrum hvori, kollissionsrisikoen mellem et bemandet fly og et ubemandet fly kan accepteres, uden at man har tilføjet Tactical Mitigation Performance Requirements, som beskrives i næste sektion.",
      "p",
      "ARC-b, ARC-c og ARC-d er defineret ved et luftrum hvori, der er øget risiko for kollision mellem et bemandet fly og et ubemandet fly. For at bestemme risikoen i luften, vil der i nogle lande først og fremmest være en Air Navigation Service Provider (ANSP), som muligvis har gjort et kort tilgængeligt, hvoraf man kan aflæse ARC for et givent område. Hvis sådan et redskab ikke er tilgængeligt, kan man bruge følgende figur til at finde den rette ARC. Desuden er det vigtigt at man vurderer hele området man ønsker at flyve i, når man vil finde sin ARC. ",
      "35",
      "36",
      "37"
    );
    input_picture("Pictures/ArcAssignmentProcess.png", "37");
  }
  //if the button with id of 8 is pressed, create the following html elements
  else if (event.target.id === "8") {
    make_paragraph(
      "h1",
      "Tactical Mitigation Performance Requirement (TMPR)",
      "p",
      "Tactical Mitigation Performance Requirement, eller her benævnt i rapporten som TMPR er anvendt som en del af SORA-processen, for at mindske risikoen for kollisioner i luften. Dette er nødvendigt for at opnå det nødvendige luftrums sikkerhedsmål. I praksis kan TMPR opnås ved enten en See and Avoid metode (operationer under VLOS), og ellers kræver det et forudaftalt system som tilbyder et alternativ for at opnå det nødvendige sikkerhedsmål i luftrummet. Dette forudaftalte system dækker over en operation som benytter et eller flere Detect and Avoid (DAA) systemer.",
      "text_box",
      "38",
      "39"
    );
    make_paragraph(
      "h1",
      "Operationer under VLOS/EVLOS (Extended Visual Line of Sight): ",
      "li",
      "VLOS ses som et acceptabel TMPR ved risiko for kollision under alle ARC-niveauer. Det er anbefalet, at operatøren overvejer at anvende flere midler, for at øge situationsopmærksomheden, i forhold til luftrummet i nærheden.",
      "39",
      "40",
      "41"
    );
    make_paragraph(
      "li",
      "Operationelle UAS flyvninger under VLOS behøver hverken at imødekomme TMPR, eller kravet til robustness. I tilfælde af at flyvningen foregår over flere strækninger, behøver strækninger under VLOS ikke at imødekomme TMPR eller tilhørende krav til robustness, hvorimod strækninger under BVLOS skal imødekomme disse krav. ",
      "li",
      "Generelt set er kravene til VLOS operationer også gældende for EVLOS operationer. Derudover kan EVLOS operationer have yderligere krav på niveau over VLOS. Forsinkelsen på EVLOS verifikation- og kommunikationen mellem pilot og observant(er) skal være mindre end 15 sekunder. ",
      "41",
      "42",
      "43"
    );
    make_paragraph(
      "li",
      "Uanset de ovenstående krav, skal ansøgeren have en dokumenteret konflikthåndterings ordning, hvori ansøgeren forklarer hvilke metoder der anvendes til at registrere andre luftfarttøjer. Dermed skal ansøgeren definere de tilhørende kriterier, som anvendes i beslutningen om at undvige indgående trafik. Såfremt den fjernstyrerede pilot er afhængig af assistance gennem observant(er), skal brugen af fraseologi (terminologi) dokumenteres. ",
      "li",
      "Angående VLOS operationer, forventes det at en observant ikke er i stand til at registrere trafik længere end 2 NM (nautiske mil). (Det noteres at 2NM rækkeviden ikke er en fastsat værdi, men i tilfælde afhængig af atmosfæriske betingelser, dronens størrelse, geometri, lukkerate osv.)",
      "43",
      "44",
      "45"
    );
    make_paragraph("BR", "", "p", "", "45", "46", "47");
    make_paragraph(
      "strong",
      "Operationer under et Detect and Avoid (DAA) system: ",
      "p",
      "For alle operationer udover VLOS-operationer, vil ansøgeren bruge den resterende ARC og nedenstående tabel (fra JARUS) til bestemmelse af TMPR niveauet. ",
      "47",
      "48",
      "49"
    );
    input_picture("Pictures/annex_d_table_4.png", "49");
  }
  //if the button with id of 9 is pressed, create the following html elements
  else if (event.target.id === "9") {
    make_paragraph(
      "h1",
      "Specific Assurance and Integrity Levels (SAIL) & Operational Safety Objectives (OSO)",
      "p",
      "SAIL står for Specific Assurance and Integrity Levels, og benyttes i forbindelse med bestemmelse af det niveau af tillid til, at UAS operationen forbliver under kontrol. Til det benyttes SAIL-parametrene, som med udgangspunkt i de forrige trin laver en samlet vurdering, ved at analysere GRC og ARC. Selve vurderingen, som foretages, er kvalitativ og vil til sidst ende ud med en beskrivelse af de aktiviteter, som vil understøtte overholdelsen af de mål, der er sat. På den måde bliver der skabt en indikering af, om målene opfyldes, og i hvor stor grad målene, som der refereres til også opfylder Operational Safety Objectives (OSO).",
      "text_box",
      "49",
      "50"
    );
  }
  //if the button with id of 10 is pressed, create the following html elements
  else if (event.target.id === "10") {
    make_paragraph(
      "h1",
      "Operational safety Objectives",
      "p",
      "SORA-processens sidste trin er at evaluere forsvareligheden inden for operationen, ved hjælp af SAIL. Dette foregår i formen OSO. OSO består af 24 dele, opdelt i fire kategorier. Det bruges til at bestemme hvilket level of robustness, som flyvningen med den pågældende drone, associeres med. Tabellen er en kvalitativ metode, hvorpå robustness bestemmes. Her tildeles fire forskellige bogstaver, i forhold til hvilket tal man nåede frem til i SAIL:",
      "text_box",
      "51",
      "52"
    );
    make_paragraph(
      "li",
      "O: står for Optional, og er derfor ikke noget man behøver, for at flyve dronen.",
      "li",
      "L: står for Low level of robustness, og her er det den enkeltes eget ansvar, at have styr på de nødvendige foranstaltninger i forhold til træning og dronen. Det er nødvendigt at dokumentere at de har haft træning, men ikke hvilken slags træning det drejer sig om. Der vil altså ikke være nogen udefrakommende, som skal godkende noget på forhånd. ",
      "52",
      "53",
      "54"
    );
    make_paragraph(
      "li",
      "M: står for Medium Level of Robustness, og det betyder, at der kræves dokumentation på træning, samt hvilken slags træning der er foretaget. Der vil heller ikke her være nogen udefrakommende, som skal godkende noget på forhånd.",
      "li",
      "H: står for High level of Robustness, hvilket betyder, at alt dokumentation, som omhandler flyvningen og træning, skal godkendes af en tredjepart. ",
      "54",
      "55",
      "56"
    );
    make_paragraph(
      "p",
      "Dette skal enten stå i Operational Manual, eller vedhæftes andensteds.",
      "p",
      "De mange forskellige OSO-grupper er baseret på den risiko de er med til at dæmpe. Det betyder også, at der er nogle OSO's som vil blive gentaget flere steder i tabellen. Tilsammen vil det give et udfald, som fortæller, hvor sikkert det er at flyve, og hvad brugeren bør være opmærksom på inden flyvningen påbegyndes.",
      "text_box",
      "57",
      "58"
    );
    input_picture("Pictures/SAIL_Tabel.png", "58");
  }
  //if the button with id of 11 is pressed, create the following html elements
  else if (event.target.id === "11") {
    make_paragraph(
      "h1",
      "Luftrumsovervejelser",
      "p",
      "Ansøger skal tage højde for risikoen ved manglende kontrol af dronen som kan medføre overtrædelse af det tilstødende jordområde og/eller luftrum hvor droneoperationen gennemføres. Det tilstødende jordområde/luftrum kan variere under operationen, hvis droneflyvningen som bliver foretaget følger forskellige ruter. De sikkerhedsmæssige krav for at holde en potentiel skadelig droneoperation under kontrol er (JARUS-guidelines):",
      "text_box",
      "59",
      "60"
    );
    make_paragraph(
      "li",
      "Ingen mulig fejl i UAS’en eller i nogle af de eksterne systemer, som understøtter operationen, må føre til overtrædelse af tilstødende jordområde/luftrum.",
      "p",
      "Disse krav ligger til grund for det sikkerhedsmæssige krav:",
      "60",
      "61",
      "62"
    );
    make_paragraph(
      "li",
      "Operationen skal være godkendt til at flyve ved forsamlinger af mennesker, for at flyvning ved tilstødende jordområde/luftrum med forsamlinger af mennesker, ikke overskrider sikkerhedskravene.  Eller at operationen er ARC-d og ikke en anden ARC.",
      "li",
      "I et befolket område hvor M1-mitigation har mindsket GRC skal sikkerhedskravet opfyldes.",
      "62",
      "63",
      "64"
    );
  }
  //if the button with id of 12 is pressed, create the following html elements
  else if (event.target.id === "12") {
    make_paragraph(
      "h1",
      "Sikkerhedsportefølje",
      "p",
      "SORA-processen konkluderes med en tydelig fremgangsmåde for både ansøger og myndighed, hvorpå der er taget højde for en række sikkerhedsmæssige hensyn, for at reducere en potentiel skadelig droneoperation. ",
      "text_box",
      "65",
      "66"
    );
    make_paragraph(
      "p",
      "Sikkerhedsporteføljen beskriver og indeholder en detaljeret beskrivelse af: ",
      "li",
      "Valg truffet for at reducere en potentiel skadelig droneoperation for jordområdet.",
      "66",
      "67",
      "68"
    );
    make_paragraph(
      "li",
      "De strategiske valg der er truffet for at reducere en potentiel skadelig droneoperation i luften.",
      "li",
      "De taktiske valg der er truffet for at reducere en potentiel skadelig dronekollision i luften.",
      "68",
      "69",
      "70"
    );
    make_paragraph(
      "li",
      "Ansøgerens luftrumsovervejelser.",
      "li",
      "En sikkerhedsevaluering af droneoperationen, med hensigt på at give en samlet robustness bestemmelse.",
      "70",
      "71",
      "72"
    );
    make_paragraph(
      "p",
      "Hvis sikkerhedsporteføljen er udfyldt tilfredsstillende, har porteføljen til formål at give myndigheden en tilstrækkelig grad af tillid til droneoperationen. Derfor er det vigtigt at ansøgeren er til rådighed ved eventuelle tilføjelser til SORA-processen, som myndigheden kan efterspørge. ",
      "p",
      "Samarbejdet mellem ansøger og myndighed er konsistent gennem hele SORA-processen, til det formål at sikre at droneoperationens sikkerhedskrav er sammenhængende med de aktuelle forhold der opereres under (JARUS-guidelines).",
      "72",
      "73",
      "74"
    );
  }
  //if the button with id of 7 is pressed, create the following html elements, as of now we have choosen not to take the 5th step into account
  else if (event.target.id === "7") {
    make_paragraph("p", "hej");
  }
}

chosen_input.addEventListener("click", choose_correct_text);
chosen_input_2.addEventListener("click", choose_correct_text_2);
