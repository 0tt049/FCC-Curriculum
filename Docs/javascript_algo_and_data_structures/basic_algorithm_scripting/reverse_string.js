/*
* Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  let rev_str = "";
  console.log(str.length)
  for (let i = 1; i < str.length + 1; i++) {
    rev_str = rev_str + str[str.length - i];
  }
  return rev_str;
}

reverseString("hello");




/* let x = "hello";
let y = "";
y = y + x[x.length - 1];
console.log(y);
y = y + x[x.length - 2];
console.log(y); */