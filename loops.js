/*var counter = -10;

while(counter < 20){
	console.log(counter);
	counter++;
}*/

console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");
for (var i=-10; i<20; i++) {
    console.log(i);
}

console.log("PRINTING ALL EVEN BETWEEN 10 AND 40");
for (var i=10; i<=40; i+=2) {
    console.log(i);
}
/*
var counter = 10;

while(counter <= 40){
	console.log(counter);
	counter+=2;
}
*/

// while(counter <= 40){
// 	if(counter % 2 === 0){
// 		console.log(counter);
// 	}
// 	counter+=1;
// }

console.log ("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");
for (var i=300; i<=333; i++) {
    if(i % 2 !== 0){
		console.log(i);
	}
}
/*
var counter = 300;

while(counter <= 333){
	if(counter % 2 !== 0){
		console.log(counter);
	}
	counter+=1;
}
*/




console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
for (var i=5; i<=50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
		console.log(i);
    }
}
/*var counter = 5;

while(counter <= 50){
	if(counter % 5 === 0 && counter % 3 === 0){
		console.log(counter);
	}
	counter+=1;
}*/
