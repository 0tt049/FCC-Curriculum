/*
Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let arr1 = []
  for (let i = 0; i < (arr.length); i += size) {
    let arr0 = arr.slice(i, size + i);
    arr1.push(arr0)
  }
  return arr1;
}

console.log(chunkArrayInGroups(["1", "2", "3", "4", "5"], 2));

// a b
// c d
// e f

// a b c
// d e f

// a b c d
// e f
