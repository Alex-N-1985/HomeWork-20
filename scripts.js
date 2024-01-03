// Задача 1

// let nums = [5, 2, 4];
// let squares = new Array();

// console.log(nums);
// console.log(squares);

// nums[99] = 3;

// console.log(nums);

// for (let i = 0, j = 0; i < nums.length; i++){
//     if (nums[i] === undefined)
//         continue;
//     else {
//         squares[j] = Math.pow(nums[i], 2);
//         j++;
//     }
// }

// console.log(squares);

// Задача 2

let list = [
    {
        product: "Apple",
        price: 25
    }, 
    {
        product: "Cherry",
        price: 32
    },
    {
        product: "Strawberry",
        price: 45
    },
    {
        product: "Banana",
        price: 35
    },
    {
        product: "Pear",
        price: 28
    },
    {
        product: "Raspberry",
        price: 32
    },
    {
        product: "Orange",
        price: 35
    }
];

let maxData = findMaxData(list);

console.log(maxData);

function findMaxData(listData){
    let arr = [];
    for (let i = 0; i < listData.length; i++){
        arr.push(listData[i]);
    }
    arr.sort((a, b) => a.price - b.price);
    let output = [];
    output.push(arr[arr.length - 1]);
    for (let i = arr.length - 2; i >= 0; i--){
        if (arr[arr.length - 1] == arr[i] && i != 0){
            output.push(arr[i]);
        }        
        else {
            break;
        }
    }
    return output;
}