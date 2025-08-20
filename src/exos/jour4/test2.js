const annagramme = (str1, str2) => {
  const splitword1 = str1.split("");
  const splitword2 = str2.split("");
  const newArray = [];
  for (let el of splitword1) {
    for (let i = 0; i < splitword2.length; i++) {
      if (el === splitword2[i]) {
        newArray.push(el);
      } else {
        console.log("Is not an annagram");
      }
    }
    return el;
  }
  return newArray;
};

console.log(annagramme("silent", "listen")); // Is not an anagram code mal fait

// Correction :

// On peut vérifier un anagramme en triant les lettres des deux mots puis en les comparant.

// const isAnagram = (str1, str2) => {
//   const format = (str) =>
//     str.toLowerCase().replace(/\s/g, "").split("").sort().join("");

//   return format(str1) === format(str2);
// };

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("rail safety", "fairy tales")); // true
// console.log(isAnagram("hello", "world"));   // false

// 👉 Explication :

// toLowerCase() → ignorer majuscules/minuscules

// replace(/\s/g, "") → retirer les espaces

// split("") → transformer en tableau de lettres

// sort() → trier les lettres

// join("") → reformer la chaîne

// Ensuite on compare les deux résultats
