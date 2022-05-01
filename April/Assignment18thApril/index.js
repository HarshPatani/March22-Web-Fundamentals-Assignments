function divArrayBy2(arr) {
  for (let i = 0; i < arr.length; i++) {
    var element = arr[i] / 2;
    console.log("element");
    var newArr = [];
    newArr.push(element);
  }
}
const array = [1, 3, 5, 7, 9, 10];

console.log(divArrayBy2(array));
