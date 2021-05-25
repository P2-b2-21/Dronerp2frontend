// Function for redirecting user to /login.html. 
let loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", function(){
    location.href = "/common/login.html";
})
// Function for redirecting user to /faktaomansoegning.html     
let faktaBtn = document.querySelector("#faktaBtn");
faktaBtn.addEventListener("click", function(){
    location.href = "/common/faktaomansoegning.html";
})
// const declaration for HTMLElement registerForm. 
const registerForm = document.getElementById("register-form");

// const declaration for registerBtn (submit button on register page). EventListener on registerBtn, with await 'POST' method for posting user information to backend. 
// if userData input is correct (response 201), create user and redirect to /login.html. If userData input is incorrect, ask user to re-type. 
const registerBtn = document.getElementById("register-form-submit");
registerBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    if (registerForm.password.value === registerForm.confirmPassword.value)
    {
        let userData = {
            username: registerForm.username.value,
            password: registerForm.password.value
        }
        
        const response = await fetch('http://server.malthelarsen.dk:3000/register', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 201){
            location.replace("/common/login.html");
        }
        else {
            alert("Couldn't register");
        }

        console.log("register");
    }
    else {
        console.log("Please re-enter password");
    }

    
});