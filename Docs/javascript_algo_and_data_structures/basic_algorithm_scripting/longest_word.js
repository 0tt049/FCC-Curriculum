/*
* Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  let word = str.split(" ");
  let max_word = "";
  console.log(word);
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > max_word.length) {
      max_word = word[i];
    }
    else {
      max_word = max_word
    }
  }
  return max_word;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");