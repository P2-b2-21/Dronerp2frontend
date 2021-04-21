/* On page load
   initialising and making page
   with JSON data from server   */
let questionContent = {};
fetch(`questions_${MAINFORM}.json`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    questionContent = data;
    initPage(0, 1);
    makePage("form1", 1, 2);
    makeSubmitButton();
  });

/* Log user input */
const question = document.querySelector(`#${MAINFORM}`);
question.addEventListener("change", (event) => {
  questionContent[`${event.target.name}`].userInput = event.target.value;

  //console.log(questionContent);
  // Output test displaying user input
  let output = "";
  for (let i = 1; i <= Object.keys(questionContent).length; i++) {
    output += questionContent[`question${i}`].userInput + "-> ";
  }
  console.log((output += "end"));
});

/* -----page-functions-------------------------------------------------------------------------------------- */

/* Create questions from JSON Object */
function makePage(form, quesNum, formNum) {
  if (Object.keys(questionContent).length == quesNum) return;

  let currentQuestion = Object.keys(questionContent)[quesNum];
  let numOfButtons = Object.keys(questionContent[`${currentQuestion}`].choices)
    .length;

  new Promise(function (resolve, reject) {
    document.querySelector(`#${form}`).addEventListener(
      "change",
      () => {
        addFormElement(
          `form${formNum}`,
          `${currentQuestion}`,
          questionContent[`${currentQuestion}`].ask,
          "radio",
          numOfButtons
        );
        resolve();
      },
      { once: true }
    );
  }).then(
    function () {
      quesNum++;
      formNum++;
      makePage(`form${quesNum}`, quesNum, formNum);
    },
    function (err) {
      console.log(err);
    }
  );
}

/* Add question with choices to DOM tree */
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
function makeSubmitButton() {
  const numOfLastQuestion = Object.keys(questionContent).length;
  $(`#${MAINFORM}`).one("change", `#form${numOfLastQuestion}`, () => {
    makeButton(
      `${MAINFORM}`,
      "submit",
      "submitBtn",
      "Send JSON obj til server og gå til ARC"
    );
    document
      .querySelector('[name="submitBtn"]')
      .setAttribute("onclick", "location.href='index.html'");
  });
}

let GRCMatrix = [
  [1, 2, 3, 4, 5, 7, 8],
  [2, 3, 4, 5, 6],
  [3, 4, 5, 6, 8],
  [4, 5, 6, 8, 10],
];

let GRCAnswer = {
  droneLength: {
    oneMeter: 0,
    threeMeter: 1,
    eightMeter: 2,
    aboveEightMeter: 3,
  },
  lineOfSight: {
    VLOS: 0,
    BVLOS: 1,
  },
  flightType: {
    Controlled: 0,
    SparsleyPopulated: 1,
    Populated: 3,
    Gathering: 5,
  },
};

function calculateGRC(Length = 0, LOS = 0, type = 0) {
  let y = type > 0 ? type + LOS : 0;
  console.log("Drone Length: " + LOS);
  console.log("Los: " + LOS);
  console.log("Flight Type: " + type);
  return GRCMatrix[Length][y];
}
const GRC = calculateGRC(
  GRCAnswer.droneLength.threeMeter,
  GRCAnswer.lineOfSight.BVLOS,
  GRCAnswer.flightType.SparsleyPopulated
);
if (GRC) {
  console.log("\x1b[32mDu har en GRC på: " + GRC); //Grøn Farve
} else {
  console.log("\x1b[31mIngen GRC fundet"); //Rød farve
}
