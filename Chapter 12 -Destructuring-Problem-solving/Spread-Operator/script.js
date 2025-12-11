// Spread Operator

//? Qs: 1 : নতুন একটা অ্যারে বানাও, যেখানে প্রথম উপাদান হবে "variable", তারপরে উপাদানগুলো আসবে const technologies = ["Condition", "array", "loop"], আরকে Spread Operator দিয়ে কপি করবে।
// Ans:
const technologies = ['condition', 'array', 'lopp'];
const array = ['variable'];
const newArray = [...array, ...technologies];
console.log(newArray);

//? Qs: 2 :myFruits নামে নতুন একটা অ্যারে তৈরি করো, যেখানে const fruits = ["Apple", "Banana", "Mango"], এই অ্যারের উপাদানগুলো থাকবে আর শেষে papaya, orange থাকবে।
// Ans:
const fruits = ['Apple', 'Banana', 'Mango'];
const myFruits = [...fruits, 'papaya', 'orange'];
console.log(myFruits);

//? Qs: 3 :তিনটা অ্যারে আছে const frontEnd = ["JavaScript"], const backEnd = ["Node.js"], const database = ["MongoDB"], এগুলোকে Spread Operator দিয়ে একসাথে একত্রিত করো।
// Ans:
const frontEnd = ['javascript'];
const backEnd = ['Node.js'];
const database = ['MongoDB'];

const programing = [...frontEnd, ...backEnd, ...database];
console.log(programing);

//? Qs: 4 :const website = { name: "MySite", type: "e-commerce", status: "active" } এই অবজেক্টে নতুন প্রোপার্টি theme: "dark" যোগ করে নতুন অবজেক্ট তৈরি করো বাকি প্রো কুটি।
// Ans:
const website = { name: 'MySite', type: 'E-commerce', status: 'Active' };
const newObject = { ...website, theme: 'dark' };
console.log(newObject);

//? Qs: 5 :const young = { name: "Arif", age: 30, country: "B Baria" } এই অবজেক্টের একটি কপি তৈরি করো এবং country বাদে বাকি সব প্রোপার্টি নতুন অবজেক্টে রেখে ফিরো।
// Ans:
const young = { name: 'Arif', age: 30, country: 'B Baria' };
const { country, ...updatedYoung } = young;
console.log(updatedYoung);

//? Qs: 6 :const car = { make: "Toyota", model: "Corolla", year: 2020 } এই অবজেক্টের একটি কপি তৈরি করো এবং year আপডেট করে 2032 করে নতুন অবজেক্ট তৈরি করো।
// Ans:
const car = { make: 'Toyota', model: 'Corolla', year: 2020 };
const copyCar = { ...car, year: 2032 };
console.log(copyCar);

// Extra Problems.
const max = Math.max(34, 34, 34, 4, 545, 5);
console.log(max);

const Array = [34, 45, 5, 6, 6, 78];
const maxArray = Math.max(...Array);
console.log(maxArray);

const frinds = ['shipon roy', 'likhon roy'];
