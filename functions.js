function isEven(num) {
    return (num % 2 === 0);
}

function factorial (fact) {
    var result = 1;
    for (var i=2; i<=fact; i++) {
        //result = fact * i;
        result *= i;
    }
    return (result);
}

function kebabToSnake (word) {
    snake = word.replace(/-/g, "_");
    return (snake);
}

function sing () {
    console.log("twinkle twinkle ...");
    console.log("little star ...");
}

//setInterval(sing, 10000);
