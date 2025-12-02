// Practice Pat 1 loop

//? Qs:1 : তুমি ৫টা পছন্দের সাবজেক্টের নাম লেখ। তারপর প্রোগ্রাম লিখে দেখ, কীভাবে লুপ ব্যবহার করে সব সাবজেক্টের নাম আলাদাভাবে প্রিন্ট হবে।
// Ans:
const subjects = [
  'Bangla',
  'English',
  'Math',
  'ICT',
  'Accounting',
  'Programming',
];
for (const subject of subjects) {
  console.log(subject);
}

//? Qs:2 :তোমার একাধিক পছন্দের খাবার গুলোর নাম লেখ। এখন লুপ ব্যবহার করে প্রোগ্রাম লিখে দেখ, কীভাবে সব খাবারের নাম আলাদা আলাদা করে প্রিন্ট হবে।
// Ans:
const foods = ['Mango', 'Banana', 'Orange', 'Chicken', 'Rice'];
for (const food of foods) {
  console.log(food);
}

//? Qs:3 :একটা অ্যারের মধ্যে তোমার ফ্যামিলি মেম্বারদের জন্মসাল লিখে ফেল। তারপর লুপ চালিয়ে সবার জন্মসাল আউটপুট হিসেবে দেখাও।
// Ans:
const birthYears = [2008, 1983, 1990, 1940];
for (const year of birthYears) {
  console.log(year);
}

//? Qs:4 : ক্রিকেট বা ফুটবল খেলায় তোমার পছন্দের একাধিকের একটা টিম বানিয়ে তোমার প্রিয় খেলোয়াড়দের নাম একটা অ্যারের মধ্যে রাখো। তারপর কনসোল লগ করে সব খেলোয়াড়দের নাম আউটপুট হিসেবে দেখাও।
// Ans:
const teamPlayers = ['Shipon', 'Promit', 'Bola', 'Joy'];
for (const player of teamPlayers) {
  console.log(player);
}

//? Qs:5 :তোমার কাছে কত করে কত পরীক্ষা আছে, সেই তথ্যগুলো অ্যারের মধ্যে লিখে ফেল। তারপর লুপ ব্যবহার করে পরীক্ষার তথ্যগুলো কনসোল লগ কর।
// Ans:
const exams = ['Bangla: 9 AM', 'English: 10 AM', 'ICT: 11 AM'];
for (const exam of exams) {
  console.log(exam);
}
