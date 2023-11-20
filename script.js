window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
var pageUp = document.querySelector(".pageUp");
var scrollPosition = window.scrollY || document.documentElement.scrollTop;

if (scrollPosition > 0.8 * window.innerHeight) {
    pageUp.style.display = "flex";
} else {
    pageUp.style.display = "none";
}
}

function whatsApp(){
    window.open('https://api.whatsapp.com/send?phone=5524999519904&text=Gostaria%20de%20fazer%20um%20or%C3%A7amento')
}
function faceBook(){
    window.open('https://www.facebook.com/BTattoo/?locale=pt_BR')
}
function instagram(){
    window.open('https://www.instagram.com/boreltattoo/?hl=pt')
}
function tikTok(){
    window.open('https://www.tiktok.com/@borel.tattoo')
}

let shadow = document.querySelector(".shadow")
function addComentario(){
    shadow.style.display = "flex"
}
function cancelarComentario(){
    shadow.style.display = "none"

}


let btnAbrirMenu = document.querySelector(".btnAbrirMenu")
let btnFecharMenu = document.querySelector(".btnFecharMenu")
let logoHeader = document.querySelector(".logoHeader")
let itemsMenu = document.querySelector(".itemsMenu")

btnFecharMenu.style.display = "none"

function abrirMenu(){
    btnAbrirMenu.style.display = "none"
    btnFecharMenu.style.display = "flex"
    logoHeader.style.display = "none"
    itemsMenu.style.display = "flex"
}
function fecharMenu(){
    btnFecharMenu.style.display = "none"
    btnAbrirMenu.style.display = "flex"
    logoHeader.style.display = "flex"
    itemsMenu.style.display = "none"

}