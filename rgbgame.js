var numSquares = 6;
var colours = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector("h1");
var buttonReset = document.getElementById('reset');
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquareListeners();
    reset();
}

function setUpModeButtons () {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //ternary operator
            reset();
        });
    }
}

function setUpSquareListeners() {
    for(var i = 0; i < squares.length; i++){
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
        });
    }
}

function reset() {
    colours = generateRandomColours(numSquares);
    pickedColor = pickColour();
    colorDisplay.textContent = pickedColor;
    buttonReset.textContent = "New Colours";
    messageDisplay.textContent = "";

    for(var i = 0; i < squares.length; i++){
        if (colours[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

buttonReset.addEventListener("click", function() {
    reset();
})

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
