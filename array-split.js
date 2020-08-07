//array element split using (slice)
const nums = [1,2,3, 4, 5, 6, 7, 8];
// const part = nums.slice(2, 5);//slice array index
const remove = nums.splice(2, 3, 77);//splice array index
// console.log(remove);
// console.log(nums);//output ordinal array 


const together = nums.join("ami");
console.log(together);