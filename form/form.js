let gcdInput = {
    input01: "",
    input02: "",
    input03: "",
    input04: "",
};

const questionContent = {
    question02: {
        ask: "Er jeg spørgsmål 2?",
        choices: {
            choice0: {
                text: "VLOS",
                value: "A",
            },
            choice1: {
                text: "ELOS",
                value: "B",
            },
            choice2: {
                text: "BLOS",
                value: "C",
            },
        },
    },
    question03: {
        ask: "Er jeg spørgsmål 3?",
        choices: {
            choice0: {
                text: ":)",
                value: "AA",
            },
            choice1: {
                text: ";)",
                value: "BB",
            },
            choice2: {
                text: "XD",
                value: "CC",
            },
        },
    },
};

//console.log(Object.entries(questionContent));

/*let name = [
    "question01",
    "question02",
    "question03"
];
*/

//console.log(name[1]);

/*
let p = new Promise((resolve, reject) => {
    
});

nextQuestionPromise().then(() => {
    
})

let nextQuestion = function fireOnce(callback) {
    if (nextQuestion.fired) return;
    nextQuestion.fired = true;
    callback();
    console.log("q1 only onece");
};
*/

// Create question and log user input
const question = document.querySelector("#GRC");
question.addEventListener('change', (event) => {
    
    if(event.target.name == "question01") {
        gcdInput.input01 = event.target.value;

        nextQuestion((function() {
            addFormElement("form02", "question02", "Er jeg spørgsmål 2?", "radio", 3);
        }));
    };
    
    if (event.target.name == "question02") {
        gcdInput.input02 = event.target.value;
        addFormElement("form03", "question03", "Er jeg spørgsmål 3?", "radio", 3);

        //if (event.target.name != "question02") return;

        /*
        nextQuestion((function() {
            addFormElement("form03", "question03", "Er jeg spørgsmål 3?", "radio", 3);
        }));
        */
    };

    if (event.target.name == "question03") {
        gcdInput.input03 = event.target.value;
    };
    
    // Working test
    console.log(gcdInput.input01 + "->" + gcdInput.input02 + "->" + gcdInput.input03);
});

/* -----page-functions-------------------------------------------------------------------------------------- */
function addFormElement(formID, questionID, questionName, typeOfButton, numOfButtons) {
    const mainForm = document.querySelector('#GRC');
    const newForm = document.createElement('form');
    newForm.id = formID;
    mainForm.appendChild(newForm);
    
    const form = document.querySelector(`#${formID}`);
    const newElement = document.createElement("fieldset");
    newElement.id = questionID;
    newElement.innerHTML = `<legend> ${questionName} </legend>`;
    form.appendChild(newElement);
    
    for (let i = 0; i < numOfButtons; i++) {
        let textContent = questionContent[`${questionID}`].choices[`choice${i}`].text;
        let value = questionContent[`${questionID}`].choices[`choice${i}`].value;
        
        makeButton(questionID, typeOfButton, questionID, value, textContent);
        addLineBreak(questionID);
    };
};

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

function addLineBreak(id) {
    const element = document.querySelector(`#${id}`);
    const lineBreak = document.createElement('br');
    return element.appendChild(lineBreak);
}

let nextQuestion = function fireOnce(callback) {
    if (nextQuestion.fired) return;
        nextQuestion.fired = true;
        callback();
        console.log("q1 only onece");
};

/*
function calculateGCD(obj) {
    //console.log(`${event.target.type}`);
    console.log("GCD status:");
    for (let property in obj) {
        console.log(obj[property]);
    }
    console.log("Final GCD: calculating..");
}
*/