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

/*
document.querySelector('#form01').addEventListener('change', addFormOnce('form01'))
    .then( () => {
        console.log("Need to wait");
        document.querySelector('#form02').addEventListener('change', addFormOnce('form02'))
    });
*/

//document.querySelector('#form01').addEventListener('change', formCaller());
//formCaller();

//let question02 = document.querySelector("#GRC").childNodes;

//console.log(question02.childNodes);
//console.log(question02.childNodes.nextElementSibling);

/*
let ques = Object.keys(questionContent)[0];

console.log(`${Object.keys(questionContent)[0]}`);
console.log(questionContent[`${ques}`].ask);
console.log(`${ques}`);
console.log(Object.keys(questionContent).length);
*/

//let i = 0;
//let k = 2;
//let flag = false;
function makePage(form, i, k) {
    let ques = Object.keys(questionContent)[i];

    console.log(i + ":" + Object.keys(questionContent)[i]);
    console.log(`form0${k}`, `${ques}`, questionContent[`${ques}`].ask, "radio", 3);

    document.querySelector(`#${form}`).addEventListener('change', () => {
        addFormElement(`form0${k}`, `${ques}`, questionContent[`${ques}`].ask, "radio", 3);
    }, {once: true});

    i++;
    k++;

    console.log(Object.keys(questionContent).length + ":" + i);

    
    if (Object.keys(questionContent).length == i) return;

    makePage(`form0${i}`, i, k);
}

makePage("form01", 0, 2, true);

/* WOKING
document.querySelector(`#form01`).addEventListener('change', () => {
    addFormElement("form02", "question02", "Er jeg spørgsmål 2?", "radio", 3);

    document.querySelector(`#form02`).addEventListener('change', () => {
        addFormElement("form03", "question03", "Er jeg spørgsmål 3?", "radio", 3);
    }, {once: true});

}, {once: true});
*/

/*
document.querySelector(`#form02`).addEventListener('change', () => {
    addFormElement("form03", "question03", "Er jeg spørgsmål 3?", "radio", 3);
}, {once: true});
*/

//document.querySelector(`#form01`).removeEventListener('change', handler);

/*
document.querySelector(`#form01`).removeEventListener('change', function(e) {
    addFormElement("form02", "question02", "Er jeg spørgsmål 2?", "radio", 3);
    document.querySelector(`#form03`).addEventListener('change', console.log("add 03"));
    //form = "asd";
});
*/

//document.querySelector('#form02').addEventListener('change', changeOnce02);

//asyncFN();

const question = document.querySelector("#GRC");
question.addEventListener('change', (event) => {
    
    if(event.target.name == "question01") {
        gcdInput.input01 = event.target.value;

        /*
        nextQuestion((function() {
            addFormElement("form02", "question02", "Er jeg spørgsmål 2?", "radio", 3);
        }));
        */
    };
    
    if (event.target.name == "question02") {
        gcdInput.input02 = event.target.value;
        //document.querySelector('#question02').addEventListener('change', addFormOnce);

        //addFormElement("form03", "question03", "Er jeg spørgsmål 3?", "radio", 3);

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

/*
function addFormOnce(form) {
    return new Promise((resolve) => {
        console.log("Do stuff once");
        document.querySelector(`#${form}`).addEventListener('change', (event) => {
            addFormElement(`${form}`, "question02", "Er jeg spørgsmål 2?", "radio", 3);
            document.querySelector(`#${form}`).removeEventListener('change', addFormOnce("form03"));
            resolve();
        });
    });
};

async function formCaller() {
    console.log("Caller");
    await addFormOnce("form01");
    console.log("After waiting");
    //await addFormOnce("form03");
}
*/
//document.querySelector('#question02').addEventListener('change', addFormOnce);

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