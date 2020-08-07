//double equal only check value. not check datatype.
const first = 2;
const second = "2";
//used == equal
if(first == second){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}
//When you used === equal then condition check  value and also check value data type
const num1 = 2;
const num2 = "2";
//used === equal
if(num1 === num2){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}

//another example 
const num4 = 0;
const num5= false;
//used === equal
if(num4 === num5){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}
