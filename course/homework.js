// index:
//       class 1 - 1. shopping list
//                 1. short




// class 1 
// 1. shopping list

// let itemList = "applE, BanaNa, Kiwi, AvOCado, CheRry, FiGs, LeMon, GrapEs"
// const listNoCommas = itemList.replaceAll(`,`, ``)
// const listArray = listNoCommas.split(' ')
// let list = '';
// let listArrLow = listArray.map(listArray => listArray.toLowerCase())

// for (let i = 0; i < listArrLow.length; i++) {
//     listArrLow[i] = listArrLow[i].charAt(0).toUpperCase() + listArrLow[i].substring(1);
// }
// for (i = 0; i < listArrLow.length; i++) {
//     list += `${listArrLow[i]} || ${listArrLow[i].length}\n`
// }
// alert(list)


// // 1. short
// let itemList = "applE, BanaNa, Kiwi, AvOCado, CheRry, FiGs, LeMon, GrapEs"
// let list = ''
// let listNoCommas = itemList.replaceAll(`,`, ``).split(' ').map(listArray => listArray.toLowerCase())

// for (let i = 0; i < listNoCommas.length; i++) {
//     listNoCommas[i] = listNoCommas[i].charAt(0).toUpperCase() + listNoCommas[i].substring(1);
//     list += `${listNoCommas[i]} || ${listNoCommas[i].length}\n`
// }
// alert(list)

// 2. guesing string game

// const secret = 'eitanakrish'
// let rightCounter = 0
// let counter = 0
// while (counter < 4) {
//     let guess = (prompt('guess one key')).toLowerCase();
//     if (guess.length != 1) {
//         alert('you Didnt insert 1 key')
//     } else {
//         counter++
//         if (secret.search(guess) != -1) {
//             rightCounter++
//         } else {}
//     }
// }
// console.log(`you got ${rightCounter}/4 correct!!`)


// 3. multipication table to 100

// const baseArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let changeArr = [];
// let firstNum = baseArr[0];
// let multipTable;
// for (j = 0; j < 10; j++) {
//     for (i = 0; i < 10; i++) {
//         changeArr[i] = baseArr[i] * firstNum
//         indexedLength = `${changeArr[i]}`.length
//         for (f = 6 - indexedLength; f > 0; f--) {
//             changeArr[i] += ` `
//         }

//     }
//     firstNum++
//     multipTable = String(changeArr).replace([`,`], [` `]);
//     console.log(multipTable)
// }


// 3. Bonus multip to 1000

// const baseArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let changeArr = [];
// let firstNum = baseArr[0];
// let multipTable;
// for (j = 0; j < 100; j++) {
//     for (i = 0; i < 10; i++) {
//         changeArr[i] = baseArr[i] * firstNum
//         indexedLength = `${changeArr[i]}`.length
//         for (f = 6 - indexedLength; f > 0; f--) {
//             changeArr[i] += ` `
//         }

//     }
//     firstNum++
//     multipTable = String(changeArr).replace([`,`], [` `]);
//     console.log(multipTable)
// }


// 4. 8 boom multipTable

// const baseArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let changeArr = [];
// let firstNum = baseArr[0];
// let multipTable;
// for (j = 0; j < 100; j++) {
//     for (i = 0; i < 10; i++) {
//         changeArr[i] = baseArr[i] * firstNum
//         if (!Number(changeArr[i] % 8 == 0)) {
//             indexedLength = `${changeArr[i]}`.length
//             for (f = 6 - indexedLength; f > 0; f--) {
//                 changeArr[i] += ` `
//             }
//         } else {
//             changeArr[i] = `Boom  `
//         }

//     }
//     firstNum++
//     multipTable = String(changeArr).replaceAll([`,`], [` `]);
//     console.log(multipTable)
// }


// 4. input number print rndm number between min max
// let repeats = prompt(`enter the amount of numbers you want`);
// let max = prompt(`enter the highest limit`);
// let min = Number(prompt(`enter the lowest limit`));
// let decimal = `100`;
// let rndmNum;
// let counter = 0;

// while (decimal.length < max.length + 1) {
//     decimal += `0`
// }

// while (counter < Number(repeats) && repeats > 1) {
// rndmNum = Math.floor(Math.random() * decimal);
//     if (rndmNum < max && rndmNum > min) {
//         console.log(rndmNum)
//         counter++
//     } else {}
// }