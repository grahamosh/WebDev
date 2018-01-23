var p1Button = document.getElementById("p1Button");
var p1Display = document.getElementById("p1Display");
var p2Button = document.getElementById("p2Button");
var p2Display = document.getElementById("p2Display");
var resetButton = document.getElementById("resetButton");
var numInput = document.querySelector("input");
var playingTo = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

numInput.addEventListener("change", function() {
    playingTo.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

p1Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if(p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if(p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
    }
});

resetButton.addEventListener("click", function() {
    reset();
});

function reset(){
    p1Display.textContent = p2Display.textContent = 0;
    p1Score = p2Score = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}
