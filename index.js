console.log("Hello world!");
var i, j, re = '';
var n = 5;
for (i = 1; i < n; i++) {

    console.log('*'.repeat(i));

}
//console input
var num = prompt("ENTER VALUE");
 

//pattern start
var i, j, re = "";
for (i = 1; i < 5; i++) {
    for (j = 1; j < i; j++) {

        console.log(re = re + num);
    }

}
//factorial
function factorial(v) {

    // if number is 0
    if (v == 0) {
        return 1;
    }

    // if number is positive
    else {
        return v * factorial(v - 1);
    }
}


console.log("factorial", factorial(num));