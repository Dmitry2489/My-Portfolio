//find the item
const buttonBiography = document.querySelector("#button-biography");
const buttonProject = document.querySelector("#button-projects");
const blockProject = document.querySelector(".projects");
const blockHeader = document.querySelector(".header");
const blockBio = document.querySelector(".bio");
const btnMyWork = document.querySelector(".btn__my-work button");
const btnMyContact = document.querySelector(".btn__my-contact button");
const blockContact = document.querySelector(".contact");

// Hang the event on the buttons
buttonBiography.addEventListener("click", onButtonBiographyClick);
buttonProject.addEventListener("click", onButtonProjectClick);
btnMyWork.addEventListener("click", onButtonMyWorkClick);
btnMyContact.addEventListener("click", onButtonMyContactClick);

function onButtonBiographyClick() {
  blockHeader.classList.add("rotateSliderOutToRight");
  blockBio.classList.add("rotateSliderInFromLeft");

  var wrapper = document.querySelector(".wrapper__bio-section");
  var text = document.querySelector(".text");

  // var textCont = text.textContent;
  // text.style.display = "none";

  // for (var i = 0; i < textCont.length; i++) {
  //   (function(i) {
  //     setTimeout(function() {
  //       // Created textNode to append
  //       var texts = document.createTextNode(textCont[i]);
  //       var span = document.createElement("span");
  //       span.appendChild(texts);

  //       span.classList.add("wave");
  //       wrapper.appendChild(span);
  //     }, 75 * i);
  //   })(i);
  // }
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
