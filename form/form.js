let choices = {
    gcd01: "",
    gcd02: "",
    gcd03: "",
    gcd04: "",
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
        choices.gcd01 = event.target.value;
    }

    if (event.target.name == "question02") {
        choices.gcd02 = event.target.value;
    }
    
    // Working test
    console.log(choices.gcd01 + "->" + choices.gcd02);
});