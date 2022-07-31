const maxRedigit = (value) => {
  if (value > 99 && value < 1000) {
    return Number(String(value).split("").sort().reverse().join(""));
  }
  return null;
};
console.log(maxRedigit(231));
