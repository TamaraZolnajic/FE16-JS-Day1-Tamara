//EXERCISE 1

var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

//var f = a+b+c+d+e
var add = (a + b + Number(c) + Number(d) + e);
console.log(add)

var f = '1';
var g = 15;
var h = 8;
var i = "1";

var multiply = (Number(f) * g * h * Number(i));
console.log(multiply);

var divide = (add / multiply);
console.log(divide);
document.write(divide);

//EXERCISE 2

var mda = [ [1, 2, 1, 24],
            [8, 11, 9, 4],
            [7, 0, 7, 27],
            [7, 4, 28, 14],
            [3, 10, 25, 7], 
            [21, 4, 6, 17], 
            [3, 5, 26, 3] ];
console.log(mda[1][1], mda[4][2], mda[5][3], mda[2][3], mda[2][1]);

