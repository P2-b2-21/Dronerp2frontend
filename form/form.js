let developmentMode = true;
let frontendAddr = developmentMode
  ? "127.0.0.1:5500"
  : "server.malthelarsen.dk";
let backendAddr = developmentMode
  ? "127.0.0.1:3000"
  : "server.malthelarsen.dk:3000";

console.log(frontendAddr);
console.log(backendAddr);

/* **********************
   On page load
   initialising and making page
   with JSON data from server 
   **********************  
*/
let questionContent = {};
fetch(`questions_${MAINFORM}.json`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    questionContent = data;
    initPage(0, 1);
    makePage("form1", 1, 2);
  });

const question = document.querySelector(`#${MAINFORM}`);

/*  *****************
    Loading bar for GRC 
    ****************
*/
let width = 0;
function move() {
  if (width >= 100) {
    return;
  }

  let elem = document.getElementById("myBar");
  width += Math.ceil(100 / Object.keys(questionContent).length);
  elem.style.width = width + "%";
  elem.innerHTML = width + "%";

  if (width >= 100) {
    elem.innerHTML = width = 100 + "%";
  }
}

/*
   ********************** 
   GRC handling
   **********************
*/

if (MAINFORM === "GRC") {
  console.log(`questions_${MAINFORM}.json.. loaded`);

  makeSubmitButton(postFinalGRC, "POSTING TO SERVER & GOES TO ARC", "arc.html");

  let output = [];

  question.addEventListener("change", (event) => {
    const numOfLastQuestion = Object.keys(questionContent).length;
    //Til loading bar GRC
    if (width < 100) {
      move();
    }

    if (event.target.parentNode.parentNode.id === `form${numOfLastQuestion}`) {
      // Make submit button available
      document.querySelector('[name="submitBtn"]').disabled = false;
    } else {
      // Gray out toggle submit button
      document.querySelector('[name="submitBtn"]').disabled = true;
    }

    // Log user input
    questionContent[`${event.target.name}`].userInput = event.target.value;

    // Display user input
    for (let i = 1; i <= 7; i++) {
      console.log(questionContent[`question${i}`].userInput);
    }
  });
}

// Make form4 handel gray out button in form7
if (MAINFORM === "GRC") {
  document.querySelector("#GRC").addEventListener("change", (event) => {
    if (document.querySelector(`#question7`) != null) {
      if (questionContent[`question${4}`].userInput === "1") {
        document.querySelectorAll(
          'input[name="question7"]'
        )[0].disabled = false;
      }
      if (questionContent[`question${4}`].userInput === "0") {
        document.querySelectorAll('input[name="question7"]')[0].disabled = true;
      }
    }
  });
}

let GRCMatrix = [
  [1, 2, 3, 4, 5, 7, 8],
  [2, 3, 4, 5, 6],
  [3, 4, 5, 6, 8],
  [4, 5, 6, 8, 10],
];

let mitigationMatrix = [
  [0, 0, 0, 0],
  [0, -1, -2, -4],
  [0, 0, -1, -2],
  [0, 1, 0, -1],
];

/*
   ********************** 
   ARC handling
   **********************
*/

