/*Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice(0, n);
  let arr4 = arr2.slice(arr3.length)
  let arr5 = arr3.concat(arr1);
  let arr6 = arr5.concat(arr4);
  return arr6;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
