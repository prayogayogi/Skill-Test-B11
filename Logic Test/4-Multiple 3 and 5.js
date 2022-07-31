const solution = (n) => {
  let num1 = 3;
  let num2 = 5;
  for (let i = 1; i <= n; i++) {
    let result = "";

    // multiple of 3
    if (i == num1) {
      num1 = num1 + 3;
      result = result + i + " Multiple 3. ";
    }

    // multiple of 5
    if (i == num2) {
      num2 = num2 + 5;
      result = result + i + " Multiple 5.";
    }

    if (result == "") {
      console.log(i);
    } else {
      console.log(result);
    }
  }
};

// result
solution(10);
