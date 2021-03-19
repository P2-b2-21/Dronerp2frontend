
var loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", function(){
    location.href = "./login.html";
})
    
var faktaBtn = document.querySelector("#faktaBtn");
faktaBtn.addEventListener("click", function(){
    location.href = "./faktaomansoegning.html";
})

const registerForm = document.getElementById("register-form");


const registerBtn = document.getElementById("register-form-submit");
registerBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    if (registerForm.password.value === registerForm.confirmPassword.value)
    {
        var userData = {
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
            location.replace("./login.html");
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