// burger menu open and close
const burgerMenu = document.getElementById("menu-hamburger");

function myFunction() {
  burgerMenu.classList.toggle("change");
  burgerMenu.classList.add("menu-open");
  if (document.getElementById("menu-opacity").style.opacity == 0) {
    document.getElementById("menu-opacity").style.opacity = 1;
  } else {
    document.getElementById("menu-opacity").style.opacity = 0;
  }
}

burgerMenu.addEventListener("click", myFunction);

// auto close burger menu once item is choosen
const menuLink1 = document.getElementById("aIntro");
const menuLink2 = document.getElementById("good-menu-but");
const menuLink3 = document.getElementById("bad-menu-but");
const menuLink4 = document.getElementById("aAbout");
menuLink1.addEventListener("click", myFunction);
menuLink2.addEventListener("click", myFunction);
menuLink3.addEventListener("click", myFunction);
menuLink4.addEventListener("click", myFunction);

// collapsible elements
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// burger menu opening collapsible
const goodMenu = document.getElementById("good-menu-but");
goodMenu.addEventListener("click", function () {
  console.log(coll[0]);
  coll[0].classList.toggle("active");
  var content = coll[0].nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});

const badMenu = document.getElementById("bad-menu-but");
badMenu.addEventListener("click", function () {
  console.log(coll[1]);
  coll[1].classList.toggle("active");
  var content = coll[1].nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});