var myarr = ["one", "two", "three"];
var myarr2 = [1, 2, 3, 4];

function arrayInfo (element, index, array) {
    console.log("element is: " + element + " index is: " + index, "array is: " + array);
}
myarr.forEach(arrayInfo);

function printReverse(arrparam) {
    for (var i=myarr.length -1; i>=0; i--) {
        console.log(arrparam[i]);
    }
}
printReverse(myarr);

function sumArray(arr) {
    var sum = 0;
    for (var i=0; i<=myarr.length; i++) {
        sum = sum + myarr2[i];
    }
    console.log(sum);
}
sumArray(myarr2);
