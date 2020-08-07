//simple way to square an array element.
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
//=======================MAP=======================

function square(element) {
    return element * element;
}
//=================================================
//when you passed a function inside .map then he get result an another array.
const square = element => element * element;
const square = x => x * x;
const result = numbers.map(function(element,index,array) {
    return element * element;
});
//======================================================
//shortcut way to using arrow function an array.
const result = numbers.map(x => x * x);
console.log(result);

//====================Filter=======================
//when you filer an array element then used filter, filter allowes return an array.
const bigger = numbers.filter( x => x >5);
console.log(bigger);

//====================Find=======================
//when you fond an array element then used find, find allowes return an one value.
const isBigger = numbers.find( x => x >5);
console.log(isBigger);