/*Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  let lowered = str.toLowerCase();
  let word = lowered.split(" ")
  let capword = [];

  for (let i = 0; i < word.length; i++) {
    capword.push(word[i][0].toUpperCase() + word[i].slice(1));
  }
  return capword.join(" ");
}
titleCase("I'm a liTTle tea pot");
