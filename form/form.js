let gcdInput = {
    input01: "",
    input02: "",
    input03: "",
    input04: "",
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

//addFormElement("form02", "question02", "Er jeg spørgsmål 2?", "radio", 3);

function addFormElement(numOfButtons, formID, fieldsetID, questionName, typeOfButton, ) {
    const mainForm = document.querySelector('#GRC');
    const newForm = document.createElement('form');
    newForm.id = "form02";
    mainForm.appendChild(newForm);

    const form = document.querySelector('#form02');
    const newElement = document.createElement("fieldset");
    newElement.id = "question02";
    newElement.innerHTML = '<legend> VLOS-ELOS-BLOS? </legend>'
    form.appendChild(newElement);

    for (let i = 0; i < numOfButtons; i++) {
        makeButton("question02", "radio", "question02", "a", "VLOS");
        addLineBreak("question02");
        makeButton("question02", "radio", "question02", "b", "ELOS");
        addLineBreak("question02");
        makeButton("question02", "radio", "question02", "c", "BLOS");
        addLineBreak("question02");

        //makeButton("q","button", undefined, undefined, "Submit", undefined);
    }
}

function makeButton(idElement, typeOfButton, name, value, textContent) {
    const element = document.querySelector(`#${idElement}`);

    button = document.createElement("input");
    button.type = typeOfButton;
    //button.id = id;
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

// Log user input
const question = document.querySelector("#GRC");
question.addEventListener('change', (event) => {

    if(event.target.name == "question01") {
        gcdInput.input01 = event.target.value;

        nextQuestion((function() {
            addFormElement(5);
        }));

    };

    if (event.target.name == "question02") {
        gcdInput.input02 = event.target.value;
    }
    
    // Working test
    console.log(gcdInput.input01 + "->" + gcdInput.input02);
});


let nextQuestion = function fireOnce(callback) {
    if (nextQuestion.fired) return;
    nextQuestion.fired = true;
    callback();
    console.log("q1 only onece");
};