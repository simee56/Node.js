// Importing the function which is used in math.json with the help of require function.
//This type of exporting and importing of modules is known as Common js module.
const math = require('./math.js');
console.log("The value of math is : ", math.add(4, 5));

//OR

const { add, sub } = require('./math.js');
console.log("The value of math is : ", sub(4, 5));

// console.log("The value of math is : ",math);


