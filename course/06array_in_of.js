// leave only decimal 
// let arr = [8, 1.6, 0.1, 22, 15, 8.8, 54.1, 1000]
// let arrDec = []
// let arrIntSum = 0
// for (i = 0; i < arr.length; i++) {
//     if (!Number.isInteger(arr[i])) {
//         arrDec.push(arr[i])
//     } else {
//         arrIntSum += arr[i]
//     }
// }
// console.log(arrIntSum)
// console.log(arrDec, arrDec.sort((a, b) => a - b))


// marks for teacher
// let mark = Number(prompt(`enter mark`));
// let marks = []
// let marksSum = 0
// while (mark > -1 && !isNaN(mark)) {
//     marks.push(mark)
//     marksSum += mark
//     mark = Number(prompt(`enter mark`))
// }
// console.log(marks);
// console.log(marks.sort((a, b) => a - b))
// console.log(marksSum / marks.length);
// console.log(Math.min(...marks));
// console.log(Math.max(...marks));

// // array reverse
// let arr = [8, 1.6, 0.1, 22, 15, 8.8, 54.1, 1000]
// for (i = arr.length - 1; i > 0; i--) {
//     console.log(arr[i]);
// }

// who shows up the most
// let arr = [8, 'a', 'a', 'a', 12, 8, 'a', 3, 'a', 12, 4, 9, 3].sort()
// for (i = 0; i < arr.length; i++) {
//     let counter = 1
//     if (arr[i] === arr[i + 1]) {
//         counter++
//         console.log(counter);
//     } else {
//         console.log(counter);
//     }
// }

// rndm num beteween 2 nums
// function rndmInt(max, min) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(rndmInt(0, 200))

//  num quantity min max randm array

// function rndmArray(quantity, min, max) {
//     let randomArray = []
//     for (i = 0; i < quantity; i++) {
//         randomArray.push(rndmInt(min, max))
//     }
//     return randomArray
// }

// console.log(10, 200, 1000);


//random 2 sum array
// function sum2(array2) {

// }


// array sum
// function arraySum(arrayName) {
//     let arrSum = 0
//     for (i = 0; i < arrayName.length; i++) {
//         arrSum += Number(arrayName[i])
//     }
//     return arrSum
// }

// let array = rndmArray(5, 100, 200)

// console.log(arraySum(array));