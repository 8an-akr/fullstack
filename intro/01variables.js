// H.w lesson 2

// 1. number * number = print
// let num1 = prompt("Choose a number to multiply");
// let num2 = prompt("now another!");
// let text =  ("Your multiplied number is " + num1 * num2);
// document.getElementById("print").innerHTML = text;

// 2. input name + age = name is age years old  
// let name = prompt("what is your name?");
// let age = prompt("How old are you?");
// let text =  (`Good Morning ${name} Your age is ${age}`);
// document.getElementById("print").innerHTML = text;

// 3. date of birth = age
// let birth = prompt("when where you born?", "YYYY");
// const d = new Date ();
// let year = d.getFullYear();
// let age = (year-birth);
// let text =  ("Your age is " + age);
// document.getElementById("print").innerHTML = text;


// 4. hour = proper greeting for set time 
// const hour = new Date().getHours();
// if (22 < hour < 24 && 1 < hour < 5) { 
// let text =  ("Good Night");
// document.getElementById("print").innerHTML = text;
// } else if (6 < hour < 11) { 
//         let text =  ("Good Morning!!");
//         document.getElementById("print").innerHTML = text;
// } else if (12 < hour < 17) { 
//     let text =  ("Good Afternoon");
//     document.getElementById("print").innerHTML = text;
// } else if (18 < hour < 21) { 
//     let text =  ("Good Evening");
//     document.getElementById("print").innerHTML = text;
// }


// 5.  is input = random number
// let rndm = Math.floor(Math.random() * 11);
// console.log(rndm);
// let num = prompt("Choose a number between 1-10");
// if (num == rndm) {
//     let text =  ("Good Job!!!!!!!!!!!");
//     document.getElementById("print").innerHTML = text;
// } else { 
//     let text = ("WRONG!! it was "  + rndm);
//     document.getElementById("print").innerHTML = text;
// }

// 6. 3 question quiz
// let a1 = prompt("what is the capital of israel?");
// if (a1 === "Jerusalem") {
//     alert("Good Job!!!!!!!!!!!");
//     var score1 = 33.3
// } else if (a1 === "jerusalem") {
//         alert("Good Job! but its spelled with a capital J since it a place..");
//         var score1 = 33
// } else { 
//     alert("WRONG!! it was Jerusalem.");
//     var score1 = 0;
// }

// let a2 = prompt("1+1=?");
// if (a2 === "2") {
//     alert("Good Job!!!!!!!!!!!");
//     var score2 = 33.3
// } else { 
//     alert("WRONG!! it was 2.");
//     var score2 = 0
// }

// let a3 = prompt("Whats fun to get right now and right now itself?");
// if (a3 === "the present") {
//     alert("Good Job!!!!!!!!!!!");
//     var score3 = 33.3
// } else {
//     alert(`WRONG!! it was "The Present".`);
//     var score3 = 0
// }
// let text = ("Your score is " + (score1 + score2 + score3));
// document.getElementById("print").innerHTML = text;

// 7. is input = input else not
// let stringNum1 = prompt("choose a number");
// let stringNum2 = prompt("another one");
// let num1 = Number(stringNum1);
// let num2 = Number(stringNum2);
// if (num1 === num2) {
//     let text = ("I see.. it's such a good number you Chose it twice!");
//     document.getElementById("print").innerHTML = text;
// } else if (isNaN(num1 + num2)) {
//     let text = ("I literraly said pick a number a$$-hole.");
//     document.getElementById("print").innerHTML = text;
//     console.log(num1, num2)
// } else {
//     let text = ("WOW!! You know so many numbers..");
//     document.getElementById("print").innerHTML = text;
// }


// // 8. can^ be done difrently?
// let stringNum1 = prompt("choose a number");
// let stringNum2 = prompt("another one");
// let num1 = Number(stringNum1);
// let num2 = Number(stringNum2);
// let booleanValue = (num1 - num2);
// if (booleanValue) {
//     let text = ("WOW!! You know so many numbers..");
//     document.getElementById("print").innerHTML = text;
// } else {
//     let text = ("I see.. it's such a good number you Chose it twice!");
//     document.getElementById("print").innerHTML = text;
// }


