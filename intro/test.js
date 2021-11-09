let sum = 0;
let avg = null;
let i = prompt('how many entries?');

for (i; i > 0; i--) {
    let temp = Number(prompt('enter your data enty celsius'));
    if (temp > (avg - 20) && temp < (avg + 20)) {
        sum += temp;
    } else {
        y = prompt('continue?')
        if (y == "y") {
            sum += temp;
        } else { break; }

    }
}
avg = sum / i
console.log(avg)