if (MAINFORM === "ARC") {
  let params = new URLSearchParams(location.search);
  GRC = params.get("GRC");

  if (GRC == undefined) {
    alert("GRC not found, redirecting to GRC");
    window.location.href = `http://${frontendAddr}/form/grc.html`;
  }

  console.log(GRC);

  console.log(`questions_${MAINFORM}.json.. loaded`);

  makeSubmitButton(
    postFinalARC,
    "POSTING TO SERVER & GOES TO BRUGERPROFIL",
    "../brugerprofil.html"
  );

  let userInput = [];

  question.addEventListener("change", (event) => {
    let currNode = event.target.parentNode.parentNode;
    // Executes when ARC value has been selected
    if (
      event.target.value !== "subquestion" &&
      event.target.value !== "next-question"
    ) {
      // Make submit button available
      document.querySelector('[name="submitBtn"]').disabled = false;

      // Hides all questions that comes after currently clicked question
      findAllNextElementSiblings(currNode).forEach((element) => {
        element[0].style.display = "none";

        /* TO DO: catch error */
        // Uncheck radio buttons
        element[0].childNodes[1].checked = false;
        element[0].childNodes[4].checked = false;
      });
    } else {
      // Gray out toggle submit button
      document.querySelector('[name="submitBtn"]').disabled = true;
    }

    if (event.target.value === "next-question") {
      let nextID = currNode.nextSibling.childNodes[0].id;
      document.querySelector(`#${nextID}`).style.display = "";
    }

    if (
      currNode.id.replace(/[0-9]/, "") === "form" &&
      doesSubQuestionPathExist() === 1
    ) {
      removeSubQuestionPath(currNode);
    }

    // Makes next sub questiong path
    if (
      event.target.value === "subquestion" &&
      doesSubQuestionPathExist() === 0
    ) {
      let questionOBJ = questionContent[`${event.target.parentNode.id}`];
      questionOBJ =
        (((questionOBJ || {}).choices || {}).choice0 || {}).subquestion0 || {};
      initSubQuestionPath(questionOBJ, 0);
      initSubQuestionButtons();

      let nextID = currNode.nextSibling.childNodes[0].id;
      document.querySelector(`#${nextID}`).style.display = "";
    }

    /* TO DO: use id: form4 */
    if (
      event.target.value === "next-question" &&
      doesSubQuestionPathExist() === 0
    ) {
      document.querySelector("#form4").style.display = "";
    }

    if (
      event.target.value === "subquestion" &&
      doesSubQuestionPathExist() === 1
    ) {
      let nextID = currNode.nextSibling.childNodes[0].id;
      document.querySelector(`#${nextID}`).style.display = "";
    }

    // Log user input
    userInput += "," + event.target.value;
    ARC = event.target.value;
    console.log(userInput);
  });
}

let ARC;

/*
  ********************** 
  Page functions
  **********************
*/

/* Create questions from JSON Object */
function makePage(form, quesNum, formNum) {
  if (Object.keys(questionContent).length == quesNum) return;

  // TODO: do name change */
  let currentQuestion = Object.keys(questionContent)[quesNum];
  console.log("currentQuestion: " + currentQuestion);

  let numOfButtons = Object.keys(questionContent[`${currentQuestion}`].choices)
    .length;

  document.querySelector(`#${form}`).addEventListener(
    "change",
    (event) => {
      addFormElement(
        `form${formNum}`,
        `${currentQuestion}`,
        questionContent[`${currentQuestion}`].ask,
        "radio",
        numOfButtons
      );
      quesNum++;
      formNum++;
      makePage(`form${quesNum}`, quesNum, formNum);
    },
    { once: true }
  );
}

function initSubQuestionPath(obj, i) {
  Object.keys(obj).forEach((key) => {
    if (key == "ask") {
      addSubFormElement(
        `subform${i}`,
        `subquestion${i}`,
        `${obj[key]}`,
        "radio",
        2
      );
      i++;
    }
    if (typeof obj[key] == "object") {
      initSubQuestionPath(obj[key], i);
    }
  });
}

function findAllNextElementSiblings(node) {
  let siblings = [];
  while ((node = node.nextSibling)) {
    siblings.push(node);
  }
  return siblings;
}

