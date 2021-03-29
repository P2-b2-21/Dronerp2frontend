let contentContainer = document.querySelector(".content");
function Create(element = "", text = "", id="") {
    let type = document.createElement(element);
    let text_in_box = document.createTextNode(text);
    type.id = id;
    type.appendChild(text_in_box);
    contentContainer.appendChild(type);
  }


//Dropdown menu
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

//Load elements in usercontainer
let godkendtBtn = document.querySelector(".godkendtBtn");
let afventBtn = document.querySelector(".afventBtn");
let afvistBtn = document.querySelector(".afvistBtn");
let inDevBtn = document.querySelector(".inDevBtn");
let msgBtn = document.querySelector(".msgBtn");
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
msgBtn.addEventListener('click', () => {
    let contentDiv = document.querySelector("#contentDiv");
    if (contentContainer.contains(contentDiv)){
        contentDiv.remove();
        Create("div", "Her skal beskeder og opdateringer angående ansøgninger være", "contentDiv");
    }
    else Create("div", "Her skal beskeder og opdateringer angående ansøgninger være", "contentDiv");
});

//Edit user information
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

//Application properties function
function CreateForm(){
    let formDiv = document.createElement("div");
    let form = document.createElement("form");
    form.setAttribute("id", "newAppForm");
    formDiv.setAttribute("id", "newApp");
    form.setAttribute("method", "post");
    form.setAttribute("action", "sendStuff")
    
    //Create elements for form
    let appName = document.createElement("input");
    appName.setAttribute("placeholder", "Ansøgningens navn");
    form.appendChild(appName);

    let appComment = document.createElement("textarea");
    appComment.setAttribute("form", "newAppForm");
    appComment.setAttribute("placeholder", "Eventuelle kommentarer til ansøgningen");
    appComment.setAttribute("id", "appComment");
    form.appendChild(appComment);
    
    formDiv.appendChild(form);
    document.querySelector(".userContainer").appendChild(formDiv);
};