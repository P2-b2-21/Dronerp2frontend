var button1 = document.querySelector("#myBtn");

button1.addEventListener("click", function() {
    var mainPage = document.querySelector("#main-page");
    var loginPage = document.querySelector("#login-page");

    if (mainPage.style.display !== "none")
    {
        mainPage.style.display = "none";
        loginPage.style.display = "block";
    }
    else {
        mainPage.style.display = "block";
        loginPage.style.display = "none";
    }
})

var button2 = document.querySelector("#myBtn2");

button2.addEventListener("click", function() {
    var mainPage = document.querySelector("#main-page");
    var loginPage = document.querySelector("#login-page");

    if (mainPage.style.display !== "none")
    {
        mainPage.style.display = "none";
        loginPage.style.display = "block";
    }
    else {
        mainPage.style.display = "block";
        loginPage.style.display = "none";
    }
})

var headerTitle = document.querySelector("#headerTitle");
headerTitle.addEventListener("click", function() {
    location.href = "./index.html";
    console.log(res);
})

var loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", function(){
    location.href = "./login.html";
})

var backgroundVideo = document.querySelector("#myVideo");
backgroundVideo.autoplay = true;
backgroundVideo.load();