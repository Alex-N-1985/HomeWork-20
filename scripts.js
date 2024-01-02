// Задача 1

let nums = [5, 2, 4];
let squares = new Array();

console.log(nums);
console.log(squares);

nums[99] = 3;

console.log(nums);

for (let i = 0, j = 0; i < nums.length; i++){
    if (nums[i] === undefined)
        continue;
    else {
        squares[j] = Math.pow(nums[i], 2);
        j++;
    }
}

console.log(squares);