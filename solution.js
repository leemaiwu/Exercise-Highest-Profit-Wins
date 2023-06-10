const minMax = arr => {
  sortedArr = arr.sort((a, b) => a - b)
  return [sortedArr[0], sortedArr[sortedArr.length - 1]]
}

console.log(minMax([1, 5])) // [1, 5]
console.log(minMax([2334454, 55, 5])) // [5, 2334454]