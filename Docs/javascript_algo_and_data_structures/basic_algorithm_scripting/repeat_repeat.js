/*
Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  let multistring = "";
  if (num > 0) {
    for(let i = num; i > 0; i-- ){
      multistring = str + multistring
    }
  }
  return multistring;
}

repeatStringNumTimes("abc", 3);
