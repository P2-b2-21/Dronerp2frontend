const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
// Definitions for HTMLElements at the start of the document. Note 'const' is not a constant value, but a constant reference to a certain variable/value  

// EventListener necessary for the function 'login'   
loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    login().then((s) => {
        console.log("Callback1");
        console.log(s);
        console.log("Callback2");
        
    })

})

// Login function for login-page, an async function fetching with 'POST' method. if 'userData' is correct = login succesful, otherwise failed. 
async function login() {
    console.log("Call")
    let userData = {
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
        location.replace("/common/brugerprofil.html?user=" + userData.username);
    }
    else {
        alert("Login failed");
    }
}

// Function for redirecting user to /faktaomansoegning.html. EventListener on #faktaBtn 
let faktaBtn = document.querySelector("#faktaBtn");
faktaBtn.addEventListener("click", function(){
    location.href = "/common/faktaomansoegning.html";
}) 

// Function for redirecting user to /registrering.html. EventListener on #registerBtn
let registerBtn = document.querySelector("#registerBtn");
registerBtn.addEventListener("click", function() {
    location.href = "/common/registrering.html"
})

// Function for redirecting user back to front-page "/index.html". EventListener on #headerTitle button 
let headerTitle = document.querySelector("#headerTitle");
headerTitle.addEventListener("click", function() {
    location.href = "/index.html";
    console.log(res);
})
