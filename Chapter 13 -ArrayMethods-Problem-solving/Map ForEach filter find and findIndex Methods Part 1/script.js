// Array And ForEach Methods

//? QS: 1 : একটা স্ন্যাক্সের দোকানে বিভিন্ন আইটেম আছে, যেগুলার দাম এভাবে আছে: [30, 45, 20, 60, 10]। তুই সবগুলা আইটেমের দাম 13 টাকা করে বাড়াইতে চাস। এই কাজটা map দিয়ে করে দেখ।
// Ans:
const shopPrice = [30, 45, 20, 60, 10];
const morePrice = shopPrice.map(more13 => more13 + 13);
console.log(morePrice);

//? QS: 2 :ধর, তোর একটা নামের লিস্ট আছে [ 'Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo']। তুই চাস, লিস্ট থেকে 5 অক্ষরের বেশি যাদের নাম, শুধু তাদেরকে একটা আলাদা লিস্টে রাখবি। filter দিয়ে করে দেখ কীভাবে হবে।
// Ans:
const players = ['Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo'];
const letters5 = players.filter(name => name.length > 5);
console.log(letters5);

//? QS: 3 :তোর একটা number লিস্ট আছে [10, 15, 20, 25, 30, 35]। তুই এমন একটা প্রোগ্রাম লিখে দেখ, যা 20-এর ওপরে প্রথম যে সংখ্যাটা আছে, সেটা খুঁজে বের করে দিবে।
// Ans:
const number = [10, 15, 20, 25, 30, 35];
const moreNumber = number.find(num => num > 20);
console.log(moreNumber);

//? QS: 4 :তোর কিছু হাইটের ডেটা আছে, যেমন: [65, 70, 68, 72, 68, 73]। 69 ইঞ্চির বেশি লম্বা যাদের হাইট আছে, তাদের শুধু খুঁজে বের কর filter দিয়ে।
// Ans:
const hight = [65, 70, 68, 72, 68, 73];
const hightMoreNumber = hight.filter(n => n > 69);
console.log(hightMoreNumber);

//? QS: 5 : তোর কাছে কিছু সংখ্যা আছে: [7, 10, 15, 20, 25, 30]। তুই চাস প্রত্যেক সংখ্যা 3 দিয়ে ভাগ করলে কত হয়, সেটা এক এক করে দেখতে। map প্রোগ্রাম লিখ। ইউজ করে
// Ans:
const num = [7, 10, 15, 20, 25, 30];
const division = num.map(n => n / 3);
console.log(division);

//? QS: 6 :তোর বন্ধুদের নামের লিস্ট আবারও আছে [ 'Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp']। থার্ড অক্ষর বের করতে চাস প্রত্যেক বন্ধুর নামে। map দিয়ে কাজটা করে ফেল।
// Ans:
const frindsList = [
  'leonardo',
  'Brad Pitt',
  'Kate',
  'Winslet',
  'Audrey Hepburn',
  'Johnny Depp',
];

const leterTherdLetter = frindsList.map(name => name[3]);
console.log(leterTherdLetter);

//? QS: 7 :ধর, তুই একটা নামের array নিয়া আছিস: ['Tom', 'Harry', 'Sam', 'Jack']। এখন এমন নাম খুঁজে বের কর, যা 'H' দিয়া শুরু হয়। find ইউজ কর।
// Ans:
const array = ['Tom', 'Harry', 'Sam', 'Jack'];
const startLetter = array.find(name => name.startsWith('H'));
console.log(startLetter);

//? QS: 8 :তুই একটা array [1, 2, 3, 4, 5] নিয়া বসে আছিস। তুই একটা ফাংশন লিখ, যা forEach ইউজ করে প্রতিটা সংখ্যা console-এ প্রিন্ট করে।
// Ans:
const arr = [1, 2, 3, 4, 5];
const printConsole = arr.forEach(num => console.log(num));

//? QS: 9 : ['cow', 'goat', 'sheep', 'horse'] এই অ্যারে থেকে প্রতিটা নাম forEach দিয়ে console-এ প্রিন্ট কর।
// Ans:
const names = ['cow', 'goat', 'sheep', 'horse'];
const nameConsolePrint = names.forEach(name => console.log(name));

//* Extra Problems  Array Methods.

