/*Use Recursion to Create a Range of Numbers

Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.*/

function rangeOfNumbers(startNum, endNum) {
  let range = endNum - startNum;
  if (range < 0) {
    return [];
  } else {
    const rangeArray = rangeOfNumbers(startNum, endNum - 1);
    rangeArray.push(range + startNum);
    return rangeArray;
  }
}
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(0, 6));
console.log(rangeOfNumbers(3, 3));
