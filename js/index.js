//href to login page when login button is pressed
let loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", function(){
    location.href = "./login.html";
})
//href to register page when register button is pressed
let registerBtn = document.querySelector("#registerBtn");
registerBtn.addEventListener("click", function() {
    location.href = "./registrering.html"
})
//autoplay for video
let backgroundVideo = document.querySelector("#myVideo");
backgroundVideo.autoplay = true;
backgroundVideo.load();