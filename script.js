// burger menu
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

// collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  console.log("test");
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
