var numSquares = 6 ;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".modeBtn");
var messageDisplay = document.querySelector("#message");

init();

function init(){

//mode button event listeners
for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		reset();
		if (this.textContent==="Easy") {
			numSquares=3;
		}
		else{
			numSquares=6;
		}
	reset();
	});
}
//square event listeners
for (var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click",function(){
		clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			resetButton.textContent = "Play Again?"
			h1.style.backgroundColor = pickedColor;
			changeColors(clickedColor);
		}
		else{
			messageDisplay.textContent = "Try Again!"
			this.style.backgroundColor = "#23232323"
		}
	});
}
reset();
}



resetButton.addEventListener("click",function(){
	reset();
})



function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}
function randColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr[i] = randColorGen();
	}
	return arr;
}
function randColorGen(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + blue + ", " + green + ")";
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = randColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		}
		else{
		squares[i].style.display = "none";
		}
	}	
}