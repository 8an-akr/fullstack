// 1. long way
// let light = prompt("light color");
// let text
// if (light == 'red') {
//     alert('stop')
// } else if (light == 'green') {
//     alert('drive')
// } else if (light == 'orange') {
//     alert('slow down')
// } else {
//     alert('wrong input')
// }

// 1. short way ?
// let light = prompt("light color");
// let text = (light == 'red') ? 'stop' : (light == 'orange') ? 'slow down' : (light == 'green') ? 'drive' : 'wrong input';
// alert(text)

// 2.
// let speed = prompt('speed')
// let text = (speed < 0) ? 'driving backwards' : (speed < 40) ? 'drive already' : (speed < 80) ? 'Driving Well' : (speed < 120) ? 'slow down' : (speed > 120) ? 'Stop Now' : 'how are you driving?';
// alert(text)

// 3. whos largest
// let num1 = Number(prompt('enter number'))
// let num2 = Number(prompt('enter number'))
// let num3 = Number(prompt('enter number'))
//     // alert(Math.max(num1, num2, num3))

// let text = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3) ? num2 : (num3 > num1 && num3 > num2) ? num3 : (num2 == num1 || num2 == num3 || num2 == num3) ? 'equled numbers inpured' : 'no number iputed';
// alert(text)

// 4.hi user>first>last
// let userName = prompt('enter username');
// let firstName = prompt('enter first Name');
// let lastName = prompt('enter last name');
// let text = ''

// text = (userName || firstName || lastName || "Anonymous")
// alert(text);

// 
// let userName = prompt(`enter name`)
// let nameLength = userName.length
// let counter = 0
// let backwards = ''
// let menuOptions = prompt(`menu:\n1- letter by letter\n2- bacwards\n3- isPlandrome?\n 4- does contain number?`)

// if (menuOptions == 1) {
//     for (nameLength; nameLength > 0; nameLength--) {
//         alert(userName[counter])
//         counter++
//     }
// } else if (menuOptions == 2) {
//     for (userName.length; nameLength > 0; nameLength--) {
//         alert(userName[nameLength - 1])
//     }
// } else if (menuOptions == 3) {
//     for (userName.length; nameLength > 0; nameLength--) {
//         backwards += userName[nameLength - 1]
//     }
//     if (userName == backwards) {
//         alert(`is palindrome`)
//     } else {
//         alert(`is not a palindrome`)
//     }
// } else if (menuOptions == 4) {
//     for (nameLength; nameLength > 0; nameLength--) {
//         if (!isNaN(userName[counter])) {
//             alert(`${userName[counter]} is a number`)
//         }
//         counter++
//     }
// } else {
//     alert('wrong input')
// }