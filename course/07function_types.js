// *** function expession ***

// function expression
let hi = function(msg) {
    console.log(msg);
}

// arrow function
let bye = (msg) => {
    console.log(msg);
}

function ask(question, yes, no) {
    let result = confirm(question);
    if (result) {
        yes()
    } else {
        no()
    }
}

// 1.***************
// ask(`1??`, y1, n1)
// ask(`2??`, y2, n2)

// function y1() {
//     console.log(`y1`);
// }

// function n1() {
//     console.log(`n1`);
// }

// function y2() {
//     console.log(`y2`);
// }

// function n2() {
//     console.log(`n2`);
// }

// 2.******************

// ask(`1??`,
//     () => {
//         console.log(`y1`);
//     },
//     () => {
//         console.log(`n1`);
//     })


// ask(`2??`, () => {
//     console.log(`y2`);
// }, () => {
//     console.log(`n2`);
// })

// let names = [`neriel`, `sam`, `simon`, `john`, `guy`]
// let namelen = 5
// let result = names.find((v, i) => v.length == namelen && i % 2 == 0)
// console.log(result);

// function randomNumArr(min, max, arrLength) {
//     let randomArr = []
//     for (let i = 0; i < arrLength; i++) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         randomArr.push(Math.floor(Math.random() * (max - min) + min));
//     }
//     return randomArr
// }
// console.log(randomNumArr(1, 1000, 20));

// 1. numbers higher thn 150
// (randomNumArr(1, 1000, 20).filter(v => v > 150)).forEach(v => console.log(`${v}\n******`));

// 2. print num | length
// randomNumArr(1, 1000, 20).forEach(v => console.log(`${v}|${v.toString().length}`))

// 3. length > 2
// (randomNumArr(1, 1000, 20).filter(v => String(v).length > 2)).forEach(v => console.log(`${v}\n******`));

// 4. is 770
// console.log(`770 ${randomNumArr(1, 1000, 100).find(v => v==770) ? `exists` : `not found`}`)

// 5. if odd *3 if even *2
// console.log(randomNumArr(1, 1000, 100).map(v => v % 2 == 0 ? (v * 2) : (v * 3)))