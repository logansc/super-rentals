var testFunc = function() {
    return 5;
}

console.log(testFunc.call());

const myModule = require('./javascriptDeleteMe2.js');
let val0 = myModule.hello();
let val1 = myModule.returnSeven();
let val2 = myModule.returnEight();
console.log(val0);
console.log(val1);
console.log(val2);