// Reduce Methods

//? Qs: 1 :  তোর কাছে একটা array আছে: [5, 10, 15, 20, 25]। তুই একটা প্রোগ্রাম লিখে দেখ, সব সংখ্যার যোগফল কত হয় reduce দিয়ে।
// Ans:
const number = [5, 10, 15, 20, 25];
const sumNumber = number.reduce((acc, current) => acc + current, 0);
console.log(sumNumber);

//? Qs: 2 : তুই একটা দোকানের মালিক। তোর পণ্যগুলা: [{name: 'shampoo', price: 100}, {name: 'soap', price: 50}, {name: 'toothpaste', price: 75}]। সব পণ্যের মোট দাম বের কর reduce ব্যবহার করে।
// Ans:
const product = [
  { name: 'shampoo', price: 100 },
  { name: 'soap', price: 50 },
  { name: 'toothpaste', price: 75 },
];
const totalPrice = product.reduce((acc, p) => acc + p.price, 0);
console.log(totalPrice);

//? Qs: 3 : ধর, তুই একটা product-এর list বানাইছিস: [{name: 'Pen', price: 5}, {name : 'Book', price : 50}, {name : 'Bag', price : 100}]। এবার সব পণ্যের দাম যোগ কর reduce দিয়ে।
// Ans:
const productList = [
  { name: 'Pen', price: 5 },
  { name: 'Book', price: 50 },
  { name: 'Bag', price: 100 },
];
const total = productList.reduce((acc, p) => acc + p.price, 0);
console.log(total);

//? Qs: 4 : reduce দিয়ে [ 1, 2, 3, 4, 5] সব সংখ্যার গুণফল বের কর।
// Ans:
const numbers = [1, 2, 3, 4, 5];
const multiplication = numbers.reduce((acc, n) => acc * n, 1);
console.log(multiplication);

//? Qs: 5 :[10, 20, 30, 40, 50] এই অ্যারে reduce ব্যবহার করে সর্বোচ্চ মান বের কর।
// Ans:
const num = [10, 20, 30, 40, 50];
const maxValue = num.reduce((max, n) => Math.max(max, n));
console.log(maxValue);

//? Qs: 6 :একটা অ্যারে বানা [ 100, 200, 300, 400]। reduce দিয়ে সব সংখ্যার যোগফল বের কর এবং ইনিশিয়াল ভ্যালু হিসেবে 50 ব্যবহার কর।
// Ans:

const numberIns = [100, 200, 300, 400];
const result = numberIns.reduce((acc, num) => acc + num, 50);
console.log(result);
