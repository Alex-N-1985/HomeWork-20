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

// let list = [
//     {
//         product: "Apple",
//         price: 25
//     }, 
//     {
//         product: "Cherry",
//         price: 32
//     },
//     {
//         product: "Strawberry",
//         price: 35
//     },
//     {
//         product: "Banana",
//         price: 35
//     },
//     {
//         product: "Pear",
//         price: 28
//     },
//     {
//         product: "Raspberry",
//         price: 32
//     },
//     {
//         product: "Orange",
//         price: 35
//     }
// ];

// let maxData = findMaxData(list);

// console.log(maxData);

// function findMaxData(listData){
//     let arr = [];
//     for (let i = 0; i < listData.length; i++){
//         arr.push(listData[i]);
//     }
//     arr.sort((a, b) => a.price - b.price);
//     let output = [];
//     output.push(arr[arr.length - 1]);
//     for (let i = arr.length - 2; i >= 0; i--){
//         if (output[output.length - 1].price == arr[i].price && i != 0){
//             output.push(arr[i]);
//         }        
//         else {
//             break;
//         }
//     }
//     return output;
// }

// Задача 3

let products = [
    {product: "салат", price: 20}, 
    {product: "яблоко", price: 15}, 
    {product: "картошка", price: 10}, 
    {product: "капуста", price: 12}, 
    {product: "помидор", price: 30}, 
    {product: "морковь", price: 10}, 
    {product: "редис", price: 25}, 
    {product: "клубника", price: 30},
    {product: "малина", price: 27},
    {product: "кукуруза", price: 30},
    {product: "огурец", price: 28}
];

let aLenght = getRandomNum(10, 30), 
    prod = null,
    rIndex = -1,
    bIndex = -1,
    basket = [];

for (let i = 0; i < aLenght; i++){
    rIndex = getRandomNum(0, products.length - 1);
    prod = products[rIndex];
    bIndex = isProductInBasket(basket, prod);
    if (bIndex < 0){
        prod.cnt = 1;
        basket.push(prod);
    } else {
        basket[bIndex].cnt += 1;
    }
}

console.log(basket);

let bSumma = 0;
bSumma = basket.reduce(function(acc, item){ 
    return item.price * item.cnt + acc;
}, 0);

console.log(`Сумма = ${bSumma}`);

function getRandomNum(min = 0, max = 10){
    return Math.round(Math.random() * (max - min) + min);
}

function isProductInBasket(prods, prod){
    for (let i = 0; i < prods.length; i++){
        if (prods[i].product === prod.product )
            return i;
    }
    return -1;
}