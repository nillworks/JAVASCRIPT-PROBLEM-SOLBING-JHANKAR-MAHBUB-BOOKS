// Practice Pat 5 FUNCTION

//? Qs:1 :তোর এক বন্ধুর কাছে কিছু নম্বর আছে: [5, 15, 8, 7]। এর চাওয়া অনুযায়ী, শুধু বিজোড় সংখ্যাগুলোর যোগফল বের করে দে। এই কাজের জন্য একটা ফাংশন লিখে ফলাফলটা রিটার্ন কর।
// Ans:
function orddNumberSum(numbers) {
  let sum = 0;
  for (const i of numbers) {
    sum = i % 2 === 1 ? i + sum : sum;
  }
  return `Ordd Number is: ${sum}`;
}
const arrayis = [5, 15, 8, 7, 19];
const outputONS = orddNumberSum(arrayis);
console.log(outputONS);

//? Qs:2 :একটা ফাংশন লিখে দেখ, ছোট array-এর প্রথম দুটো উপাদানের মধ্যে যেটা ছোট সেটা রিটার্ন করবে। উদাহরণস্বরূপ, তুই যদি [20, 45, 78] পাঠাস, ফাংশন 20 রিটার্ন করবে।
// Ans:
function smallNumR(smullNum) {
  let small = smullNum[0];
  for (const i of smullNum) {
    if (i < small) {
      small = i;
    }
  }
  return `samll Numbers is: ${small}`;
}
const arrayN = [123, 132, 123, 234, 3, 34, 40];
const outputSmN = smallNumR(arrayN);
console.log(outputSmN);

//? Qs:3 :তুই তোর বয়স একটু লুকিয়ে-চুপিয়ে দেখতে চাস। ধর, তোর বয়স 18-এর কম হলে তুই রিটার্ন 18, আবার 45-এর বেশি হলে তুই বলবি 45, আর এই দুটার মাঝখানে কোনো সংখ্যা হলে সরাসরি সেই সংখ্যাটা রিটার্ন করে পাঠিয়ে দিবি। এমন একটা ফাংশন লিখ।
// Ans:
function ageChack(age) {
  return age < 18 ? 18 : age > 45 ? 45 : age;
}
const age = 20;
const outputAgeChack = ageChack(age);
console.log(outputAgeChack);

//? Qs:4 :তোর এক বন্ধুর কাছে একটি array আছে, যেমন: [2, 4, 5, 7, 8, 32, 45]। এখন এমন একটা ফাংশন তৈরি কর, যা শুধু array-এর 4 দিয়ে ভাগ যায়, এমন সংখ্যাগুলোর যোগফল দেখাবে।
// Ans:
function divitionFor4(num) {
  let sum = 0;
  for (const i of num) {
    if (i % 4 === 0) {
      sum = sum + i;
    }
  }
  return `Your numberis dividet 4 is sum: ${sum}`;
}
const myFriendArrayis = [242, 24, 224, 345, 46, 46, 43, 453, 35];
const outputdividet = divitionFor4(myFriendArrayis);
console.log(outputdividet);

//? Qs:5 :একটা ফাংশন লিখ, যা একটি নাম্বার নিয়ে এবং সেটি যদি 20-এর কম হয়, তবে নাম্বারটিকে দ্বিগুণ করবে, না হলে 20 দিয়ে ভাগ করবে।
// Ans:
function lesthinNumberIs(num) {
  if (num < 20) {
    return num * 2;
  } else {
    return num / 20;
  }
}
const number = 20;
const outputIS = lesthinNumberIs(number);
console.log(outputIS);

//? Qs:6 :এমন একটা ফাংশন লিখ, যা array-এর মধ্যে শুধু নেগেটিভ সংখ্যাগুলোর যোগফল রিটার্ন করবে।
// Ans:
function NagativeNumEven(num) {
  let sum = 0;
  for (const i of num) {
    if (i < 0) {
      sum = sum + i;
    }
  }
  return `nagative number sum:${sum}`;
}
const arrayNum = [23, -32, -234];
const outputChack = NagativeNumEven(arrayNum);
console.log(outputChack);

//? Qs:7 :একটা ফাংশন লিখ, যা একটি array নিয়ে এবং array-এর মধ্যে যে সংখ্যাগুলো 3 দিয়ে ভাগ যায়, তাদের গুণফল রিটার্ন করবে।
// Ans:
function multiplyDivisibleBy3(arr) {
  let product = 1;
  let found = false;
  for (const num of arr) {
    if (num % 3 === 0) {
      product *= num;
      found = true;
    }
  }
  return found ? product : 0;
}

const arrayNo = [21, 40];
const outputLastFunction = multiplyDivisibleBy3(arrayNo);
console.log(outputLastFunction);
