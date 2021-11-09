// let uName = prompt('User Name')

// while ( uName.length > 7 || uName.length < 2 ) {
//     alert("not a valid user name");
//     uName = prompt('enter number')
// }

// alert('Hello ' + uName)

// let score = prompt("Enter score, end with exit");
// let studentNum = 0
// let scoreSum = 0
// let max = 0
// let min = 100

// while (Number(score) == NaN || Number(score) < 0 || Number(score) > 100 ) {
//     alert("not a valid grade")
//     score = prompt("Enter score, end with exit");


// while( score != 'exit') {
//     let number = Number(score)
//     studentNum = studentNum + 1
//     scoreSum = scoreSum + number

//     if (number > max) {
//         max = number
//     }

//     if (number < min ) {
//         min = number
//     }

//     score = prompt("Enter score, end with exit");

//     }
// }

// let text = (`The number of students is ${studentNum} the class avrege is '${(scoreSum / studentNum)} highest score is ${max} lowest score is ${min}` );
// document.getElementById("print").innerHTML = text;

// let score = prompt("Enter score, end with exit");
// let numQ = 0;
// let sumNum =0;

//     while (score != `exit`) {
//     numQ++;
//     sumNum += Number(score);
//     score = prompt("Enter score, end with exit");
// }


// let text = (`The number of scores is ${numQ} the sum of the scores is ${sumNum}` );
// document.getElementById("print").innerHTML = text;





// // guess who?

// let str = 'eitan';
// let counter = 0;
// let input = '' 
// let right = 0

// while ( counter < 4 ) {
//     input = prompt(`Guess Who?`)
//     if ( input.length > 1) {
//     input = prompt(`too many letters`)    
//     }
//     else{
//         if(str.includes(input)) {
//             right++
//         }

//         counter++
//     }
// }

// let text = (`The number of right guesses was ${right} out of 4` );
// document.getElementById("print").innerHTML = text;


// for (i=1; i <= 100; i++){
//     console.log(i)
// }


// for (i = 4; i <= 120; i += 4) {
//     console.log(i)
// }

let sum = 0,
    num;
for (i = 0; i < 5; i++) {
    num = Number(prompt('number'));
    if (isNaN(num)) {
        throw new Error("ERROR NaN imputed")
    }
    sum += num;
}
console.log(sum)