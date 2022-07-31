const Fibonacci = (val) => {
  let num = 0;
  for (i = 0; i < val.length; i++) {
    num += val[i];
  }

  if (num == 0) {
    console.log(0);
    return;
  }
  let first = 0,
    second = 1;

  // Store the third term
  let third = first + second;
  while (third <= num) {
    // Update the first
    first = second;

    // Update the second
    second = third;

    // Update the third
    third = first + second;
  }
  let ans = Math.abs(third - num) >= Math.abs(second - num) ? second : third;
  console.log(ans - num);
};

// arr = [15,1,3]
let N = [15, 1, 3];
Fibonacci(N);
