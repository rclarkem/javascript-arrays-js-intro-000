var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arr,elem) {
let newArr = [...arr]
newArr.unshift(elem)
return newArr
}

function destructivelyAddElementToBeginningOfArray (array, element) => {
  array.unshift(element)
  return array
}
