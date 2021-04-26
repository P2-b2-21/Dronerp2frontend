/* On page load
   initialising and making page
   with JSON data from server   */
let questionContent = {};
fetch(`questions_${MAINFORM}.json`)
.then((response) => {return response.json()})
.then((data) => {
    questionContent = data;
    initPage(0, 1);
    //makeSubQuestionsOf("question4");     // change question
    makePage("form1", 1, 2);
    makeSubmitButton();
});

// Log user input
let userInput = "";
const question = document.querySelector(`#${MAINFORM}`);
question.addEventListener('change', (event) => {
    console.log(event.target.value);
    userInput += "," + event.target.value;
    
    // Output test displaying user input
    let output = "";
    for (let i = 1; i <= Object.keys(questionContent).length; i++) {
        output += questionContent[`question${i}`].userInput + "-> ";
    }
    console.log(output += "end");
});




if (MAINFORM === "GRC") {
    console.log(`questions_${MAINFORM}.json.. loaded`)
    
};

if (MAINFORM === "ARC") {
    console.log(`questions_${MAINFORM}.json.. loaded`)
    
    // Når form && subquestiong: lav ny subquesting path
    // Når subform: style.display = "none" for alle subquestion siblings -> findAllNextElementSiblings.forEach((element)), element.style.display = "none"
    question.addEventListener('change', (event) => {    
        let currNode = event.target.parentNode.parentNode;
        
        // Executes when ARC value has been selected
        if (event.target.value !== 'subquestion' && event.target.value !== 'next-question') {
            
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
        
        if (event.target.value === 'next-question') {
            let nextID = currNode.nextSibling.childNodes[0].id
            document.querySelector(`#${nextID}`).style.display = "";
        }
        
        if (currNode.id.replace(/[0-9]/, '') === 'form' && doesSubQuestionPathExist() === 1) {
            removeSubQuestionPath(currNode);
        }
        
        // Makes next sub questiong path
        if (event.target.value === 'subquestion' && doesSubQuestionPathExist() === 0) {
            let questionOBJ = questionContent[`${event.target.parentNode.id}`];
            questionOBJ = ((((questionOBJ || {}).choices || {}).choice0 || {}).subquestion0 || {});
            initSubQuestionPath(questionOBJ, 0);
            initSubQuestionButtons();
            
            let nextID = currNode.nextSibling.childNodes[0].id
            document.querySelector(`#${nextID}`).style.display = "";
        }
        
        /* TO DO: use id: form4 */
        if (event.target.value === 'next-question' && doesSubQuestionPathExist() === 0) {
            document.querySelector('#form4').style.display = "";
        }
        
        if (event.target.value === 'subquestion' && doesSubQuestionPathExist() === 1) {
            let nextID = currNode.nextSibling.childNodes[0].id
            document.querySelector(`#${nextID}`).style.display = "";
        }
    });
};
    
    /* ----------------------------------------------------------------------------------------------------------------------------------- */
    
    
    function addSubFormElement(formID, questionID, questionName, typeOfButton, numOfButtons) {
        const mainForm = document.querySelector(`#${MAINFORM}`);
        const newForm = document.createElement('form');
        newForm.id = formID;
        mainForm.appendChild(newForm);
        
        const form = document.querySelector(`#${formID}`);
        const newElement = document.createElement("fieldset");
        newElement.id = questionID;
        newElement.innerHTML = `<legend> ${questionName} </legend>`;
        
        newElement.style.display = "none";
        
        form.appendChild(newElement);
    };
    
    /* Create questions from JSON Object */
    function makePage(form, quesNum, formNum) {
    if (Object.keys(questionContent).length == quesNum) return;
    
    /* do name change */
    let currentQuestion = Object.keys(questionContent)[quesNum];
    console.log("currentQuestion: " + currentQuestion);
    
    let numOfButtons = Object.keys(questionContent[`${currentQuestion}`].choices).length;
    
    document.querySelector(`#${form}`).addEventListener('change', (event) => {
        addFormElement(`form${formNum}`, `${currentQuestion}`, questionContent[`${currentQuestion}`].ask, "radio", numOfButtons);
        quesNum++;
        formNum++;
        makePage(`form${quesNum}`, quesNum, formNum);
    }, {once: true});
};

function initSubQuestionPath(obj, i) {
    Object.keys(obj).forEach(key => {
        if (key == 'ask') {
            addSubFormElement(`subform${i}`, `subquestion${i}`, `${obj[key]}`, "radio", 2);
            i++;
        };
        if (typeof obj[key] == 'object') {
            initSubQuestionPath(obj[key], i);
        };
    });
};

function findAllNextElementSiblings(node) {
    let siblings = [];
    while (node = node.nextSibling) {
        siblings.push(node);
    }
    return siblings;
};

function initSubQuestionButtons() {
    switch(event.target.parentNode.id) {
        case "question3": {
            event.target.parentNode.parentNode.nextSibling.style.display = "none";
            document.querySelector('#subquestion0').style.display = "";
            
            makeButton(`subquestion${0}`, 'radio', `subquestion${0}`, "ARC-d", "Ja");
            addLineBreak(`subquestion${0}`);
            makeButton(`subquestion${0}`, 'radio', `subquestion${0}`, "ARC-c", "Nej");
        }
        break;
        case "question4": {
            if (event.target.nextSibling.innerText === "Ja") {
                makeButton(`subquestion${0}`, 'radio', `subquestion${0}`, "ARC-d", "Ja");
                addLineBreak(`subquestion${0}`);
                makeButton(`subquestion${0}`, 'radio', `subquestion${0}`, "subquestion", "Nej");
                
                makeButton(`subquestion${1}`, 'radio', `subquestion${1}`, "ARC-d", "Ja");
                addLineBreak(`subquestion${1}`);
                makeButton(`subquestion${1}`, 'radio', `subquestion${1}`, "subquestion", "Nej");
                
                makeButton(`subquestion${2}`, 'radio', `subquestion${2}`, "ARC-c", "Ja");
                addLineBreak(`subquestion${2}`);
                makeButton(`subquestion${2}`, 'radio', `subquestion${2}`, "subquestion", "Nej");
                
                makeButton(`subquestion${3}`, 'radio', `subquestion${3}`, "ARC-c", "Ja");
                addLineBreak(`subquestion${3}`);
                
            } else {
                makeButton(`subquestion${0}`, 'radio', `subquestion${0}`, "ARC-c", "Ja");
                addLineBreak(`subquestion${0}`);
                makeButton(`subquestion${0}`, 'radio', `subquestion${0}`, "subquestion", "Nej");
                
                makeButton(`subquestion${1}`, 'radio', `subquestion${1}`, "ARC-c", "Ja");
                addLineBreak(`subquestion${1}`);
                makeButton(`subquestion${1}`, 'radio', `subquestion${1}`, "subquestion", "Nej");
                
                makeButton(`subquestion${2}`, 'radio', `subquestion${2}`, "ARC-c", "Ja");
                addLineBreak(`subquestion${2}`);
                makeButton(`subquestion${2}`, 'radio', `subquestion${2}`, "subquestion", "Nej");
                
                makeButton(`subquestion${3}`, 'radio', `subquestion${3}`, "ARC-b", "Ja");
                addLineBreak(`subquestion${3}`);
            }
        }
        break;
    }
}

function removeSubQuestionPath(node) {
    findAllNextElementSiblings(node).forEach((element) => {
        
        if (element.id.replace(/[0-9]/, '') === "subform") {
            console.log("removeSubQuestionPath");
            console.log(element.id);
            element.remove();
        }
    });
};

function doesSubQuestionPathExist() {
    let formStart = document.querySelector("#form1");
    let result = 0;
    findAllNextElementSiblings(formStart).forEach((element) => {
        if (element.id.replace(/[0-9]/, '') === "subform") {
            result = 1;
        }
    });
    return result;
};

/* Add quistion with choices to DOM tree */
function addFormElement(formID, questionID, questionName, typeOfButton, numOfButtons) {
    const mainForm = document.querySelector(`#${MAINFORM}`);
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
function initPage(quesNum, formNum) {
    let currentQuestion = Object.keys(questionContent)[quesNum];
    let numOfButtons = Object.keys(questionContent[`${currentQuestion}`].choices).length;
    
    addFormElement(`form${formNum}`, `${currentQuestion}`, questionContent[`${currentQuestion}`].ask, "radio", numOfButtons);
};

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
    const lineBreak = document.createElement('br');
    return element.appendChild(lineBreak);
}

/* Add submit button to the end of page */
function makeSubmitButton() {

    const element = document.querySelector(`#${MAINFORM}`);
    
    button = document.createElement("input");
    button.type = "submit";
    button.name = "submitBtn";
    button.value = "Send JSON obj til server og gå til ARC";
    button.disabled = true;
    button.setAttribute("onclick", "location.href='index.html'")

    /* TODO: FETCH post to server */ 
    //button.setAttribute("onclick", "console.log(userInput)");

    element.insertAdjacentElement("afterend", button);
    label = document.createElement("label");
    element.insertAdjacentElement("afterend", label);

    //document.querySelector('[name="submitBtn"]').setAttribute("onclick", "location.href='index.html'");

    /*
    const numOfLastQuestion = Object.keys(questionContent).length;
    $(`#${MAINFORM}`).one("change", `#form${numOfLastQuestion}`, () => {
        makeButton(`${MAINFORM}`, "submit", "submitBtn", "Send JSON obj til server og gå til ARC");
        document.querySelector('[name="submitBtn"]').setAttribute("onclick", "location.href='index.html'");
    }); 
    */
};