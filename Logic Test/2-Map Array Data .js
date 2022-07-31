const productArray = (arr, n) => {
  if (n == 1) {
    console.log(0);
    return;
  }
  let left = new Array(n);
  let right = new Array(n);
  let prod = new Array(n);

  let i, j;
  // Elemen paling kiri dari arra kiri selalu 1
  left[0] = 1;

  // Elemen paling kanan dari array kanan selalu 1
  right[n - 1] = 1;

  // Construct array kiri
  for (i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }

  // Construct array kanan
  for (j = n - 2; j >= 0; j--) {
    right[j] = arr[j + 1] * right[j + 1];
  }

  for (i = 0; i < n; i++) {
    prod[i] = left[i] * right[i];
  }

  // cetak array prod yang telah dibuat
  for (i = 0; i < n; i++) {
    console.log(prod[i] + " ");
  }

  return;
};

let arr = [13, 10, 5, 2, 9];
let n = arr.length;
productArray(arr, n);
