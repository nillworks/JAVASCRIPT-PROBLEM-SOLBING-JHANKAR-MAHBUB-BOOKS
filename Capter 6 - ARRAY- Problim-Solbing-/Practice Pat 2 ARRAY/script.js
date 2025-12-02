// Practice Pat 2 ARRAY

//? Qs 1 :তুই তোর সব বন্ধুদের নাম একটা অ্যারেতে রাখলি। এখন তুই বের কর, 3 নম্বর ইনডেক্সে কে আছে।
// Ans
const friendsName = ['shipon', 'Joy', 'promit', 'shovo'];
console.log(friendsName[3]);

//? Qs 2 :তোর 7টা প্রিয় বইয়ের নাম একটা অ্যারেতে রাখ। তারপর দেখ, 5 নম্বর পজিশনের বইয়ের নাম কী।
// Ans
const booksName = [
  'bangla',
  'English',
  'Math',
  'Ict',
  'Accounting',
  'Javascript',
  'Java',
  'Html',
];
console.log(booksName[5]);

//? Qs 3 :তুই একটা অ্যারে বানালি, যেখানে 1 থেকে 10 পর্যন্ত সংখ্যাগুলো রাখলি। এখন 7 নম্বর পজিশনের মানকে 30 দিয়ে আপডেট কর।
// Ans
const num = [3, 34, 2, 3, 24, 5, 35, 45, 55, 54, 45];
const numNew = (num[7] = 100);
console.log(num);

//? Qs 4 :তোর মোবাইলে কিছু গেম আছে এবং তুই সেগুলো একটা অ্যারেতে রাখলি — 'ফ্রি ফায়ার', 'পাবজি', 'ক্যান্ডি ক্রাশ', 'টেম্পল রান'। এখন তুই চাস, 2 নম্বর ইনডেক্সের গেমটা পরিবর্তন করে সেখানে 'সাবওয়ে সার্ফার' রাখবি। একটা প্রোগ্রাম লিখে সেটাই কর।
// Ans

const gameName = ['free fire', 'bick Game', 'pubg', 'not'];
const gameNChange = (gameName[2] = 'free fire');
console.log(gameName);

//? Qs 5 :তোর পরিবারের সদস্যদের নাম একটা অ্যারেতে রাখ। তারপর সেই পরিবারের সদস্যদের নাম আউটপুট হিসেবে দেখ।
// Ans

const familyName = [
  'Shipon Roy',
  'Likhon Roy',
  'Jointy Roy',
  'Sapan Kumar Roy',
];

console.log(familyName[2]);

//? Qs 6 :তুই মাপ করলি 7টা দেশ ঘুরবি। দেশগুলোর নাম একটা অ্যারেতে রাখ। তারপর 4 নম্বর পজিশনের দেশের নাম বের কর।
// Ans

const contryName = [
  'Bangladash',
  'Napal',
  'Pakthan',
  'Inda',
  'Votan',
  'Amirika',
];

console.log(contryName[4]);

//? Qs 7 :তোর পড়ার টেবিলে 4টা জিনিস আছে। সেগুলোর নাম একটা অ্যারেতে রাখ। তারপর 2 নম্বর পজিশনের জিনিসটি কী, সেটি বের কর।
// Ans

const NameNo = [
  'pincil',
  'Monitor',
  'Ram',
  'SSD',
  'CAC',
  'RGB PHIN',
  'phone',
  'Books',
  'Scil',
];

console.log(NameNo[2]);
