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

function addFormElement() {
    const mainForm = document.querySelector('#GRC');
    const newForm = document.createElement('form');
    newForm.id = "q2";
    mainForm.appendChild(newForm);

    const form = document.querySelector('#q2');
    const newElement = document.createElement("fieldset");
    newElement.id = "q";
    newElement.innerHTML = '<legend> VLOS-ELOS-BLOS? </legend>'
    form.appendChild(newElement);

    makeButton("q", "radio", "vlos", "question02", "a", "VLOS");
    addLineBreak("q");
    makeButton("q", "radio", "elos", "question02", "b", "ELOS");
    addLineBreak("q");
    makeButton("q", "radio", "blos", "question02", "c", "BLOS");
    addLineBreak("q");
    //makeButton("q","button", undefined, undefined, "Submit", undefined);
}

function makeButton(idElement, buttonType, id, name, value, textContent) {
    const element = document.querySelector(`#${idElement}`);

    button = document.createElement("input");
    button.type = buttonType;
    button.id = id;
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

        nextQuestion(addFormElement);

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