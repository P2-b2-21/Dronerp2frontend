var ansBtn = document.querySelector("#ansBtn");
var dd = document.querySelector(".ddContent");
ansBtn.addEventListener('mouseover', () => {
    dd.style.display = "block";
});
ansBtn.addEventListener('mouseleave', () => {
    dd.style.display = "none";
});
dd.addEventListener('mouseover', () => {
    dd.style.display = "block";
});
dd.addEventListener('mouseleave', () => {
    dd.style.display = "none";
});