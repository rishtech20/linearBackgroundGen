var _ = require('lodash');

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); //Selecting the class from the tag
var color2 = document.querySelector(".color2"); //Selecting the class from the tag
var body = document.querySelector("body");
var button = document.querySelector("button");

function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
	color1. value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

setGradient(); //initialises the page to the default colors
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColor);