// // 9. if input = 1 then "I am one" else "I am not one"
// let num = prompt("choose a number", ("1Choose one"));
// if (num == 1) {
//     let text = ("I am ONE!");
//     document.getElementById("print").innerHTML = text;
// } else {
//     let text = ("I am IRONMAN!!");
//     document.getElementById("print").innerHTML = text;
// }

// 10. foo is "I am true/false" by input
// let foo =prompt("Choose a number");
// if (foo == false) {
//     let text = ("I am false");
//     document.getElementById("print").innerHTML = text;
// } else {
//     let text = ("I am true");
//     document.getElementById("print").innerHTML = text;
// }

// // 11. ^ diffrent way
// let foo =prompt("Choose a number");
// if (foo === "0") {
//     let text = ("I am false");
//     document.getElementById("print").innerHTML = text;
// } else {
//     let text = ("I am true");
//     document.getElementById("print").innerHTML = text;
// }

// // 12. foo is gt/lt 5
// let foo = prompt("choose a number", "1-10");
// if (foo > 5) {
//     let text = ("Your number is greater than 5");
//     document.getElementById("print").innerHTML = text;
// } else if (foo == 5) {
//     let text = ("Your number is 5");
//     document.getElementById("print").innerHTML = text;
// } else {
//     let text = ("Your number is less than 5");
//     document.getElementById("print").innerHTML = text;
// }


// // 13. change bar gt= 100 to lt
// let bar = 100;
// if ( 100 <= bar) {
//     console.log('i am 100 or greater')
// } else {
//     console.log('i am lesser than 100')
// }

// // 14. non fufiling condition
// if (1 == 2) {
//     let text = ("Impossible");
//     document.getElementById("print").innerHTML = text;
// } else {
//     let text = ("Always");
//     document.getElementById("print").innerHTML = text;
// }

// // 15. always fulfiling condition
// if (1 = 1) {
//     let text = ("Always");
//     document.getElementById("print").innerHTML = text;
// } else {
//     let text = ("Impossible");
//     document.getElementById("print").innerHTML = text;
// }

// // 16. num is "even/odd"
// let sNum = prompt("pick a number");
// let num = Number(sNum)
// if (num % 2 == 0){
//     let text = ("This number is even");
//     document.getElementById("print").innerHTML = text;
// } else {
//     let text = ("This number is odd");
//     document.getElementById("print").innerHTML = text;
// }

// // 17. is input number gt lt chosen var end=test finished
// let myNum = 69;
// let guess = prompt("Try to get a higher number then me", "1-100");
// if (guess <= myNum) {
//     alert("..")
//     alert(".. ..")
//     alert(".. .. ..")
//     alert("Finished Calculting")
//     let text = ("Loser mine was 69");
//     document.getElementById("print").innerHTML = text;
// } else {
//     let text = ("Yo you got skilzz Bro!");
//     document.getElementById("print").innerHTML = text;
// }


// // 18. print highest num out of 3 numbers
// let a = prompt("choose a number");
// let b = prompt("choose a number");
// let c = prompt("choose a number");
// let text = ("the highest number is " + Math.max(a, b, c) );
//     document.getElementById("print").innerHTML = text;

// // 19. whos there? >cancel-canceled >>other-Idont know you >>>admin-pasword? >cancel-canceled >>other-wrong password >>>TheMaster-Welcome!
// alert("**Knock Knock**")
// let user = prompt("Who's there?")
// if (user === "admin") {
//     let secret = prompt("Then what's the magic word?")
//     if (secret == "TheMaster") {
//         console.log(secret)
//     let text = ("Welcome my Master");
//     document.getElementById("print").innerHTML = text;
//     } else if (secret === null) {
//         alert("Where are you going?")
//         console.log(secret)
//     } else {
//     let text = ("I'm afraid thats wrong...");
//     document.getElementById("print").innerHTML = text;
//     } 
// }else if (user === null) {
//     alert("That's rude..")
// } else {
//     let text = ("Who the hell are you!?");
//     document.getElementById("print").innerHTML = text;
//     }


// // 20. tip between 50-200 = 15% other 20% print = cost, tip, cost+tip
// let price = Number(prompt("how much did it cost fatty?"));
// let tip15 = .15
// let tip20 = .20
// if (50 <= price && price <= 200) {
//     var cTip = price * tip15;
//     var cost = price + cTip
//     let text = ("The meal cost " + price + " You need to pay " + cTip + " for the TiP. Your Total cost is " + (price + cTip) + ".");
//     document.getElementById("print").innerHTML = text;
// } else {
//     var cTip = price * tip20;
//     var cost = price + cTip
//     let text = ("The meal cost " + price + " You need to pay " + cTip + " for the TiP. Your Total cost is " + (price + cTip) + ".");
//     document.getElementById("print").innerHTML = text;
// }


