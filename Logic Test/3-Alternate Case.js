const upperCase = (char) => {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
};
const lowerCase = (char) => {
  return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
};

const flipCase = (value) => {
  let result = "";
  const item = 32;
  for (let i = 0; i < value.length; i++) {
    const curr = value[i];
    if (lowerCase(curr)) {
      result += String.fromCharCode(curr.charCodeAt(0) - item);
    } else if (upperCase(curr)) {
      result += String.fromCharCode(curr.charCodeAt(0) + item);
    } else {
      result += curr;
    }
  }
  return result;
};

console.log(flipCase("Hello World"));
