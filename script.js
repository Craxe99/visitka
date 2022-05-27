let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let picture = document.querySelector('.about-image');
var i = false
themeButton.onclick = function () {
    page.classList.toggle('dark-theme')
    if (!i) {
        picture.src = "img/shrek.jpg";
    } else {
        picture.src = "img/unknown-raccoon.svg";
    }
    i = !i;
}
