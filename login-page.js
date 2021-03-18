const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const xhttp = new XMLHttpRequest();

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    login().then((s) => {
        console.log("Callback1");
        console.log(s);
        console.log("Callback2");
        
    })

})

async function login() {
    console.log("Call")
    var userData = {
        username: loginForm.username.value,
        password: loginForm.password.value
    };
    
    const response = await fetch('http://server.malthelarsen.dk:3000/login', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response.status);

    if (response.status === 201){
        //alert("Login OK");
        location.replace("/index.html");
    }
    else {
        alert("Login failed");
    }
}

var faktaBtn = document.querySelector("#faktaBtn");
faktaBtn.addEventListener("click", function(){
    location.href = "./faktaomansoegning.html";
}) 

var headerTitle = document.querySelector("#headerTitle");
headerTitle.addEventListener("click", function() {
    location.href = "./index.html";
    console.log(res);
})