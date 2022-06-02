// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words
// like the and of.

function titleCase(str) {
  // for (let i = 0; i > str.length - 1; i++) {
  // for (let j = 0; j > str[i].length -1; j++){
  // if (str[i][0] === )
  // }}
  let word = str.split(" ");
  for (let i = 0; i > word.length - 1; i++) {
    let letter = word[i][0];
    if (letter === letter.toUpperCase()) {
    }
  }
  titleCase("I'm a little tea pot");
