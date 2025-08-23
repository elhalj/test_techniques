//Essaie
const countVowels = (str) => {
  const vowels = ["a", "o", "i", "e", "u"];
  const strTable = str.split(" ");
  const newTable = [];
  for (let i = 0; i < vowels.length; i++) {
    if (strTable.includes(vowels[i])) {
      newTable.push(i);
    }

    i++;
  }
  return newTable.length;
};

console.log(countVowels("hello"));

//Version corrigé

// function countVowels(str) {
//   const vowels = ["a", "o", "i", "e", "u"];
//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels("hello"));

// Version avec filter
// const countVowels = (str) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   return str
//     .toLowerCase()
//     .split("")
//     .filter(char => vowels.includes(char))
//     .length;
// };

// console.log(countVowels("hello"));      // 2
// console.log(countVowels("ReactJS"));    // 2
// console.log(countVowels("OpenAI GPT")); // 4