// // 21. traffic light G = drive Y = slow down R = stop
// let light = prompt("please tell me what color is the traffic light");
// if (light === "green") {
//     let text = ("Drive");
//     document.getElementById("print").innerHTML = text;
// } else if (light === "yellow") {
//     let text = ("Slow Down");
//     document.getElementById("print").innerHTML = text;
// } else if (light === "red") {
//     alert("STOP!!!");
// }








// H.w lesson 3


// 1. log loop # exept 5:

// let counter = 0;

// while ( counter < 9) {
//     counter++
//     if (counter == 5) {
//         continue
//     }
//     console.log(counter)
// }


// 2. log evens to 10

// let counter = 0;

// while ( counter < 10 ){
//     counter++
// while  ( counter % 2 == 0 && counter < 10 ){
//     console.log(counter)
//     counter++
//     }
// }

// 3. jump 7 till 78

// let sum = 1

// while (sum <= 78) {
//     console.log(sum)
//     sum = sum + 7
// }


// 4. skips of 3 to 300

// let counter = 1
// let sum = 0

// while (sum <= 300) {
//     console.log(sum)
//     sum = counter * 3
//     counter++
// }

// 5. print stars

// let str = ` `;
// let length = Number(prompt("choose a number from 1-100")) + 1

// while (str.length < length) {
//     str = `${str}*`
//     console.log(str)
// }


// 6. only 3 digit Number

// let user = prompt("choose a 3 digit number");

// while (user.length != 3) {
//     user = prompt("I SAID 3 DIGITS!!")
// }
// console.log(user)


// 7. whats the error?

// while (i < 9) {
//     let i = 0;
//     console.log(i)
//     i=i+1
// }

// since the i is defined inside the while scope and not outside of it there is no variable to check against the condition.


// 8. 2 inputs summed = smaller until 0,0

// let in1 = Number(prompt("enter a digit"));
// let in2 = Number(prompt("enter another digit"));
// while ( in1 % 1 !== 0 || in2 % 1 !== 0) {
//     in1 = Number(prompt("enter a WHOLE digit"));
//     in2 = Number(prompt("enter another WHOLE digit"))
// }


// let inSum = in1 + in2;
// let zero = 0;

// while (inSum != 0) {
//     zero = inSum;
//     console.log(inSum)

//     in1 = Number(prompt("enter a digit"));
//     in2 = Number(prompt("enter another digit"));
//     while ( in1 % 1 !== 0 || in2 % 1 !== 0) {
//         in1 = Number(prompt("enter a WHOLE digit"));
//         in2 = Number(prompt("enter another WHOLE digit"))
//     }
//     inSum = in1 + in2;

//     while (inSum < zero) {
//     console.log(`smaller`)
//     if ( zero != 0 ) {break; }
//     }
// }
// console.log(inSum)


// 9. dicxount 100<.8<250<.6<400<-50 end=0

// let sumPrice = 0
// let price = null
// while (price != 0) {
//     price = Number(prompt('Enter item price'))
//     console.log(`item price ${price}$`)
//     sumPrice += price
// } if ( 100 <= sumPrice && sumPrice < 250 ) {
//     sumPrice *= .8
// } else if ( 250 <= sumPrice) {
//     sumPrice *= .6
//     if (sumPrice > 400) {
//         sumPrice -= 50
//     }
// } 
// console.log(`Total to pay ${sumPrice}$`)


// 10. truck has 32sm and can carry 10 ton user inputs show when full.

// let space = 32
// let weight = 10

// while (space > 0 && weight > 0) {
//     space -= Number(prompt(`enter package size in m^2`))
//     weight -= Number(prompt(`enter package weight in tons`))
//     console.log(`space left on the truck ${space} m^2\nweight left on the truck ${weight} Tons`)
// } if ( space < 0 ) {
//     console.log(`take off the truck ${-1*space} m^2`)
// } else if ( weight < 0 ) {
//     console.log(`take off the truck ${-1*weight} Tons`)
// }
// console.log(`and the truck is full`)
