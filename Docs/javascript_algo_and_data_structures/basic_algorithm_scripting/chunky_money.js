/*
Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);

  }
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// a b
// c d
// e f

// a b c
// d e f

// a b c d
// e f
