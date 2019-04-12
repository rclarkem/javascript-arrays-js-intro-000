var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arr,elem) {
let newArr = [...arr].unshift(elem)
console.log(newArr)
return newArr
}
