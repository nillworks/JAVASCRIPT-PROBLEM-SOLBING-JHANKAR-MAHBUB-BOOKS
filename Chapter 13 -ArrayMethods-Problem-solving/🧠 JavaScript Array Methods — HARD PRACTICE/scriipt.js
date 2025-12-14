// 🧠 JavaScript Array Methods — HARD PRACTICE (Part-1)

// 1 : ✅ Problem 1 একটা numbers array আছে।👉 সব সংখ্যাকে double করো 👉 তারপর শুধু 50-এর বেশি সংখ্যাগুলো রাখো।
const numbers = [23, 34, 45, 65, 67, 8, 6];
const highScore = numbers.map(n => n * 2).filter(high => high > 50);
console.log(highScore);

// 2: ✅ Problem 2 একটা ages array আছে । 👉 চেক করো সবাই 18+ কি না 👉 যদি না হয়, তাহলে প্রথম যেই age 18-এর কম, সেটা বের করো।
const age = [34, 12, 34, 12, 3, 15, 67];

const allAdult = age.every(a => a >= 18);

let firstUnder18 = null;
if (!allAdult) {
  firstUnder18 = age.find(a => a < 18);
}

console.log(allAdult);
console.log(firstUnder18);

// 3👉 সব product-এর price 10% বাড়াও 👉 তারপর 20,000-এর বেশি price যেগুলো, সেগুলো রাখো।

const product = [
  { name: 'Mobile', price: 12000 },
  { name: 'Laptop', price: 45000 },
  { name: 'Watch', price: 3000 },
];
const priceMore = product
  .map(p => ({
    ...p,
    price: p.price + (p.price / 100) * 10,
  }))
  .filter(p => p.price > 20000);
console.log(priceMore);

// 4
const nameArr = ['shipon roys', 'nillworks'];
const namelen = nameArr.map(nl => nl.length).some(num => num > 10);
console.log(namelen);

// 5
const nestedArr = [1, [2, 3], [4, [5, 6]]];
const arrayEven = nestedArr.flat(2).every(even => even % 2 === 0);
console.log(arrayEven);

// 6
const scores = [23, 3, 45, 6, 67, 78, 78];
const scoresFristNumber = scores.find(n => n < 33);
const findIndexs = scores.findIndex(n => n < 33);
console.log(scoresFristNumber);

// Extra Problems

const students = [
  { name: 'Rahim', marks: 35 },
  { name: 'Karim', marks: 42 },
  { name: 'Jamal', marks: 38 },
  { name: 'Jamal', marks: 22 },
];

const markMore = students
  .map(mrk => ({ ...mrk, marks: mrk.marks + 10 }))
  .filter(mrk => mrk.marks > 40);
console.log(markMore);

const products = [
  { name: 'TV', price: 30000 },
  { name: 'Phone', price: 12000 },
  { name: 'Headphone', price: 4000 },
];

const pdcPriceLow = products
  .map(pl => ({ ...pl, price: pl.price - (pl.price / 100) * 15 }))
  .filter(pl => pl.price > 10000);
console.log(pdcPriceLow);

const names = ['shipon roy', 'nill roy', 'Shovo Sarker', 'Sapan Kumer Roy'];
const nameLength = names.map(l => l.length).filter(num => num > 10);
console.log(nameLength);

const number = [1, [2, 3], [4, [5, 6]]];
const numEven = number.flat(2).filter(n => n % 2 === 0);
console.log(numEven);
//
