
document.addEventListener('DOMContentLoaded', async function(event) {

    const querySTring = window.location.search;

    await fetch('http://server.malthelarsen.dk:3000/getuserprofile' + querySTring, {
        method: 'GET',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        //Smid userdata ind i html form
        let userform = document.querySelector('.infoInput');
        userform.form.name.value = data.firstname;
        userform.form.lastname.value = data.lastname;
        userform.form.company.value = data.company;
        userform.form.mail.value = data.email;
        userform.form.tel.value = data.phone;

    })
    .catch((error) => {console.log(error);})

})


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
        /* Her skal ansøgninger loades ind tror jeg. Kan ikke gennemskue. Gemmes i SQL eller? /D */ 
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

/* Ved ikke om det virker så "nemt" eller om det skal kobles på med user */ 
function beginForm() {
    location.href = "form/grc.html" + window.location.search;
}