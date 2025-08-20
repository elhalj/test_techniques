const flattenArray = (array) => {
  const newArray = [];
  const join = array.join();
  newArray.push(join);
  return newArray;
};
const input = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(input)); // resultat :[ '1,2,3,4,5,6' ]

// corrigé:
// (récursive)

// Voici une approche simple récursive :

// const flattenArray = (arr) => {
//   let result = [];

//   for (let el of arr) {
//     if (Array.isArray(el)) {
//       result = result.concat(flattenArray(el)); // appel récursif
//     } else {
//       result.push(el);
//     }
//   }

//   return result;
// };

// const input = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(input));
// [1, 2, 3, 4, 5, 6]

// Version moderne (reduce + recursion):
// const flattenArray = (arr) =>
//   arr.reduce((acc, val) =>
//     Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
//   );

// console.log(flattenArray([1, [2, [3, 4], 5], 6]));
// [1, 2, 3, 4, 5, 6]

// Ce que le recruteur évalue ici c'est :

// Est-ce que tu sais manipuler les tableaux en profondeur ?

// Est-ce que tu connais la récursivité (un must en JS) ?

// Ta capacité à éviter les pièges rapides (join, flat, etc.).
