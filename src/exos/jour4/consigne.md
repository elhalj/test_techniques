**Test 1 – JavaScript**

Énoncé :
Écrire une fonction `flattenArray(arr)` qui prend un tableau potentiellement imbriqué et retourne un tableau plat (une seule dimension).

Exemple :

const input = [1, [2, [3, 4], 5], 6];
flattenArray(input);
// Résultat attendu : [1, 2, 3, 4, 5, 6]

⚠️ Règles :

Tu n’as pas le droit d’utiliser flat(Infinity).

Tu dois gérer n’importe quel niveau d’imbrication.

⏳ Temps recommandé : 15 minutes max

**Exercice 2 : Anagrammes**

👉 Écris une fonction isAnagram(str1, str2) qui retourne true si les deux chaînes sont des anagrammes, sinon false.

Exemple attendu :

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

⚠️ Règles :

Tu dois ignorer les majuscules/minuscules ("Listen" et "Silent" doivent matcher).

Tu dois ignorer les espaces ("rail safety" et "fairy tales" → true).

⏳ Temps recommandé : 15 minutes max

**Exercice 3**
Écris une fonction reverseWords(str) qui prend une phrase et inverse l’ordre des mots sans inverser les lettres.

Exemple attendu :

reverseWords("Hello World from React");
// "React from World Hello"

⏳ Temps recommandé : 15 minutes max

**Exercice 4 React – Mini Todo App**

⏳ Temps recommandé : 25–30 min

Objectif :

Créer une mini-app Todo avec les fonctionnalités suivantes :

Ajouter une tâche (input + bouton)

Supprimer une tâche

Marquer une tâche comme complétée / non complétée

Filtrer les tâches par "toutes", "complétées", "non complétées"

Bonus : sauvegarde dans localStorage

📝 Instructions

Découper en composants :

TodoProvider → Context + state global des todos

AddTodo → Formulaire d’ajout

TodoList → Affiche les todos filtrés

TodoItem → Chaque tâche avec bouton supprimer + checkbox

Utiliser useState ou useReducer

Pas besoin de style sophistiqué, juste fonctionnel
