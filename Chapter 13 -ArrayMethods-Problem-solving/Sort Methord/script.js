// Sort methord

//? Qs: 1 : অ্যারেটাকে ছোট থেকে বড় সাজিয়ে দে: const numbers = [50, 12, 25, 8, 15];
// Ans:
const numbers = [50, 12, 25, 8, 15];
const smallToLarge = numbers.sort((a, b) => a - b);
console.log(smallToLarge);

//? Qs: 2 :একটা array numbers = [13, 2, 45, 9, 6]; ব্যবহার করে descending order-এ sort কর।
// Ans:
const number = [13, 2, 45, 9, 6];
const result = number.sort((a, b) => b - a);
console.log(result);

//? Qs: 3 :  বন্ধুদের age অনুযায়ী sorting করে দেখ: const friends = [{name: 'Ali', age: 29}, {name: 'Sara', age: 22}, {name: 'Tariq', age: 35}];
// Ans:
const friends = [
  { name: 'Ali', age: 29 },
  { name: 'Sara', age: 22 },
  { name: 'Tariq', age: 35 },
];

const sorting = friends.sort((a, b) => a.age - b.age);
console.log(sorting);

//? Qs: 4 :  একটা নামের array দিয়ে প্রতিটি নামকে alphabetically সাজিয়ে দেখাও: const names = ['nabil', 'zubayer', 'sarwar', 'delwar'];
// Ans:

const names = ['nabil', 'zubayer', 'sarwar', 'delwar'];
const alphabetically = names.sort();
console.log(alphabetically);
