let choices = {
    gcd01: "",
    gcd02: "",
    gcd03: "",
    gcd04: "",
};

function calculateGCD(obj) {
    //console.log(`${event.target.type}`);
    console.log("GCD status:");
    for (let property in obj) {
        console.log(obj[property]);
    }
    console.log("Final GCD: calculating..");
}

function addFormElement() {
    const mainForm = document.querySelector('#GRC');
    const newForm = document.createElement('form');
    newForm.id = "question01";
    
    mainForm.appendChild(newForm);

    const form = document.querySelector('#question01');
    let newElement = document.createElement("p");
    newElement.id="q";
    newElement.textContent = "VLOS-ELOS-BLOS?";

    form.appendChild(newElement);
    addLineBreak("q");

    makeButton("q", "radio", "vlos", "VLOS-ELOS-BLOS", "a", "VLOS", undefined);
    addLineBreak("label-vlos");
    makeButton("q", "radio", "elos", "VLOS-ELOS-BLOS", "b", "ELOS", undefined);
    addLineBreak("label-elos");
    makeButton("q", "radio", "blos", "VLOS-ELOS-BLOS", "c", "BLOS", undefined);
    addLineBreak("label-blos");
    makeButton("q","button", undefined, undefined, "Submit", undefined, "test()"); // func not working
}

function makeButton(idElement, buttonType, id, name, value, textContent, func) {
    const element = document.querySelector(`#${idElement}`);
    button = document.createElement("input");
    button.type = buttonType;
    button.id = id;
    button.name = name;
    button.value = value;
    button.onclick = function(){`${func}`}; // func not working

    element.appendChild(button);

    label = document.createElement("label");
    label.id = "label-" + id;
    label.textContent = textContent;

    element.appendChild(label);
}

function addLineBreak(id) {
    const element = document.querySelector(`#${id}`);
    const lineBreak = document.createElement('br');
    return element.appendChild(lineBreak);
}

function test() {
    console.log("Test");
}