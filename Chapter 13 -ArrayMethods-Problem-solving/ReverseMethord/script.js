// Reverse Methord

//? Qs: 1 :  একটা names array দিয়ে নামগুলো reverse করে দেখ: const names = ['Zara', 'Tariq', 'Amir', 'Lina'];
// Ans:
const names = ['Zara', 'Tariq', 'Amir', 'Lina'];
const namesReverse = names.reverse();
console.log(namesReverse);

//? Qs: 2 :  numbers-4 array দিয়েও reverse : const numbers = [1, 4, 9, 7];
// Ans:
const numbers = [1, 4, 9, 7];
const numbersReverse = numbers.reverse();
console.log(numbersReverse);

//? Qs: 3 : akupem a reverse : const users = [{name: 'Ali', age: 30}, {name: 'Sara', age: 25}, {name: 'Tariq', age: 35}];
// Ans:

const users = [
  { name: 'Ali', age: 30 },
  { name: 'Sara', age: 25 },
  { name: 'Tariq', age: 35 },
];
const userReverse = users.reverse();
console.log(userReverse);

/*

⚠️ খুব গুরুত্বপূর্ণ কথা (Interview + Real Project)

reverse() original array বদলে দেয় (mutable)।

মানে:

namesReverse === names // true
numbersReverse === numbers // true
users === userReverse // true



👉 যদি তুমি original array ঠিক রাখতে চাও, তাহলে এভাবে করো:

✅ Safe way (Best Practice)
const namesReverse = [...names].reverse();
const numbersReverse = [...numbers].reverse();
const userReverse = [...users].reverse();

*/
