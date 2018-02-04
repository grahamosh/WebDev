//var colours = [
//	"rgb(255, 0, 0)",
//	"rgb(255, 255, 0)",
//	"rgb(0, 255, 0)",
//	"rgb(0, 255, 255)",
//	"rgb(0, 0, 255)",
//	"rgb(255, 0, 255)"
//];

var numSquares = 6;
var colours = generateRandomColours(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColour();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector("h1");
var buttonReset = document.getElementById('reset');
var hardBtn = document.querySelector("#hardBtn");
var easyBtn = document.querySelector("#easyBtn");


easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colours = generateRandomColours(numSquares);
    pickedColor = pickColour();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colours[i]) {   // first 3 will return true!
            squares[i].style.background = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
 })

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colours = generateRandomColours(numSquares);

    pickedColor = pickColour();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colours[i];
        squares[i].style.display = "block";
    }
})

buttonReset.addEventListener("click", function() {
    colours = generateRandomColours(numSquares);
    pickedColor = pickColour();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colours[i];
    }
    h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colours[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
            buttonReset.textContent = "PLAY AGAIN?";
			changeColours(clickedColor);
        } else {
			messageDisplay.textContent = "Try Again!";
            this.style.backgroundColor = "#232323";
        }
	})
}

function changeColours (colour) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colour;
    }
    h1.style.backgroundColor = colour;
}

function pickColour (num) {
    var randColour = Math.floor(Math.random() * colours.length);
    return colours[randColour];
}

function generateRandomColours(num) {
    colArr = [];
    for(var i = 0; i < num; i++){
        var rgbStr = randomRGBColour();
        colArr[i] = rgbStr;
    }
    return colArr;
}

function randomRGBColour() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return rgb = 'rgb(' + r + ", " + g + ", " + b + ')';
}
