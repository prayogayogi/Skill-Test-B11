// Find Middle Alphabet
const middleAlphabet = (num1, num2) => {
  let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabet1 = data.indexOf(num1);
  let alphabet2 = data.indexOf(num2);

  let result = (alphabet1 + alphabet2) / 2;
  let item;
  if (result % 2 == 0.5) item = 2;
  else item = 1;
  return data.substring(result, result + item);
};

console.log(middleAlphabet("T", "Z"));
