// Practice Pat 2 FUNCTION
//? Qs: 1:পিতা ও পুত্রের বয়সের সমন্ধি বের করার একটি ফাংশন লিখ।
// Ans:
function fatherSonDifference(num1, num2) {
  const difference = num1 - num2;
  console.log(difference);
}
const fatherAge = 40;
const sonAge = 18;
fatherSonDifference(fatherAge, sonAge);

//? Qs: 2:তোর এক বন্ধু বলে ক্যালকুলেটর বানাবি, কিন্তু ক্যালকুলেটরের শুধু যোগ বা বিয়োগ করার অপশন থাকলে হবে না। একটা ফাংশন লিখ, যেখানে দুটি সংখ্যার গুণ বের করতে পারবি। যেমন, যদি 20 আর 15 প্যারামিটার আউটপুট হবে 300।
// Ans:
function calculator(num1, num2) {
  const result = num1 * num2;
  console.log(result);
}
calculator(20, 15);

//? Qs: 3:একটা ফাংশন লিখ, যেটি পরীক্ষার মার্কসের সমন্ধি বের করবে।
// Ans:
function examDifference(fullMarks, obtainedMarks) {
  const difference = fullMarks - obtainedMarks;
  console.log(difference);
}
const obtainedMarks = 33;
const fullMarks = 100;
examDifference(fullMarks, obtainedMarks);

//? Qs: 4:বয়স বের করার একটি ফাংশন লিখ। (তোরে দুই জন কজনের বয়স, সেটা বলবি। তারপরে ফাংশনের ভিতরে এই বছর থেকে তোর জন্ম সাল বিয়োগ করলে তোকে বলা যাবে তোর বয়স কত)।
// Ans:
function personAgeDifference(nowYear, birthYear) {
  const age = nowYear - birthYear;
  console.log(age);
}
const currentYear = 2025;
const birthYear = 2007;
personAgeDifference(currentYear, birthYear);

//? Qs: 5:একটা ফাংশন লিখ, যেখানে প্রতিটি আইটেমের জন্য 35 টাকা লাভে। এখন একটা ফাংশন লিখ, যা প্যারামিটার হিসেবে নিবে, তুই কয়টা আইটেম বিক্রি করছিস, তারপর লাভ কত হবে তা বের করতে পারবি।
// Ans:
function calculateProfit(numberOfItems) {
  const profitPerItem = 35;
  const totalProfit = numberOfItems * profitPerItem;
  console.log(
    `You sold ${numberOfItems} items and your total profit is: ${totalProfit} Tk.`
  );
}
const itemsSold = 2;
calculateProfit(itemsSold);

//? Qs: 6:একটা ফাংশন লিখ, যেটা পাঁচটা সংখ্যার যোগফল বের করবে।
// Ans:
function sumFiveNumbers(num1, num2, num3, num4, num5) {
  const totalSum = num1 + num2 + num3 + num4 + num5;
  console.log(`Total sum is: ${totalSum}`);
}
sumFiveNumbers(21, 21, 23, 43, 45, 56);

//? Qs: 7:ধর, তোর দোকানে প্রত্যেকটা জিনিসে 250 টাকা লাভ করবি। একটা ফাংশন লিখ, যেখানে কোনো একটা জিনিসের কেনা দাম দিবি, তাহল সে বিক্রির দাম (selling price) দিবে।
// Ans:
function EachOneItemsProfitC(numberOfItems) {
  const profitPerItem = 250;
  const sellingPrice = profitPerItem * numberOfItems;
  console.log(`your selling price is: ${sellingPrice}`);
}
const itemNo = 2;
EachOneItemsProfitC(itemNo);

//? Qs: 8:একটি ফাংশন লিখ, তারপরে সেই ফাংশনকে বার জনসাধারণ প্যারামিটার হিসেবে দিবি। তারপরে সে বলবে, কোন বছর তোর বয়স 100 বছর হবে।
// Ans:
function yearWhenHundred(birthYear, ageToReach) {
  const yearTurnHundred = birthYear + ageToReach;
  console.log(`You will turn 100 years old in the year: ${yearTurnHundred}`);
}
const ageToReach = 40;
const birthYear2 = 2007;
yearWhenHundred(birthYear2, ageToReach);

//? Qs: 9:একটি ফাংশন লিখ, যেখানে কোনো ইউজার মোবাইল ফোন ব্যবহার করছে, প্রতি দুই ঘন্টা পর পর সময় মোবাইল ফোন ইউজ করছে। তারপরে সেই ফাংশন বের করবে, মাসে তুই কত ঘন্টা সময় মোবাইল ফোন ইউজ করিস। ধরে নে, এক মাসে ৩০ দিন হয়।
// Ans:
function monthlyMobileUsage(hoursPerSession) {
  const sessionsPerDay = 24 / 2;
  const dailyUsage = hoursPerSession * sessionsPerDay;
  const monthUsage = dailyUsage * 30;
  console.log(`You use your mobile ${monthUsage} hours in a month.`);
}
monthlyMobileUsage(1);