function initSubQuestionButtons() {
  switch (event.target.parentNode.id) {
    case "question3":
      {
        event.target.parentNode.parentNode.nextSibling.style.display = "none";
        document.querySelector("#subquestion0").style.display = "";

        makeButton(
          `subquestion${0}`,
          "radio",
          `subquestion${0}`,
          "ARC-d",
          "Ja"
        );
        addLineBreak(`subquestion${0}`);
        makeButton(
          `subquestion${0}`,
          "radio",
          `subquestion${0}`,
          "ARC-c",
          "Nej"
        );
      }
      break;
    case "question4":
      {
        if (event.target.nextSibling.innerText === "Ja") {
          makeButton(
            `subquestion${0}`,
            "radio",
            `subquestion${0}`,
            "ARC-d",
            "Ja"
          );
          addLineBreak(`subquestion${0}`);
          makeButton(
            `subquestion${0}`,
            "radio",
            `subquestion${0}`,
            "subquestion",
            "Nej"
          );

          makeButton(
            `subquestion${1}`,
            "radio",
            `subquestion${1}`,
            "ARC-d",
            "Ja"
          );
          addLineBreak(`subquestion${1}`);
          makeButton(
            `subquestion${1}`,
            "radio",
            `subquestion${1}`,
            "subquestion",
            "Nej"
          );

          makeButton(
            `subquestion${2}`,
            "radio",
            `subquestion${2}`,
            "ARC-c",
            "Ja"
          );
          addLineBreak(`subquestion${2}`);
          makeButton(
            `subquestion${2}`,
            "radio",
            `subquestion${2}`,
            "subquestion",
            "Nej"
          );

          makeButton(
            `subquestion${3}`,
            "radio",
            `subquestion${3}`,
            "ARC-c",
            "Ja"
          );
          addLineBreak(`subquestion${3}`);
        } else {
          makeButton(
            `subquestion${0}`,
            "radio",
            `subquestion${0}`,
            "ARC-c",
            "Ja"
          );
          addLineBreak(`subquestion${0}`);
          makeButton(
            `subquestion${0}`,
            "radio",
            `subquestion${0}`,
            "subquestion",
            "Nej"
          );

          makeButton(
            `subquestion${1}`,
            "radio",
            `subquestion${1}`,
            "ARC-c",
            "Ja"
          );
          addLineBreak(`subquestion${1}`);
          makeButton(
            `subquestion${1}`,
            "radio",
            `subquestion${1}`,
            "subquestion",
            "Nej"
          );

          makeButton(
            `subquestion${2}`,
            "radio",
            `subquestion${2}`,
            "ARC-c",
            "Ja"
          );
          addLineBreak(`subquestion${2}`);
          makeButton(
            `subquestion${2}`,
            "radio",
            `subquestion${2}`,
            "subquestion",
            "Nej"
          );

          makeButton(
            `subquestion${3}`,
            "radio",
            `subquestion${3}`,
            "ARC-b",
            "Ja"
          );
          addLineBreak(`subquestion${3}`);
        }
      }
      break;
  }
}

function removeSubQuestionPath(node) {
  findAllNextElementSiblings(node).forEach((element) => {
    if (element.id.replace(/[0-9]/, "") === "subform") {
      console.log("removeSubQuestionPath");
      console.log(element.id);
      element.remove();
    }
  });
}

function doesSubQuestionPathExist() {
  let formStart = document.querySelector("#form1");
  let result = 0;
  findAllNextElementSiblings(formStart).forEach((element) => {
    if (element.id.replace(/[0-9]/, "") === "subform") {
      result = 1;
    }
  });
  return result;
}

/* Add quistion with choices to DOM tree */
function addFormElement(
  formID,
  questionID,
  questionName,
  typeOfButton,
  numOfButtons
) {
  const mainForm = document.querySelector(`#${MAINFORM}`);
  const newForm = document.createElement("form");
  newForm.id = formID;
  mainForm.appendChild(newForm);

  const form = document.querySelector(`#${formID}`);
  const newElement = document.createElement("fieldset");
  newElement.id = questionID;
  newElement.innerHTML = `<legend> ${questionName} </legend>`;
  form.appendChild(newElement);

  for (let i = 0; i < numOfButtons; i++) {
    let textContent =
      questionContent[`${questionID}`].choices[`choice${i}`].text;
    let value = questionContent[`${questionID}`].choices[`choice${i}`].value;

    makeButton(questionID, typeOfButton, questionID, value, textContent);
    addLineBreak(questionID);
  }
}

function addSubFormElement(
  formID,
  questionID,
  questionName,
  typeOfButton,
  numOfButtons
) {
  const mainForm = document.querySelector(`#${MAINFORM}`);
  const newForm = document.createElement("form");
  newForm.id = formID;
  mainForm.appendChild(newForm);

  const form = document.querySelector(`#${formID}`);
  const newElement = document.createElement("fieldset");
  newElement.id = questionID;
  newElement.innerHTML = `<legend> ${questionName} </legend>`;

  newElement.style.display = "none";

  form.appendChild(newElement);
}

