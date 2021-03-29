
/* On page load
   initialising and making page
   with JSON data from server   */
let questionContent = {};
fetch('questions.json')
.then((response) => {return response.json()})
.then((data) => {
    
    questionContent = data;
    
    window.addEventListener('load', () => {
        console.log("Page is loaded");
        initPage();
        makePage("form01", 1, 2);
    });
})

/* Log user input */
const question = document.querySelector("#GRC");
question.addEventListener('change', (event) => {
    
    questionContent[`${event.target.name}`].userInput = event.target.value;
    
    /* Display user input 
        only for testing */
    console.log(questionContent["question01"].userInput + "->" + 
    questionContent["question02"].userInput + "->" + 
    questionContent["question03"].userInput + "->" + 
    questionContent["question04"].userInput + "->" +
    questionContent["question05"].userInput + "|");
});


 /* -----page-functions-------------------------------------------------------------------------------------- */

/* Create questions from JSON Object */
function makePage(form, i, k) {
    if (Object.keys(questionContent).length == i) return;

    let ques = Object.keys(questionContent)[i];
    let numOfButtons = Object.keys(questionContent[`${ques}`].choices).length;
    
    new Promise(function(resolve, reject) {
        document.querySelector(`#${form}`).addEventListener('change', () => {
            addFormElement(`form0${k}`, `${ques}`, questionContent[`${ques}`].ask, "radio", numOfButtons);
            resolve();
        }, {once: true});
    })

    .then(function() {
        i++;
        k++;
        makePage(`form0${i}`, i, k);
    }, function(err) {
        console.log(err);
    });
};

/* Add quistion with choices to DOM tree */
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

/* Add first question to DOM tree */
function initPage() {
    let ques = Object.keys(questionContent)[0];
    let numOfButtons = Object.keys(questionContent[`${ques}`].choices).length;

    addFormElement(`form0${1}`, `${ques}`, questionContent[`${ques}`].ask, "radio", numOfButtons);

};

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
    const lineBreak = document.createElement('br');
    return element.appendChild(lineBreak);
}