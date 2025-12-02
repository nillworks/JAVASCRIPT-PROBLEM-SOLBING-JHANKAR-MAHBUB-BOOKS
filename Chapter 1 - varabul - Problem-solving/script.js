//* Capter 1 -Varabul-problim-solbing  Paze No:47

//? Qustions 1 Solbing.
//ধর, তুই 100 টাকা আয় করেছিলি। তার মধ্যে 40 টাকা খরচ করেছিলি। বাকি টাকা বের করিস, সেটা বের করার একটা প্রোগ্রাম লিখ।
// Ans:
const incame = 100;
const expense = 40;
const nitBalance = incame - expense;

console.log(`Total Balance is ${nitBalance} tk.`);

//? Qustions 2 Solbing.
//তোর কাছে 10টা পেন্সিল আছে। প্রতিদিন তুই একসাথে 2টা পেন্সিল ব্যবহার করবি। কতবার ব্যবহার করতে পারবি?
// Ans:
const myTotalPancil = 10;
const evryTimeUse = 2;
const totalpancilUse = myTotalPancil / evryTimeUse;
console.log(`i can use ${totalpancilUse} times it.`);

//? Qustions 3 Solbing.
// প্রোগ্রাম লিখে বের কর তোর কাছে 60 টাকা আছে। তুই যদি প্রতিদিন 15 টাকা করে খরচ করিস, কয়দিন খরচ করতে পারবি? এবং খরচের পর কম টাকা বাকি থাকবে, সেটা বের করার একটা প্রোগ্রাম লিখ।

// Ans:
const totalMany = 60;
const spend = 15;
const times = totalMany / spend;
const reminding = totalMany % spend;
console.log(`Total Times spend is ${times}`);
console.log(`Total balanse is ${reminding} tk.`);

//? Qustions 4 Solbing.
//ধর, তুই দুইটা স্ট্রিং লিখলি "Hello" আর "World"। এই দুইটা স্ট্রিংকে একসাথে জোড়া দিয়ে কিভাবে "HelloWorld" বানানো যায়, সেটা দেখানোর জন্য একটা প্রোগ্রাম লিখ।
// Ans:

const name = 'Helo' + 'World';
console.log(name);

//? Qustions 5 Solbing.
//তুই যদি 153 কেজি চাল আর 261 কেজি ডাল কিনিস, তাহলে তুই কত কেজি কিনলি? মোট কেজি বের করার একটা প্রোগ্রাম লিখ।
// Ans:
const chal = 153;
const dull = 261;

const totalwight = chal + dull;
console.log(`Total Chal & dull weight ${totalwight} Klg.`);

//? Qustions 6 Solbing.
//তোর কাছে 500 টাকা আছে, প্রতিদিন তুই 75 টাকা খরচ করবি। কয়দিন খরচ করতে পারবি এবং শেষে কত টাকা বাকি থাকবে, সেটা বের করার একটা প্রোগ্রাম লিখ।
// Ans:
const myManytotal = 500;
const myManytotalSpend = 75;
const myManytotalSpendtime = Math.floor(myManytotal / myManytotalSpend);
const totalManyReminding = myManytotal % myManytotalSpend;

console.log(
  `my evrytimes spend many is ${myManytotalSpendtime} take & My now Balains is ${totalManyReminding} taka it.`
);

//? Qustions 7 Solbing.
//তুই 8-কে 3 দিয়ে ভাগ দিলে ভাগফল কত আর ভাগশেষ কত, সেটা বের করার জন্য একটা প্রোগ্রাম লিখ।
// Ans:
const divisonMath = Math.ceil(8 / 3);
const modulusMath = 8 % 3;

console.log(
  `Final Divison Math Resselt is ${divisonMath} & Modulus Math Resslt is ${modulusMath} .`
);

//? Qustions 8 Solbing.
//তুই 50-কে 9 দিয়ে ভাগ দিলে ভাগফল কত এবং ভাগশেষ কত হবে, সেটা বের করার একটা প্রোগ্রাম লিখ।
// Ans:

const modulusMath2 = Math.round(50 / 9);
console.log(`divisoin result AbJ ${modulusMath2} .`);

//? Qustions 9 Solbing.
//তুই "Bangla" আর "desh" জোড়া করে "Bangladesh" বানাতে চাস। কিভাবে করবি, সেটা দেখানোর একটা প্রোগ্রাম লিখ।
// Ans:

const stringAddtionMath = 'Bangla' + 'desh';
console.log(stringAddtionMath);

//? Qustions 10 Solbing.
//ধর, একদিন ঘুম থেকে উঠে শিক্ষক চোট্টে তুই ছোটাাট্টো একটা রাক্ষস হয়ে গেছিস। তারপর থেকে প্রতিদিন 4 কেজি চালের ভাত খেয়ে ফেলস। এখন যদি তোকে 12 মন (480 কেজি) চাল দেওয়া হয় থাকে, তাহলে এই চাল দিয়ে তোর কত দিন যাবে। আবার একমাস যদি 30 দিনের হয়, তাহলে এই 12 মন চাল দিয়ে তোর কত মাস যাবে।
// Ans:

const totalChal = 40 * 12 + 480;
const singleDaySpend = 4;
const totalDaysFines = totalChal / singleDaySpend;
const totalManthUse = (40 * 12) / 30;
console.log(
  `total days chal use  ${totalDaysFines} & total Manth use is ${totalManthUse}`
);