/* Add first question to DOM tree */
function initPage(quesNum, formNum) {
  let currentQuestion = Object.keys(questionContent)[quesNum];
  let numOfButtons = Object.keys(questionContent[`${currentQuestion}`].choices)
    .length;

  addFormElement(
    `form${formNum}`,
    `${currentQuestion}`,
    questionContent[`${currentQuestion}`].ask,
    "radio",
    numOfButtons
  );
}

/* Add button to question */
function makeButton(idElement, typeOfButton, name, value, textContent) {
  const element = document.querySelector(`#${idElement}`);

  button = document.createElement("input");
  button.type = typeOfButton;
  button.name = name;
  button.value = value;
  element.appendChild(button);

  label = document.createElement("label");
  label.textContent = textContent;
  element.appendChild(label);
}

/* Insert line break to DOM tree, helper function */
function addLineBreak(id) {
  const element = document.querySelector(`#${id}`);
  const lineBreak = document.createElement("br");
  return element.appendChild(lineBreak);
}

/* Add submit button to the end of page */
function makeSubmitButton(postToServerFunc, value, nextPage) {
  const element = document.querySelector(`#${MAINFORM}`);

  button = document.createElement("input");
  button.type = "submit";
  button.name = "submitBtn";
  button.value = value;
  button.disabled = true;

  //button.setAttribute("onclick", `location.href='${nextPage}'`)

  element.insertAdjacentElement("afterend", button);
  label = document.createElement("label");
  element.insertAdjacentElement("afterend", label);

  let sbtn = document.querySelector('[name="submitBtn"]');
  sbtn.addEventListener("click", postToServerFunc);
}

/*
   ********************** 
   GRC specific functions
   **********************
*/

function postFinalGRC() {
  calculateGRC(
    parseInt(questionContent[`question${1}`].userInput),
    parseInt(questionContent[`question${2}`].userInput),
    parseInt(questionContent[`question${3}`].userInput)
  );
  mitigateGrc(
    parseInt(questionContent[`question${4}`].userInput),
    parseInt(questionContent[`question${5}`].userInput),
    parseInt(questionContent[`question${6}`].userInput),
    parseInt(questionContent[`question${7}`].userInput)
  );

  //console.log(GRC)
  //postObjectToServer('GRC', GRC, `http://${frontendAddr}/form/arc.html`)

  let idk = {
    GRC: GRC,
  };

  console.log(idk);

  postGRCToServer(idk).then((res) => console.log(res));
}

function calculateGRC(lenght, los, type) {
  let y = 0;
  if (type > 0) {
    y = los + type;
  } else {
    y = 0;
  }
  GRC = GRCMatrix[lenght][y];
  return GRC;
}

function mitigateGrc(attToGround, parachute, erp, robustness) {
  if (robustness === 0) {
    return GRC;
  } else {
    GRC = GRC + mitigationMatrix[attToGround][robustness];
    GRC = GRC + mitigationMatrix[parachute][robustness];
    GRC = GRC + mitigationMatrix[erp][robustness];
  }
  //console.log(GRC);
  return GRC;
}

async function postGRCToServer(grcToPost) {
  fetch(`http://${backendAddr}/GRC`, {
    method: "POST",
    body: JSON.stringify(grcToPost),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) console.log("Ok");
    window.location.href = `http://${frontendAddr}/form/arc.html?GRC=${grcToPost.GRC}`;

    console.log(res);
  });
  return "All good";
}

async function postObjectToServer(endpoint, object, redirect = undefined) {
  return new Promise((resolve, reject) => {
    fetch(`http://${backendAddr}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(object),
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => {
        if (result.ok) {
          if (redirect != undefined) {
            console.log(redirect);
            //window.location.href = redirect
          }
          resolve();
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

function postFinalARC() {
  let objToSend = {
    arc: ARC,
    grc: GRC,
  };

  postObjectToServer("ARCGRC", objToSend)
    .then(() => {
      console.log("GGWP MFER");
    })
    .catch((err) => console.log("Det ikke for godt det her: \n " + err));
  console.log("POSTING ARC");
}
