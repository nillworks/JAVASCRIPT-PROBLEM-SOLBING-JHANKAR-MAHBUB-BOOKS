//? QS: 1:এমন একটি ফাংশন তৈরি কর যা তিনটি সংখ্যার যোগফল বের করবে। ডিফল্ট মান হিসেবে প্রতিটি প্যারামিটারের জন্য 0 সেট কর।
// Ans:
const pramitar3Num = (num1 = 0, num2 = 0, num3 = 0) => {
  const result = num1 + num2 + num3;
  return result;
};

const result = pramitar3Num();
console.log(result);

//? QS: 2:তুমিই এমন একটি ফাংশন লিখবি, যেখানে টাকার জমা দেওয়ার সুবিধা থাকবে। যদি কোন টাকা পরিমাণ না দেওয়া হয়, তাহলে জমা হিসাবে ডিফল্ট 50 টাকা দেখাবে।
// Ans:
const depositMoney = (amount = 50) => {
  const result = amount;
  return result;
};

const newResult = depositMoney();
console.log(newResult);

//? QS: 3:এমন একটি ফাংশন তৈরি কর, যেখানে নাম আর তার মাসিক আয় নেবে। যদি নাম না দেওয়া হয়, তাহলে ডিফল্ট হিসেবে anonymous ইউজ করবি। আর মাসিক আয় দেওয়া না থাকলে সেখানে ডিফল্ট হিসেবে 0 ইউজ করবি।
// Ans:
const NameMantlySalary = (name = 'anonymous', salary = 0) => {
  const result = { name, salary };
  return result;
};

const result2 = NameMantlySalary();
console.log(result2);
console.log(result2.name);
console.log(result2.salary);

//? QS: 4:এমন একটি ফাংশন লিখ, যা একটি সংখ্যা নেবে এবং সেটার বর্গ বের করবে। যদি সংখ্যা না দেওয়া হয়, সেটার ডিফল্ট মান 1 রাখ।
// Ans:
const squareNumber = (num = 0) => {
  const result = num * num;
  return result;
};

const result4 = squareNumber();
console.log(result4);

//? QS: 5:এমন একটি ফাংশন বানাও, টোটাল কোনো পণ্যের নাম ও তার মূল্য নেবে। যদি নাম না দেওয়া হয়, তাহলে "Unknown product" এবং মূল্য না থাকলে 1 সেট কর।
// Ans:
const prodactPrice = (prodactName = 'Unknown product', price = 1) => {
  const result = [prodactName, price];
  return result;
};

const prodact = prodactPrice();
console.log(prodact);
console.log(prodact[0]);
console.log(prodact[1]);

//? QS: 6:একটি ফাংশন তৈরি কর, যা তোমার সব বইয়ের নাম অ্যারে প্যারামিটার হিসেবে নেবে। যদি কোনো প্যারামিটার না পাঠানো হয়, তাহলে ডিফল্ট হিসেবে একটি অ্যারে রাখবি, যেখানে অন্তত একটির মান থাকবে JS book নামে।
// Ans:
const myBoockName = ['problem solbingBook My phabaret', 'englishBook'];

const favariteBoock = (jsbook = ['js book']) => jsbook;

const result6 = favariteBoock(myBoockName);
console.log(result6);

//? QS: 7:এমন একটি ফাংশন তৈরি কর, যেখানে একটি অবজেক্ট প্যারামিটার নেবে। অবজেক্টে price এবং quantity থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট মান হিসেবে price 10 এবং quantity 1 সেট কর। ফাংশনটি total price রিটার্ন করবে।
// Ans:
const dblObj = (obj = { price: 10, quantity: 1 }) => {
  const totalPrice = obj.price * obj.quantity;
  return totalPrice;
};

const obj = { price: 50, quantity: 100 };

const result7 = dblObj(obj);
console.log(result7);

//? QS: 8:এমন একটি ফাংশন বানাও, যেখানে একটি অ্যারে প্যারামিটার নেবে। প্রতিটি উপাদানকে 2 দিয়ে গুণ করে নতুন অ্যারে রিটার্ন করবে। যদি অ্যারে না দেওয়া হয়, ডিফল্ট হিসেবে [5, 10, 15] সেট কর।
// Ans:
const dblArrValue = (arr = [5, 10, 15]) => {
  let dblArr = [];
  for (const itmes of arr) {
    dblArr.push(itmes * 2);
  }
  return dblArr;
};

const newArr = [23, 23, 43, 45, 56, 7];
const dubleArr = dblArrValue(newArr);
console.log(dubleArr);
console.log(dblArrValue());

//? QS: 9:এমন একটি ফাংশন তৈরি কর, যা একটি অবজেক্ট প্যারামিটার নেবে। অবজেক্টে principal এবং rate থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট principal 1000 এবং rate 5 রাখ। ফাংশন simple interest হিসাব কর, এই ফর্মুলা দিয়ে (principal * rate / 100), তারপর রেজাল্ট রিটার্ন কর।
// Ans:

const simpleInterest = (obj = { principal: 1000, rate: 5 }) => {
  const result = (obj.principal * obj.rate) / 100;
  return result;
};

const obj9 = { principal: 1002, rate: 10 };
const result9 = simpleInterest(obj9);
console.log(result9);

//? QS: 10:একটি ফাংশন তৈরি কর, যা একটি অবজেক্ট নেবে। অবজেক্টে salary এবং tax থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট salary 50000 এবং tax 10 সেট কর। ফাংশনটি সেই অনুযায়ী ট্যাক্স বাদে বাকি টাকার পরিমাণ রিটার্ন করবে (salary এর উপর ট্যাক্সের শতাংশ বিয়োগ করে রেজাল্ট রিটার্ন করবে)।
// Ans:

const salaryTax = (obj = { salary: 50000, tax: 10 }) => {
  const tax = (obj.salary * obj.tax) / 100;
  const result = obj.salary - tax;
  return result;
};

const obj10 = { salary: 30000, tax: 15 };
const result10 = salaryTax(obj10);
console.log(result10);
