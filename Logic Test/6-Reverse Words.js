const reverse = (val) => {
  let items = [];
  items = val.match(/\S+/g);
  let result = "";
  for (let i = 0; i < items.length; i++) {
    result += items[i].split("").reverse().join("") + " ";
  }
  return result;
};
console.log(reverse("I am A Great human"));
