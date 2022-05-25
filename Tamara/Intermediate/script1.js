var fruits = ['apple', 'banana', 'kiwi'];
fruits.splice(3,0, 'orange');
console.log(fruits);
document.write(fruits);
document.write("<br />");
console.log(fruits.slice(0,3));
document.write(fruits.slice(0,3));
/*console.log(fruits.pop());
console.log(fruits);
document.write(fruits.pop());
document.write(fruits);*/

document.write("<br />");
document.write("<br />");


var animals = ['monkey', 'horse', 'dog'];
console.log(animals.sort());
document.write(animals.sort());
document.write("<br />");
animals.splice(0,0, 'cat');
console.log(animals);
document.write(animals);


document.write("<br />");
document.write("<br />");

let b = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
let temp = new Array();
temp = b.split('/');
document.write(temp[0] + '<br/>' + '<br/>');
document.write(temp[1] + '<br/>' + '<br/>');
document.write(temp[2] + '<br/>' + '<br/>');
document.write(temp[3] + '<br/>' + '<br/>');
document.write(temp[4] + '<br/>' + '<br/>');
document.write(temp[5] + '<br/>' + '<br/>');
document.write(temp[6] + '<br/>' + '<br/>');
document.write(temp[7] + '<br/>' + '<br/>');
console.log(temp);