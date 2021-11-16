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


// class 05
// homework     


// function splitAniCode(zooArray, method) {
//     let animals = [],
//         codes = [];
//     zooArray = zooArray.toLowerCase().split(`, `)
//     for (i = 0; i < zooArray.length; i++) {
//         zooAnimals = (zooArray[i].slice(0, zooArray[i].search(/\d/)));
//         animalCodes = zooArray[i].replace(zooAnimals, '');
//         codes.push(animalCodes)
//         animals.push(zooAnimals)
//     }
//     if (method == `code`) {
//         return codes
//     } else {
//         return animals
//     }
// }

// function search(array, str) {
//     for (i = 0; i < array.length; i++) {
//         if (codeArr[i] == str) {
//             return i
//         }
//     }
// }

// function searchCode(str) {
//     while (isNaN(search(codeArr, str))) {
//         alert(`code not found`)
//         str = prompt(`enter animal code`)
//     }
//     return alert(`${animalArr[search(codeArr, str)].charAt(0).toUpperCase() + animalArr[search(codeArr, str)].substring(1)} || ${codeArr[search(codeArr, str)]}`)

// }

// function searchAnimal(str) {
//     let searchByName = `search input: ${str}\nthe following animals were found:`
//     for (i = 0; i < animalArr.length; i++) {
//         if (animalArr[i].search(str) != -1) {
//             searchByName += `\nAnimal name: ${animalArr[i].charAt(0).toUpperCase() + animalArr[i].substring(1)}\nAnimal code: ${codeArr[i]}\n`
//         }
//     }
//     return searchByName
// }

// function addAnimal(name, code) {
//     while (!isNaN(search(codeArr, newCode))) {
//         alert(`code already taken`)
//         newCode = Number(prompt(`enter new code`))
//     }
//     animalArr.push(newAnimal.toLowerCase())
//     codeArr.push(String(newCode))
// }

// function deleteAnimal(str) {
//     while (isNaN(search(codeArr, str))) {
//         str = prompt(`this code is not being used enter existing animal code`)
//     }
//     let i = search(codeArr, str)
//     animalArr.splice(i, 1)
//     codeArr.splice(i, 1)

// }
// const txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6 ";
// const txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14";
// let animalArr = splitAniCode(txt1).concat(splitAniCode(txt2))
// codeArr = splitAniCode(txt1, `code`).concat(splitAniCode(txt2, `code`))
// let options = Number(prompt(`choose a option:\n1. search animal by code\n 2. search animal by name\n 3. add new animal\n 4. erase old animal`))


// while (options != -1) {

//     switch (options) {
//         case 1:
//             str = prompt(`enter animal code`)
//             searchCode(str)
//             break;
//         case 2:
//             str = prompt(`enter animal name`).toLowerCase()
//             alert(searchAnimal(str))
//             break;
//         case 3:
//             newAnimal = prompt(`enter animal name`)
//             newCode = Number(prompt(`enter new code`))
//             addAnimal(newAnimal, newCode)
//             break;
//         case 4:
//             str = prompt(`enter animal code`)
//             deleteAnimal(str)
//             break;
//         default:
//             options = Number(prompt(`choose a option:\n1. search animal by code\n 2. search animal by name\n 3. add new animal\n 4. erase old animal`))
//     }
//     console.log(animalArr);
//     console.log(codeArr);
//     options = Number(prompt(`choose a option:\n1. search animal by code\n 2. search animal by name\n 3. add new animal\n 4. erase old animal`))
// }





// short

// const txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6 ";
// const txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14";
// let animalArr = [],
//     codeArr = [],
//     options;
// splitAniCode(txt1)
// splitAniCode(txt2)
// console.log(animalArr);
// console.log(codeArr);

// function splitAniCode(zooArray) {
//     zooArray = zooArray.toLowerCase().split(`, `)
//     for (i = 0; i < zooArray.length; i++) {
//         zooAnimals = (zooArray[i].slice(0, zooArray[i].search(/\d/)));
//         animalCodes = zooArray[i].replace(zooAnimals, '');
//         animalArr.push(zooAnimals)
//         codeArr.push(animalCodes)
//     }
// }

// function search(array, str) {
//     for (i = 0; i < array.length; i++) {
//         if (codeArr[i] == str) {
//             return i
//         }
//     }
// }

// function searchCode(str) {
//     while (isNaN(search(codeArr, str))) {
//         alert(`code not found`)
//         str = prompt(`enter animal code`)
//     }
//     return alert(`${animalArr[search(codeArr, str)].charAt(0).toUpperCase() + animalArr[search(codeArr, str)].substring(1)} || ${codeArr[search(codeArr, str)]}`)

// }

// function searchAnimal(str) {
//     let searchByName = `search input: ${str}\nthe following animals were found:`
//     for (i = 0; i < animalArr.length; i++) {
//         if (animalArr[i].search(str) != -1) {
//             searchByName += `\nAnimal name: ${animalArr[i].charAt(0).toUpperCase() + animalArr[i].substring(1)}\nAnimal code: ${codeArr[i]}\n`
//         }
//     }
//     return searchByName
// }

// function addAnimal(name, code) {
//     while (!isNaN(search(codeArr, newCode))) {
//         alert(`code already taken`)
//         newCode = Number(prompt(`enter new code`))
//     }
//     animalArr.push(newAnimal.toLowerCase())
//     codeArr.push(String(newCode))
// }

// function deleteAnimal(str) {
//     while (isNaN(search(codeArr, str))) {
//         str = prompt(`this code is not being used enter existing animal code`)
//     }
//     let i = search(codeArr, str)
//     animalArr.splice(i, 1)
//     codeArr.splice(i, 1)

// }


// do {
//     options = Number(prompt(`choose a option:\n1. search animal by code\n 2. search animal by name\n 3. add new animal\n 4. erase old animal`))

//     switch (options) {
//         case 1:
//             str = prompt(`enter animal code`)
//             searchCode(str)
//             break;
//         case 2:
//             str = prompt(`enter animal name`).toLowerCase()
//             alert(searchAnimal(str))
//             break;
//         case 3:
//             newAnimal = prompt(`enter animal name`)
//             newCode = Number(prompt(`enter new code`))
//             addAnimal(newAnimal, newCode)
//             break;
//         case 4:
//             str = prompt(`enter animal code`)
//             deleteAnimal(str)
//             break;

//         case 5:
//             options = 5
//             break;

//         default:
//             options = Number(prompt(`choose a option:\n1. search animal by code\n 2. search animal by name\n 3. add new animal\n 4. erase old animal`))
//     }
//     console.log(animalArr);
//     console.log(codeArr);
// } while (options != 5);