function reverseWord(word) {
  const splitWord = word.split(" ");
  console.log(splitWord);
  const reverse = splitWord.reverse();
  console.log(reverse);
  return reverse.join(" ");
}

console.log(reverseWord("Hello World from React"));

//Version corrigé :
// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ");
// }

// console.log(reverseWords("Hello World from React"));
// "React from World Hello"

//Version hors reverse():
// function reverseWordsLoop(str) {
//   const words = str.split(" "); // ["Hello", "World", "from", "React"]
//   const reversed = [];

// On parcourt le tableau de fin vers le début
//   for (let i = words.length - 1; i >= 0; i--) {
//     reversed.push(words[i]);
//   }

//   return reversed.join(" ");
// }

// console.log(reverseWordsLoop("Hello World from React"));
// "React from World Hello"
