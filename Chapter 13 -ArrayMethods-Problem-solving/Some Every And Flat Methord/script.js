// Some Every and Flat Methord Aplly

//? Qs: 1 : একটা অ্যারে বানা, যেটার নাম numbers এবং দেখা, এই অ্যারেতে 100-এর বড় কোনো সংখ্যা আছে কি না।
// Ans:
const numbers = [20, 23, 34, 45, 6567];
const numUpTo100 = numbers.some(num => num >= 100);
console.log(numUpTo100);

//? Qs: 2 : একটা অ্যারে বানা, যেখানে সব এলিমেন্টের মান 5 দিয়ে ভাগ যায় কি না, তা চেক করার জন্য every মেথড ব্যবহার কর।
// Ans:
const number = [23, 34, 45, 56, 757];
const divisionNumber = number.every(division => division % 5 === 0);
console.log(divisionNumber);

//? Qs: 3 : words নামের একটা অ্যারে তৈরি কর এবং চেক কর, অন্তত একটি শব্দ "hello"-এর সমান কি না।
// Ans:
const words = ['hello', 'shipon'];
const wordsLength = words.some(n => n === 'hello');
console.log(wordsLength);

//? Qs: 4 : ages নামের একটা অ্যারে তৈরি কর এবং দেখা, সবার বয়স 18-এর বেশি কি না।
// Ans:
const age = [23, 3, 4, 56, 45];
const ageEcoal = age.every(a => a >= 18);
console.log(ageEcoal);

// Extra Problems

const scroes = [30, 45, 55, 80, 90];
const hasPassed = scroes.some(scroe => scroe >= 33);
console.log(hasPassed);

const allPassed = scroes.every(pass => pass >= 30);
console.log(allPassed);

const nested = [1, 2, [3, 4, [5, 6]]];
const flattened = nested.flat(2);
console.log(flattened);

// 🧠 JavaScript Array Methods — HARD PRACTICE (Part-1)

// 1

// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
