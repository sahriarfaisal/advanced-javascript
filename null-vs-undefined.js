// first way to get undefined
let name;//declare a variable without assign value.
console.log(name);
//======================================================
//second way to get undefined. when you not return function .
function add(num1, num2){
    console.log(num1 + num2);
    return
}
const result = add(13,82);
console.log(result);

//===============================================
//thread way to get undefined , when you declare a function parameter but do not  passed parameter.
function add(num1, num2=20){
    console.log(num1, num2);
}
const result = add(13);
console.log(result);

//===============================================

//forth way to get undefined, when you access missing object property.
const premik = {name: "smart dude", phone: 458421};
console.log(premik.gf);

//==============================================
// fifth way to get undefined , when you set a variable value in undefined.
let fun = undefined;
console.log(fun);

//===============================================
//sixth way to get undefined , when you access out of array(missing) element.
let ages = [2, 5, 9];
console.log(ages[8]);