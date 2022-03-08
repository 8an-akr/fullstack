const fibo = (num) => (num <= 1 ? 1 : fibo(num - 1) + fibo(num - 2));

// fibo(35);

function fibo2(x) {
  let x1 = 1,
    x2 = 1;
  for (i = 1; i < x; i++) {
    let tmp = x2;
    x2 += x1;
    x1 = tmp;
  }
  return x2;
}
