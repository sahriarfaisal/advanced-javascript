let bonus = 20;//public scope access any place.
//scope area
function sum(first, second) {
    let result = first + second+bonus;
    // console.log(bonus);
    //block scope
    if(result > 9){
        let mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky"
        console.log(mood);
    }
    return result;
}
const output = sum(3, 7);
// console.log(bonus);
// console.log(output);