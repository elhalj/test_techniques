const isPallindrome = (str) => {
  const reverse = str.split("").reverse().join("");
  return str === reverse;
};

console.log(isPallindrome("hello"));

// Version améliorée
// const isPalindrome = (str) => {
//   const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reverse = clean.split("").reverse().join("");
//   return clean === reverse;
// };

// console.log(isPalindrome("kayak"));                // true
// console.log(isPalindrome("Level"));                // true
// console.log(isPalindrome("A man a plan a canal Panama")); // true
// console.log(isPalindrome("hello"));     // false
