const Fibonacci = (num) => {
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
  console.log(ans);
};

// arr = [15,1,3]
let N = 18;
Fibonacci(N);
