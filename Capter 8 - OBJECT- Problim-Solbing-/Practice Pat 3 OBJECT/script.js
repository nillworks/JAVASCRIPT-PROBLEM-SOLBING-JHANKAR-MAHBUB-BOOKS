// Practice pat 3 OBJECT

//? QS:1 :বই নামে একটা অবজেক্ট বানিয়ে ফেল। সেটার মধ্যে বইয়ের নাম, লেখক, দাম ইত্যাদি থাকবে। তারপর অবজেক্টের সব প্রোপার্টি (keys) এবং সব ভ্যালু (values) কনসোলে লগ কর।
// Ans:
const books = {
  lakhok: 'janker mahabhok',
  bookName: 'javascript',
  price: 721,
  booksRevwoIs: 'goods',
};
const valuesOB = Object.values(books);
console.log(valuesOB);

//? QS:2 :এই অবজেক্টটিতে চেক কর, author প্রোপার্টি আছে কি না। const article = { title: "Learning JS", category: "Programming" };
// Ans:
const article = {
  title: 'Larning Js',
  category: 'Programming',
};
if ('author' in article) {
  console.log('author property available');
} else {
  console.log('author property not available');
}
//? QS:3 :তোমার ল্যাপটপ নামের একটা অবজেক্ট দেওয়া হলো— const laptop = { brand: "Dell", model: "Inspiron", price: 45000 }; এবার for...in লুপ চালিয়ে প্রতিটি প্রোপার্টি এবং তার মান কনসোলে লগ কর।
// Ans:
const laptop = {
  brand: 'Dell',
  model: 'Inspiron',
  price: 45000,
  ram: 32,
};
for (const key in laptop) {
  const element = laptop[key];
  console.log(`${key}: ${element}`);
}

//? QS:4 :একটা phone নামে অবজেক্ট আছে const phone = { brand: "Samsung", model: "Galaxy S21", price: 85000 }; এইটার জন্য Object.keys ব্যবহার করে for...of লুপ চালিয়ে প্রতিটি প্রোপার্টি এবং তার মান কনসোলে লগ কর।
// Ans:
const phone = {
  brand: 'samsung',
  model: 'Galaxy s21',
  price: 85000,
};
for (const keys of Object.keys(phone)) {
  const values2 = phone[keys];
  console.log(`${keys}:${values2}`);
}

//? QS:5 :একটা bike অবজেক্ট বানাও, যেখানে brand: "Hero", price: 120000, আর model: "Splendor" প্রোপার্টিগুলো থাকবে। Object.values() মেথড ব্যবহার করে সব ভ্যালুগুলোর বের কর।
// Ans:
const bike = {
  brand: 'Hero',
  price: 120000,
  model: 'splendor',
};
const obValuse = Object.values(bike);
console.log(obValuse);

//? QS:6 :const books = { book1 "Harry Potter", book2 "The Hobbit", book3 "Game of Thrones" }; এর ওপর লুপ চালিয়ে সব বইয়ের নাম কনসোলে লগ কর।
// Ans:
const books1 = {
  book1: 'Harry Potter',
  book2: 'The Hobbit',
  book3: 'Game of Thrones',
};
const valuesbooks = Object.values(books1);
console.log(valuesbooks);

//? QS:7 :সংখ্যাগুলোর একটি অবজেক্ট লিখো— const numbers = { a: 10, b: 20, c: 30, d: 40 }; এবার এই অবজেক্টের সব প্রোপার্টির ভ্যালুগুলোর যোগফল বের কর।
// Ans:
const numbers = { a: 10, b: 20, c: 30, d: 40 };
let sum = 0;
for (const keys in numbers) {
  const values = numbers[keys];
  sum += values;
}
console.log(`sum: ${sum}`);

//? QS:8 :একটা player অবজেক্ট বানাও, যেখানে name Messi, team Argentina, আর goals 91 থাকবে। Object.values ব্যবহার করে সব ভ্যালু বের কর।
// Ans:
const player = {
  name: 'messi',
  team: 'Argentina',
  goals: 91,
};
const values = Object.values(player);
console.log(`vluse is: ${values}`);

//? QS:9 :একটা building অবজেক্ট বানাও, যার থাকবে floors 10, address {street Main Road, city Dhaka}, আর type Commercial। এখন একটা for...in লুপ চালিয়ে সব প্রোপার্টি আর ভ্যালু প্রিন্ট কর।
// Ans:
const building = {
  floors: 10,
  type: 'commercial',
  address: {
    street: 'Main Road',
    city: 'Dhaka',
  },
};
for (const key in building) {
  const element = building[key];
  console.log(element);
}
// exta solbes
/*
const numbers = { a: 10, b: 20, c: 30, d: 40 };
let sum = 0;
for (const keys in numbers) {
  const values = numbers[keys];
  if (values % 20 === 0) {
    sum += values;
  }
}
console.log(`sum: ${sum}`);

*/
