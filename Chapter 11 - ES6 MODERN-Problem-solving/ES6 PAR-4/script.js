//? QS : 1:একটি array-এর প্রথম ইনডেক্সের মান রিটার্ন করবে, এমন একটা অ্যারো ফাংশন লিখ।
// Ans:
const array = [20, 18];
const fristIndex = arr => arr[0];
const result = fristIndex(array);
console.log(result);

//? QS : 2:তিনটি সংখ্যা নিয়ে তাদের গুণফল রিটার্ন করবে, এমন একটা অ্যারো ফাংশন লিখ।
// Ans:
const nameberOf3 = (num1, num2, num3) => {
  const result = num1 * num2 * num3;
  return result;
};
const result2 = nameberOf3(2, 4, 5);
console.log(result2);

//? QS : 3:এমন একটি arrow function লিখ, যা কোনো প্যারামিটার নিলে না শুধু "unknown" রিটার্ন করবে।
// Ans:

const arrowFunction = (name = 'unknown') => {
  return name;
};
const result3 = arrowFunction();
console.log(result3);

//? QS : 4:একটি object-এর মধ্যে নাম এবং পকেটে কত টাকা আছে এমন দুটি প্রপার্টি আছে। এখন এমন একটা ফাংশন লিখ, যোটা টাকার পরিমাণকে 5 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।
// Ans:
const student = { name: 'shipon roy', many: 200 };
const division = stu => {
  return stu.many / 5;
};
const result4 = division(student);
console.log(result4);

//? QS : 5:জাভাস্ক্রিপ্টে যখন একটা array-এর শেষ উপাদান পাওয়ার জন্য শেষ উপাদানের ইনডেক্স বের করতে হয়। শেষ উপাদান বের করার সিস্টেম হচ্ছে, অ্যারের length বের করে সেটা থেকে 1 বিয়োগ করি। এটা কিন্তু একটা এক্সপ্রেশন করে। তাদের একটি array-এর প্রথম ও শেষ উপাদান যোগ করে যোগফল রিটার্ন করবে, এমন একটা arrow function লিখে ফেল।
// Ans:
const arr = [20, 2, 23, 3, 45, 45, 45, 3];

const subtraction = arr => {
  const arrLengthLast = arr.length - 1;
  const result = arr[0] + arr[arrLengthLast];
  return result;
};
const result5 = subtraction(arr);
console.log(result5);

//? QS : 6:এমন একটা ফাংশন তৈরি কর, যা দুটো সংখ্যা যোগ করবে। প্রথম সংখ্যা না থাকলে 10, আর দ্বিতীয় সংখ্যা না থাকলে 5 ধরে যোগফল দেখাবে। এইটা Arrow function দিয়ে করবি।
// Ans:

const arrowFun = (num1 = 10, num2 = 5) => {
  const result = num1 + num2;
  return result;
};
const result6 = arrowFun();
console.log(result6);
