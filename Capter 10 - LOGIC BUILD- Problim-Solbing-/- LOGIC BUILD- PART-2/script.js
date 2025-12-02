// LOGIC BUILD- PART-2

//? Qs: 1:একটি function লিখ, যেটা একটি income amount প্যারামিটার হিসেবে নেবে এবং কোন tax bracket-এ পড়ে সেটা রিটার্ন করবে। ইনকাম যদি ≤ 50,000-এর মধ্যে হয়, তাহলে 10 রিটার্ন করবে। ইনকাম 50,001–100,000-এর মধ্যে হলে 20 রিটার্ন হবে। আবার 100,001–200,000-এর মধ্যে হলে 30, আর $200,000 ওপর হলে 40 রিটার্ন ট্যাক্স হবে। ফাংশন থেকে শুধু সংখ্যাটা রিটার্ন করবে। কোনো পারসেন্টেজ চিহ্ন রিটার্ন করবে না।
// Ans:

function incomeTax(amount) {
  let taxBracket = 0;
  if (amount <= 50000) {
    taxBracket = 10;
  } else if (amount <= 100000) {
    taxBracket = 20;
  } else if (amount <= 200000) {
    taxBracket = 30;
  } else {
    taxBracket = 40;
  }
  return taxBracket;
}
const income = 100001;
const incomeTaxResult = incomeTax(income);
console.log(incomeTaxResult);

//? Qs: 2: একটি প্যাকেজ ডেলিভারির খরচ হিসাব কর। যেখানে 10kg-এর কম হলে 100 টাকা। আর 20kg-এর কম হলে 300 টাকা। 50 kg-এর কম হলে 1000 টাকা। আর তার বেশি হলে কেজিপ্রতি 100 টাকা করে খরচ হিসাব হবে।
// Ans:

function packageDelivere(kg) {
  let taka = 0;
  if (kg < 10) {
    taka = 100;
  } else if (kg < 20) {
    taka = 300;
  } else if (kg < 50) {
    taka = 1000;
  } else {
    taka = kg * 100;
  }
  return taka;
}
const weight = 20;
const pDResult = packageDelivere(weight);
console.log(pDResult);

//? Qs: 3:একটি function বানাও, যেটা marks input নেবে এবং নম্বর 80 বা তার ওপর হলে A, 70 থেকে 79 হলে B, 60 থেকে 69-এর মধ্যে হলে C, 50 থেকে 59-এর হলে D, আর 50-এর নিচে হলে F grade return করবে।
// Ans:

function marksCalculetor(mk) {
  if (mk >= 80) return 'A';
  if (mk >= 70) return 'B';
  if (mk >= 60) return 'C';
  if (mk >= 50) return 'D';
  return 'F';
}
const marks = 59;
const mksRusult = marksCalculetor(marks);
console.log(mksRusult);

//? Qs: 4:একটি ফাংশন লিখ, যেটা প্যারামিটার হিসেবে একটি অ্যারে নেবে যার মধ্যে অনেকগুলো বছর থাকবে। তারপর সেই অ্যারে মধ্যে যতগুলো লিপ ইয়ার আছে সেটি কাউন্ট করবে। ফাইনালি মোট কতটা লিপইয়ার রয়েছে সেই সংখ্যাটা রিটার্ন করবে।
// Ans:

function leapYearsCalcouletor(lpy) {
  let counter = 0;
  for (const year of lpy) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      counter++;
    }
  }
  return counter;
}

const arr = [2020, 2021, 2022, 2023, 2024, 2025];
const lpYerResult = leapYearsCalcouletor(arr);
console.log(lpYerResult);
// Exta Problem.

let year = document.getElementById('years');
let button = document.getElementById('button');
let ture = document.querySelector('.ture');
let score = document.querySelector('.scroe');
let result = document.querySelector('.result');

button.addEventListener('click', () => {
  let newYear = parseFloat(year.value);
  result.style.display = 'block';
  if (newYear % 400 === 0) {
    score.textContent = newYear;
    ture.textContent = 'ture Leap Year ✅';
    score.style.color = 'green';
  } else if (newYear % 100 === 0) {
    score.textContent = newYear;
    ture.textContent = ' false Not a Leap Year ❌';
    score.style.color = 'red';
  } else if (newYear % 4 === 0) {
    score.textContent = newYear;
    ture.textContent = 'ture Leap Year ✅';
    score.style.color = 'green';
  } else {
    score.textContent = newYear;
    ture.textContent = 'false Not a Leap Year ❌';
    score.style.color = 'red';
  }
});

// Form Reset

let form = document
  .getElementById('leap_years')
  .addEventListener('click', element => {
    element.preventDefault();
  });

// const users = {
//   profile: {
//     age: 20,
//   },
// };

// function addminIsActiveChack(user) {
//   const result = user?.profile?.age;
//   return result;
// }
// const results = addminIsActiveChack(users);
// console.log(results);
