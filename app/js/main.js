"use strict";
//find the item
const buttonBiography = document.querySelector("#button-biography");
const buttonProject = document.querySelector("#button-projects");
const blockProject = document.querySelector(".projects");
const blockHeader = document.querySelector(".header");
const blockBio = document.querySelector(".bio");
const btnMyWork = document.querySelector(".btn__my-work button");
const btnMyContact = document.querySelector(".btn__my-contact button");
const blockContact = document.querySelector(".contact");
const preloaderBlock = document.querySelector(".preloader");
const headerLogo = document.querySelector(".header__logo");
const headerTitle = document.querySelector(".header__title");
const headerText = document.querySelector(".header__text");
const headerBtn = document.querySelector(".header__button-inner");
const headerParallax = document.querySelector(".header__parallax-background");

// window.onload = function () {
//   alert('Страница загружена');

//   // к этому моменту страница загружена
//   alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
// };
window.addEventListener("load", () => {
    window.setTimeout(() => {
        preloaderBlock.classList.add("preloader__hide");
        headerParallax.classList.add("lup-parallax");
    }, 4000);
    window.setTimeout(() => {
        headerLogo.style.display = "flex";
        headerTitle.style.display = "block";
        headerText.style.display = "block";
        headerBtn.style.display = "flex";
    }, 3000);
});

// Hang the event on the buttons
buttonBiography.addEventListener("click", onButtonBiographyClick);
buttonProject.addEventListener("click", onButtonProjectClick);
btnMyWork.addEventListener("click", onButtonMyWorkClick);
btnMyContact.addEventListener("click", onButtonMyContactClick);

function onButtonBiographyClick() {
    blockHeader.classList.add("rotateSliderOutToRight");
    blockBio.classList.add("rotateSliderInFromLeft");

    // let wrapper = document.querySelector(".about__info-inner");
    // let text = document.querySelector(".about__info-inner p");

    // let textCont = text.textContent;
    // text.style.display = "none";

    // for (let i = 0; i < textCont.length; i++) {
    //     (function (i) {
    //         setTimeout(function () {
    //             // Created textNode to append
    //             let texts = document.createTextNode(textCont[i]);
    //             let span = document.createElement("span");
    //             span.appendChild(texts);

    //             // span.classList.add("wave");
    //             wrapper.appendChild(span);
    //         }, 75 * i);
    //     })(i);
    // }

    // let textBio = document.querySelectorAll(".textAppeared");

    // // textBio[0].innerText;
    // debugger;
    // for (let i = 0; i < textBio[0].innerText.length; i++) {
    //     // textBio[0].innerText[i][i].style.display = "none";
    //     console.log(textBio[0].innerText[i]);
    // }

    // let dima = textBio[0].innerText;
    // console.log(dima);

    // console.log(textBio);
    // console.log(textBio[0].innerText[0]);
}

function onButtonProjectClick() {
    blockHeader.classList.add("rotateSliderOutToLeft");
    blockProject.classList.add("rotateSliderInFromRight");
}

function onButtonMyWorkClick() {
    blockBio.classList.remove("rotateSliderInFromLeft");
    blockBio.classList.add("rotateFall");
    blockProject.classList.remove("rotateSliderInFromRight");
    blockProject.classList.add("scaleUp");
}

function onButtonMyContactClick() {
    blockProject.classList.remove("rotateSliderInFromRight");
    blockProject.classList.remove("scaleUp");
    blockProject.classList.add("rotateFall");
    blockContact.classList.add("scaleUp");
}

function parallax(event) {
    const parallaxSelector = document.querySelector(
        ".header__parallax-background"
    );
    parallaxSelector.style.transform =
        "translate(" +
        event.clientX / 20 +
        "px" +
        "," +
        event.clientY / 20 +
        "px" +
        ")";
}
// translate(x,y)

document.addEventListener("mousemove", parallax);
// clientX: 872, clientY: 82,