/*
const doubleAll = numbers => {
  let double = [];

  for (const num of numbers) {
    const value = num * 2;
    double.push(value);
  }

  return double;
};
const arr = [23, 34, 45, 57, 6, 77];
const result = doubleAll(arr);
console.log(result);

// map korly kotto esey
const doubleNumber = arr.map(num => num * 2);
console.log(doubleNumber);

const frinds = ['SHIPON ROY', 'Tom'];
const frindsTolocaleLowerCase = frinds.map(frind => frind.toLocaleLowerCase());
const fristFrindLetter = frinds.map(letter => letter[0]);
console.log(fristFrindLetter);
console.log(frindsTolocaleLowerCase);

// ForEach

const number = [23, 25, 34, 456, 345];
const results = number.forEach(num => console.log(num)); //! এখন, এই জায়গায় যদি আমরা map ব্যবহার করতাম, তাহলে সে প্রতিটা উপাদানের ওপর গিয়া কিছু একটা কাজ করত এবং রেজাল্টটা return করত। আর forEach কী করে? forEach প্রত্যেকটা উপাদানের ওপর কাজ করে, কিন্তু কিছু return করে না।  সোজা কথায়, map প্রতিটা উপাদানের ওপর গিয়া কাজ করে এবং সেটারে return করে দেয়। কিন্তু forEach কাজ করলেও কিছু return করে না। এটাই তাদের মধ্যে পার্থক্য।
console.log(results);

// Filter:
// *এখন filter দিয়ে কী করবি? filter দিয়া কিছু জিনিস বাছাই করবি। অনেকটা ছাকনির মতো। কিছু জিনিস ছাকনিতে আটকে যায়। যেমন, চা পাতা আটকে যায়, আর চা নিচে পড়ে যায়। এ রকম কিছু জিনিস বের করার ছাকনিই হচ্ছে filter মেথড। ধর, আমাদের কাছে কিছু খেলোয়াড়ের উচ্চতার অ্যারে আছে। আমরা 70 ইঞ্চির ওপরে যারা আছে, তাদেরকে বাস্কেটবল খেলার জন্য বাছাই করতে চাই।

const players = [75, 3, 3, 45, 56, 43, 45, 56, 6, 76, 78];
const selected = players.filter(age => age > 70);
console.log(selected);

const frindsMy = ['promit', 'joy', 'nill', 'shovo', 'shipon'];
const frindsMyLength = frindsMy.filter(strnglength => strnglength.length > 4);
console.log(frindsMyLength);

// Find
// Find frist value return kory.
const findsName = frindsMy.find(num => num > 'nill');
console.log(findsName);

// FindIndex

const frindIndexs = number.findIndex(i => i > 345);
console.log(frindIndexs);

const students = [
  { name: 'john', age: 20 },
  { name: 'shipon', age: 18 },
  { name: 'nill', age: 14 },
  { name: 'Lucy', age: 18 },
];
const studentsInfu = students.map((names, num, arr) => {
  const infu = `FullName: ${names.name} of index: ${num + 1} arr: ${
    arr.length
  } `;
  return infu;
});

console.log(studentsInfu);

*/

// Map solve problems
/*

const arr = [3, 7, 12, 20];
const double = arr.map(num => num * 2);
console.log(double);

const arr2 = [5, 10, 15, 20];
const arrIndex = arr2.map((num, i) => num + i);
console.log(arrIndex);

const fruits = ['apple', 'orange', 'grape'];
const uperCaseString = fruits.map(name => name.toLocaleUpperCase());
console.log(uperCaseString);

const products = [
  { name: 'Phone', price: 1000 },
  { name: 'Laptop', price: 2000 },
];

const newArr = products.map(
  (n, i, a) => `Price: ${n.price} Index: ${i}  newArr: ${a.length}`
);
console.log(newArr);

const numbers = [1, 2, 3, 4, 5];

const evenOrOdd = numbers.map(num => {
  if (num % 2 === 0) {
    return num * 2;
  } else if (num % 2 === 1) {
    return num * 3;
  }
});

console.log(evenOrOdd);

*/

/*

// filter solve problems

const numbers = [10, 5, 20, 3, 17, 2];
const evenNamber = numbers.filter(even => even % 2 === 0);
console.log(evenNamber);

const ages = [12, 18, 25, 14, 30, 16];
const adults = ages.filter(age => age > 18);
console.log(adults);

const names = ['rahim', 'karim', 'jamal', 'samad', 'aisha'];
const nameFilter = names.filter(string => string.startsWith('a'));
console.log(nameFilter);

const products = [
  { name: 'phone', price: 1500 },
  { name: 'laptop', price: 4500 },
  { name: 'mouse', price: 300 },
  { name: 'keyboard', price: 700 },
];

const productsFilter = products.filter(name => name.price > 1000);
console.log(productsFilter);

const scores = [40, 55, 65, 75, 85, 92];
const scoresFilter = scores.filter(num => num > 60);

console.log(scoresFilter);

*/

/*


// forEach

const numbers = [5, 10, 15, 20];
const num = numbers.forEach(num => console.log(num));

const fruits = ['apple', 'mango', 'banana'];
const fruitsForEach = fruits.forEach((name, index) => {
  const input = `Index: ${index} Value: ${name}`;
  console.log(input);
});

let emtyArr = [];
const nums = [2, 4, 6, 8];

const pushEmtyArr = nums.forEach(n => {
  const dobule = n * 2;
  console.log(n);
  return emtyArr.push(dobule);
});

console.log(emtyArr);

const products = [
  { name: 'Phone', price: 1500 },
  { name: 'Laptop', price: 3000 },
  { name: 'Mouse', price: 300 },
];

const value = products.forEach(name => console.log(name.name));

const letters = ['a', 'b', 'c', 'd'];
const lett = letters.forEach((lett, index) => {
  const input = `Letter: ${lett} Position: ${index}`;
  console.log(input);
});



*/

/*

// Find mathord

const numbers = [12, 5, 18, 7, 25];
const numbersFind = numbers.find(n => n > 10);
console.log(numbersFind);

const names = ['rahim', 'karim', 'jamal', 'samad'];
const nameLetter = names.find(n => n.startsWith('j'));
console.log(nameLetter);

const products = [
  { name: 'phone', price: 1500 },
  { name: 'laptop', price: 4500 },
  { name: 'mouse', price: 300 },
];
const moreFist = products.find(n => n.price > 1000);
console.log(moreFist);

const ages = [14, 16, 18, 22, 30];
const adults = ages.find(n => n >= 18);
console.log(adults);

const users = [
  { id: 1, name: 'Nill' },
  { id: 2, name: 'Ray' },
  { id: 3, name: 'Akash' },
];
const usersFind = users.find(n => n.id >= 2);
console.log(usersFind);


*/
