/*
 * Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

 */
function truncateString(str, num) {
  let strarr = str.split(" ");
  if (strarr.length >= num) {
    for (let i = strarr.length - num; i > 0; i--) {
      strarr.pop();
    }
    let shortstring = strarr.join(" ") + "...";
    return shortstring;

  }
  else {
    let longstring = strarr.join(" ");
    return longstring;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
// OBS
// Code above goes beyond what was asked.
// It should have counted each char, not each word.
// I think I did something more difficult
