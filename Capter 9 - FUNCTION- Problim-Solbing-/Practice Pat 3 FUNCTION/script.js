// Practice Pat 3 FUNCTION

//? Qs:1 :একটা ফাংশন লিখ, যাতে কোনো কন্ডিশনের ভিত্তিতে নাম্বার 10-এর বেশি হলে true রিটার্ন করবে, আর না হলে false রিটার্ন করবে।
// Ans:
function lesthidEcoal(num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}
const fainalResult = lesthidEcoal(11);
console.log(fainalResult);

//? Qs:2 :তুই একটা ফাংশন লিখ, যা সংখ্যা নেবে আর তারপর সেই সংখ্যা যদি 13 দিয়ে সমানভাবে ভাগ যায়, তাহলে true রিটার্ন দিবে, না হলে false রিটার্ন দিবে।
// Ans:
function isDivisibleBy13(num) {
  if (num % 13 === 0) {
    return true;
  } else {
    return false;
  }
}
const randomNumIs = Math.floor(Math.random() * 100 + 1);
console.log(randomNumIs);
const fainalResult2 = isDivisibleBy13(randomNumIs);
console.log(fainalResult2);

//? Qs:3 :তুই একটা রেস্টুরেন্টে গিয়েছিস, সেখানে ভাত (rice), তরকারি (curry) আর ড্রিংকস (drinks) খাচ্ছি। একটা ফাংশন লিখ, যাতে খাবারের মোট দাম যোগ করে মোট বিল রিটার্ন করবে।
// Ans:
function billCalculator(rice, curry, drinks) {
  const finalResult = rice + curry + drinks;
  return finalResult;
}
const finalOutput = billCalculator(21, 122, 321);
console.log(finalOutput);

//? Qs:4 :এমন একটি ফাংশন বানাও, যেখানে বয়স দিলে সেটি 18-এর বেশি হলে "Eligible for Voting" রিটার্ন করবে, আর না হলে "Not Eligible"।
// Ans:
function ageCheck(age) {
  if (age >= 18) {
    return 'Eligible for Voting.';
  } else {
    return 'Not Eligible.';
  }
}
const yourAgeIs = 21;
const outputAgeCheck = ageCheck(yourAgeIs);
console.log(outputAgeCheck);

//? Qs:5 :একটা ফাংশন লিখ, যেখানে একটি ভেরিয়েবলের স্ট্রিং ভ্যালু দিবি, আর সেটার দৈর্ঘ্য রিটার্ন করবে।
// Ans:
function getStringLength(string) {
  return string.length;
}
const output = getStringLength('now width is:');
console.log(output);

//? Qs:6 :তুই এমন একটা ফাংশন লিখ, যা তিনটা সংখ্যার গড় বের করে রিটার্ন করবে।
// Ans:
function division3Items(num1, num2, num3) {
  const sum = num1 + num2 + num3;
  const average = sum / 3;
  return average;
}
const output1 = division3Items(23, 23, 24);
console.log(output1);

//? Qs:7 :একটা ফাংশন লিখ, যেটা চেক করবে, কোনো একটা সংখ্যা নেগেটিভ কি না। যদি নেগেটিভ (negative) নাম্বার হয়, তাহলে সেটাকে -1 দিয়ে গুণ করে রেজাল্ট রিটার্ন করবে।
// Ans:

function nagativeNumChack(number) {
  if (number < 0) {
    return number * -1;
  } else {
    return number;
  }
}
const number = -212;
const output3 = nagativeNumChack(number);
console.log(output3);

// exta problems

function evenSizedString(str) {
  const size = str.length;
  if (size % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const string = 'it is working ';
const outputE = evenSizedString(string);
console.log(outputE);

function doubleOrTriple(num, doDuble) {
  if (doDuble === true) {
    const multiplication = num * 2;
    const result = `double Multiplication is: ${multiplication}`;
    return result;
  } else {
    const multiplication = num * 3;
    const result = `Triple Multiplication is: ${multiplication}`;
    return result;
  }
}
const numDT = 34;
const dobuleOr = false;
const output2 = doubleOrTriple(numDT, dobuleOr);
console.log(output2);

function numberOfElement(num) {
  const len = num.length;
  return len;
}
const len = numberOfElement([
  24, 23, 424, 24, 2, 34234, 2345, 3453, 654, 564, 56, 456,
]);

console.log(len);
