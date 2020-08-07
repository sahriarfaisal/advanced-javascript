//Function return another function.
function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
//closure(when i call function an another function , then the function creat an closure environment)
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());

console.log(clock1());
console.log(clock1());
