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

let width = 0;

/*function move() {
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
   }*/
let output = [];
/* Log user input */
const question = document.querySelector(`#${MAINFORM}`);
question.addEventListener("change", (event) => {
  /*if (width < 100) {
       move();
     }*/
  output.push(
    (questionContent[`${event.target.name}`].userInput = event.target.value)
  );

  //console.log(questionContent);
  // Output test displaying user input
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

/* Add button to quistion */
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

    let sbtn = document.querySelector('[name="submitBtn"]');
    sbtn.addEventListener("click", () => {
      calculateGRC(
        parseInt(output[0]),
        parseInt(output[1]),
        parseInt(output[2])
      );
      mitigateGrc(
        parseInt(output[3]),
        parseInt(output[4]),
        parseInt(output[5]),
        parseInt(output[6])
      );
      console.log(output);
    });
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
let GRC = 0;
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
  console.log(GRC);
  return GRC;
}
