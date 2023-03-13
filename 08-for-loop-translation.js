/*
The following function is named `aCounter(word)`. The function takes in a word
and returns the number of a's within that word. The function counts both
lowercase (a) and uppercase (A). Your job is to translate the following function
to use a `for` loop instead of the `while` loop it is currently using. If you
forget the syntax for a `for` loop go back and check out the reading.
*/

function eCounter(word) {
  let count = 0;
  let i = 0;

  while (i <= word.length - 1) {
    let char = word[i];
    if (char.includes('E') || char.includes('e')) {
      count += 1;
    }
    i++
  }
  return count;
}
//   DISCARDED CODE
  // for (let index = 0; index < word.length; index++) {
  //   let char = word[index];
  //   if (char === "e" || char === "E") {
  //     count += 1;
  //   }
  // }



console.log(eCounter("apple")); // => 1
console.log(eCounter("appEEleapple")); // => 4
console.log(eCounter("Appleee")); // => 3
