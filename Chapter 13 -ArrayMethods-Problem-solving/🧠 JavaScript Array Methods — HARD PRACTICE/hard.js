// Hard Problems

//? Qs: 1: একটা numbers array আছে। সব সংখ্যাকে square করো তারপর দেখো কোনো সংখ্যা 500-এর বেশি কি না
// Ans:
const numbers = [2, 30, 45, 56, 54];
const squareNumber = numbers.map(num => num * num).some(n => n > 500);
console.log(squareNumber);

//? Qs: 2: একটা ages array আছে । শুধু 18+ age গুলো রাখো তারপর দেখো সব age 21-এর বেশি কি না
// Ans:
const age = [18, 17, 10, 21, 22, 26];
const ageMore = age.filter(a => a >= 18).every(ae => ae > 21);
console.log(ageMore);

//? Qs: 3: একটা products array আছে: শুধু stock আছে এমন product রাখোতাদের name array বানাও.
// Ans:
const products = [
  { name: 'Mobile', price: 12000, stock: true },
  { name: 'Laptop', price: 55000, stock: false },
  { name: 'Watch', price: 3000, stock: true },
];

const productStock = products
  .filter(product => product.stock === true)
  .map(product => product.name);
console.log(productStock);

//? Qs: 4: একটা names array আছে। সব নামকে uppercase করো তারপর দেখো সব নামের length 5-এর বেশি কি না
// Ans:
const names = ['shipon Roy', 'Nill Roy', 'Lihon Roy'];
const result = names
  .map(name => name.toUpperCase())
  .every(nameLen => nameLen.length > 5);
console.log(result);

//? Qs: 5: একটা nested array আছে: array টা flatten করো তারপর প্রথম যেই number 40-এর বেশি, সেটা বের করো
// Ans:
const nestedArray = [10, [20, 30], [40, [50, 60]]];
const nested = nestedArray.flat(Infinity).find(num => num > 40);
console.log(nested);

//? Qs: 6: একটা prices array আছে। সব price-এর সাথে 15% VAT যোগ করো তারপর শুধু 1000-এর বেশি price গুলো রাখো
// Ans:
const prices = [23, 34, 45, 56, 67, 1220];
const everyPriceVat = prices
  .map(price => price + (price / 100) * 15)
  .filter(p => p > 1000);
console.log(everyPriceVat);

//? Qs: 7: চেক করো সব user verified কি না যদি না হয়, তাহলে প্রথম unverified user বের করো
// Ans:
const users = [
  { name: 'A', verified: true },
  { name: 'B', verified: false },
  { name: 'C', verified: true },
];

const verifiedChack = users.every(user => user.verified)
  ? null
  : users.find(i => !i.verified);
console.log(verifiedChack);

//? Qs: 8: একটা array আছে তারপর দেখো 'css' আছে কি না
// Ans:
const languse = ['js', ['html', ['css']], 'react'];
const chack = languse.flat(Infinity).filter(l => l.includes('css'));
console.log(chack);

//? Qs: 9: একটা students array আছে: একটা students array আছে: শুধু pass (>=33) students রাখো তারপর তাদের name array বানাও
// Ans:
const students = [
  { name: 'Rahim', marks: 78 },
  { name: 'Karim', marks: 32 },
  { name: 'Jamal', marks: 55 },
];

const passStudent = students
  .filter(mrk => mrk.marks >= 33)
  .map(nameArr => nameArr.name);

console.log(passStudent);
