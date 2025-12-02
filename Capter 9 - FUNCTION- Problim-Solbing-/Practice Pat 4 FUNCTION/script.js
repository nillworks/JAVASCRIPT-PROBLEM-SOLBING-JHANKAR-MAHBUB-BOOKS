// Practice Pat 4 FUNCTION

//? Qs: 1:তোর দেওয়া array-এ মধ্যে যতগুলো উপাদান আছে, উপাদানের সংখ্যা জোড় নাকি বিজোড়, তা চেক কর। ফাংশন লিখে এটা করে দেখ।
// Ans:
function arraysChackOrddOrEven(nums) {
  if (nums.length % 2 === 0) {
    return `is Even Numbers ${nums.length}`;
  } else {
    return `is Ordd Numbers ${nums.length}`;
  }
}
const FunctionColl = arraysChackOrddOrEven([
  123, 13, 234, 34, 35, 45, 546, 54, 6567, 23,
]);
console.log(FunctionColl);

//? Qs: 2:ধর, তোকে এমন একটি ফাংশন বানাতে হবে, যেটাতে একটি নাম পাস করলে সেটার প্রথম অক্ষরটা রিটার্ন করবে। ধর 'Raju' দিলে 'R' রিটার্ন করবে।
// Ans:
function name(name) {
  const result = name[0];
  return result;
}
const nameis = 'Shipon roy';
const fanctionResultIs = name(nameis);
console.log(fanctionResultIs);

//? Qs: 3:তুই একটা ফাংশন বানাবি, যেটাতে একটা সংখ্যা নিবি। ফাংশনটা চেক করবে, সংখ্যাটা 10-এর বড় কি না। বড় হলে 10 দিয়ে ভাগ করবে। আর 10-এর ছোট হলে 10 দিয়ে গুণ করবে। তারপর রেজাল্টটা রিটার্ন করবে।
// Ans:
function nambersCkack(num) {
  const result = num > 10 ? num / 10 : num * 10;
  return result;
}
const numbers = 943;
const outputIs = nambersCkack(numbers);
console.log(outputIs);

//? Qs: 4:একটা ফাংশন বানাও, যেটা একটা array নিবে এবং array-এর প্রথম এবং দ্বিতীয় উপাদান যোগ করে যোগফল রিটার্ন করবে।
// Ans:
function sumReturn(numbers) {
  const result = numbers[0] + numbers[1];
  return result;
}
const newArrayIs = [12, 21, 2372, 42];
const outputIs1 = sumReturn(newArrayIs);
console.log(outputIs1);

//? Qs: 5:একটা ফাংশন বানাই, যেটা কোনো সংখ্যা n পাবে, আর সেই সংখ্যা পজিটিভ হলে রিটার্ন করবে, যদি n নেগেটিভ হয়, তাহলে তিগুণ করে রিটার্ন করবে।
// Ans:
function i(n) {
  const result = n < 0 ? n * 3 : n;
  return result;
}
console.log(i(-2));

//? Qs: 6:তুই এমন একটা ফাংশন লিখবি, যা দুইটা নাম নিবে, প্রথম নাম আর দ্বিতীয় নাম। যদি প্রথম নামের দৈর্ঘ্য দ্বিতীয় নামের দৈর্ঘ্যের চেয়ে বেশি হয়, তাহলে true রিটার্ন করবে, না হলে false।
// Ans:
function comparejon(name1, name2) {
  const result = name1.length > name2.length ? true : false;
  return result;
}
const outputComparejon = comparejon('shipon roy', 'nill roy');
console.log(outputComparejon);

//? Qs: 7:তুই এমন একটি ফাংশন লিখ, যা দুইটি সংখ্যা নিবে এবং তাদের গুণফল রিটার্ন করবে। তবে, গুণফল 100-এর বেশি হলে শুধু অর্ধেক রিটার্ন করবে।
// Ans:
function multiplicationComparesion(num1, num2) {
  const multipliResult = num1 * num2;
  const result = multipliResult > 100 ? multipliResult / 2 : multipliResult;
  return result;
}
const input1 = 29;
const input2 = 23;
const mc = multiplicationComparesion(input1, input2);
console.log(mc);

//* esta problems.

function numberOfSum(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum = sum + number;
    }
  }
  const divition = sum / 2;
  return divition;
}
const arraySum = [54, 13, 1];
const result21 = numberOfSum(arraySum);
console.log(`Sum of namber is: ${result21}`);
