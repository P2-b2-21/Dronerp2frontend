const questionContent = {
    question01: {
        userInput: "",
        ask: "Drones maksimale karakteristika?",
        choices: {
            choice0: {
                text: "1 meter / 3 feet",
                value: "A",
            },
            choice1: {
                text: "3 meter / 10 feet",
                value: "B",
            },
            choice2: {
                text: "8 meter / 25 feet",
                value: "C",
            },
            choice3: {
                text: ">8 meter / 25 feet",
                value: "D",
            },
        },
    },
    question02: {
        userInput: "",
        ask: "Er jeg spørgsmål 2?",
        choices: {
            choice0: {
                text: "VLOS",
                value: "AA",
            },
            choice1: {
                text: "ELOS",
                value: "BB",
            },
            choice2: {
                text: "BLOS",
                value: "CC",
            },
        },
    },
    question03: {
        userInput: "",
        ask: "Er jeg spørgsmål 3?",
        choices: {
            choice0: {
                text: ":)",
                value: "AAA",
            },
            choice1: {
                text: ";)",
                value: "BBB",
            },
            choice2: {
                text: "XD",
                value: "CCC",
            },
            choice3: {
                text: "8D",
                value: "DDD",
            },
        },
    },
    question04: {
        userInput: "",
        ask: "Er jeg spørgsmål 4?",
        choices: {
            choice0: {
                text: "A",
                value: "AAAA",
            },
            choice1: {
                text: "B",
                value: "BBBB",
            },
            choice2: {
                text: "C",
                value: "CCCC",
            },
        },
    },
};

window.addEventListener('load', () => {
    console.log("Page is loaded");
    initPage();
    makePage("form01", 1, 2);
});


function initPage() {
    let ques = Object.keys(questionContent)[0];
    let numOfButtons = Object.keys(questionContent[`${ques}`].choices).length;

    addFormElement(`form0${1}`, `${ques}`, questionContent[`${ques}`].ask, "radio", numOfButtons);

};



/* Create questions and log user input */
//makePage("form01", 0, 1);

const question = document.querySelector("#GRC");
question.addEventListener('change', (event) => {

    questionContent[`${event.target.name}`].userInput = event.target.value;
    
    // Working test
    console.log(questionContent["question01"].userInput + "->" + 
                questionContent["question02"].userInput + "->" + 
                questionContent["question03"].userInput + "->" + 
                questionContent["question04"].userInput + "->");
});

/* -----page-functions-------------------------------------------------------------------------------------- */
function makePage(form, i, k) {
    console.log("input " + `gcdInput0${i+1}`);
    if (Object.keys(questionContent).length == i) return;
    let ques = Object.keys(questionContent)[i];
    let numOfButtons = Object.keys(questionContent[`${ques}`].choices).length;

    console.log(i + ":" + Object.keys(questionContent)[i]);
    console.log(`form0${k}`, `${ques}`, questionContent[`${ques}`].ask, "radio", numOfButtons);

    new Promise(function(resolve, reject) {
        document.querySelector(`#${form}`).addEventListener('change', () => {
            addFormElement(`form0${k}`, `${ques}`, questionContent[`${ques}`].ask, "radio", numOfButtons);
            console.log("Before resolve()");
            resolve();
            console.log("After resolve()");
        }, {once: true});
    })

    .then(function() {
        console.log("then:");
        i++;
        k++;
        console.log(`makePage - i:${i} k:${k}`);
        makePage(`form0${i}`, i, k);
    }, function(err) {
        console.log(err);
    });
};

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