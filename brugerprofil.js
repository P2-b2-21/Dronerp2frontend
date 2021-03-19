let contentContainer = document.querySelector(".content");
function Create(element = "", text = "", id="") {
    let type = document.createElement(element);
    let text_in_box = document.createTextNode(text);
    type.id = id;
    type.appendChild(text_in_box);
    contentContainer.appendChild(type);
  }


//dropdown menu
let ansBtn = document.querySelector("#ansBtn");
let dd = document.querySelector(".ddContent");
let btn = document.querySelectorAll("#btn");
ansBtn.addEventListener('mouseover', () => dd.style.display = "block");
ansBtn.addEventListener('mouseleave', () => dd.style.display = "none");
dd.addEventListener('mouseover', () => dd.style.display = "block");
dd.addEventListener('mouseleave', () => dd.style.display = "none");

btn.forEach(btn => {
    btn.addEventListener('mouseover', () => btn.style.backgroundColor = "#3399ff");
});
btn.forEach(btn => {
    btn.addEventListener('mouseleave', () => btn.style.backgroundColor = "steelBlue");
});

//Indlæs de forskellige elementer i usercontainer
let godkendtBtn = document.querySelector(".godkendtBtn");
let afventBtn = document.querySelector(".afventBtn");
let afvistBtn = document.querySelector(".afvistBtn");
let inDevBtn = document.querySelector(".inDevBtn");
godkendtBtn.addEventListener('click', ()=> {
    let contentDiv = document.querySelector("#contentDiv");
    if (contentContainer.contains(contentDiv)){
        contentDiv.remove();
        Create("div", "Godkendte ansøgninger skal være her", "contentDiv")
    }
    else Create("div", "Godkendte ansøgninger skal være her", "contentDiv")
});
afventBtn.addEventListener('click', ()=> {
    let contentDiv = document.querySelector("#contentDiv");
    if (contentContainer.contains(contentDiv)){
        contentDiv.remove();
        Create("div", "Afventende ansøgninger skal være her", "contentDiv")
    }
    else Create("div", "Afventende ansøgninger skal være her", "contentDiv")
});
afvistBtn.addEventListener('click', ()=> {
    let contentDiv = document.querySelector("#contentDiv");
    if (contentContainer.contains(contentDiv)){
        contentDiv.remove();
        Create("div", "Afviste ansøgninger skal være her", "contentDiv")
    }
    else Create("div", "Afviste ansøgninger skal være her", "contentDiv")
});
inDevBtn.addEventListener('click', ()=> {
    let contentDiv = document.querySelector("#contentDiv");
    if (contentContainer.contains(contentDiv)){
        contentDiv.remove();
        Create("div", "Igangværende ansøgninger skal være her", "contentDiv")
    }
    else Create("div", "Igangværende ansøgninger skal være her", "contentDiv")
});

//Rediger brugerens informationer
let editBtn = document.querySelector("#editBtn");
let applyBtn = document.querySelector("#applyBtn");
let infoInput = document.querySelectorAll(".infoInput");
editBtn.addEventListener('click', () => {
    if (infoInput.disabled = true){
        infoInput.forEach(input => {
            input.disabled = false;
            input.style.backgroundColor = "white";
            input.style.color = "black";
        });
    }
    editBtn.hidden = true;
    applyBtn.hidden = false;
});
applyBtn.addEventListener('click', () => {
    editBtn.hidden = false;
    applyBtn.hidden = true;
    if (infoInput.disabled = true){
        infoInput.forEach(input => {
            input.style.backgroundColor = "lightgrey";
            input.disabled = true;
        });
    }
});