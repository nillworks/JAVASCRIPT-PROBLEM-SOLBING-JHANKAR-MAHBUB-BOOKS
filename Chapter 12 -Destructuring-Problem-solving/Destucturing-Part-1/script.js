// Destucturing Part 1

//? Qs: 1: অবজেক্ট থেকে brand প্রোপার্টি আলাদা কর। const product = { name: "Laptop", price: 50000, brand: "Dell" };
// Ans:
const product = { name: 'laptop', price: 50000, brand: 'Dell' };
const { brand } = product;
console.log(brand);

//? Qs: 2: Item অবজেক্ট থেকে phone এবং price প্রোপার্টি ডিস্ট্রাকচারিং কর। const item = { name: "Mobile", price: 20000, phone: "Samsung" }

// Ans:
const item = { name: 'Mobile', price: 20000, phone: 'samsung' };
const { price, phone } = item;
console.log(price, phone);

//? Qs: 3: আরে থেকে প্রথম দুইটা উপাদান বের কর। const colors = ["red", "blue", "green", "yellow"];
// Ans:
const color = ['red', 'blue', 'green', 'yellow'];
const [frists, seconds] = color;
console.log(frists, seconds);

//? Qs: 4: তিনটি সংখ্যার একটি আরে থেকে destructuring করে সেকেন্ড সংখ্যাটি আলাদা করে second নামক ভেরিয়েবলে রাখ।
// Ans:

const arrNumbers = [1.2, 223, 23, 23];
const [, second] = arrNumbers;
console.log(second);

//? Qs: 5:আরের প্রথম এবং শেষ উপাদানকে destructuring করে two এবং eight নামের ভেরিয়েবলে রাখ। const digits = [2, 4, 6, 8]
// Ans:
const digits = [2, 4, 6, 8];
const [two, , , eight] = digits;
console.log(two, eight);
console.log(eight);

//? Qs: 6: ফাংশন রিটার্ন থেকে ডিস্ট্রাকচারিং করে প্রথম এবং দ্বিতীয় ভ্যালু আলাদা কর। function multiply(a, b) { return [a * 3, b * 3]; }
// Ans:
const multiply = (a, b) => {
  return [a * 3, b * 3];
};

const [frist, secounds] = multiply(3, 5);
console.log(frist, secounds);

//? Qs: 7:person অবজেক্ট থেকে name এবং city আলাদা কর। আর phone না থাকলে ডিফল্ট ভ্যালু N/A সেট কর। const person = { name: "Rahim", city: "Dhaka" }
// Ans:

const person = { name: 'Rahim', city: 'Dhaka' };
const { name, city, phones = 'N/A' } = person;

console.log(name);
console.log(city);
console.log(phones);

//? Qs: 8:teacher অবজেক্ট থেকে name এবং profession- এর ভ্যালু বের কর, যেখানে profession- এর নাম alias হিসেবে job রাখ। const teacher = {name: "Maria", profession: "Teacher"}
// Ans:
const teacher = { name: 'Maria', profession: 'teacher' };
const { name: teacherName, profession: alias } = teacher;
console.log(teacherName);
console.log(alias);
