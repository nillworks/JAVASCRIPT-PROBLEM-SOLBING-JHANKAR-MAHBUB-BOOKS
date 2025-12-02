// Part 1 10 problames

//? Qusen 1 :তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে 5% ডিসকাউন্ট, আর 6000 টাকার বেশি কেনাকাটা করলে 15% ডিসকাউন্ট দিবি। যদি এক বন্ধুর এসে 4500 টাকার জিনিস কিনে, তবে তাকে কত টাকা দিতে হবে?
// Ans:
const price = 3004;
if (price > 6000) {
  const discount = (price / 100) * 15;
  const pay = price - discount;
  console.log(
    `Your Discount is 15% | Now Your Total Blances is Only ${pay} Tk.`
  );
} else if (price > 3000) {
  const discount = (price / 100) * 5;
  const pay = price - discount;
  console.log(
    `Your Discount is 5% | Now Your Total Blances is Only ${pay} Tk.`
  );
} else {
  console.log(`Now Discound | Your Blances Is ${price}`);
}

//? Qusen 2 :একটি স্টুডেন্টশিপ চালু হয়েছে, যেখানে 12 বছরের নিচে বাচ্চাদের ফ্রি খাওয়ানো হয় এবং 60 বছরের উপরের মানুষদের 50% ডিসকাউন্ট দেওয়া হয়, বাকিদের পুরো টাকা দিতে হয়।
// Ans:
const price2 = 220;
const age = 61;
if (age < 12) {
  console.log('Free No Tk.');
} else if (age > 60) {
  const discount = Math.ceil((price2 / 100) * 50);
  const pay = price2 - discount;
  console.log(
    `Your Discount Is 50% & ${discount} Tk. | Your Bill is Only ${pay} Tk.`
  );
} else {
  console.log(`No Discount Your Total Bill Is Only ${price2} Tk`);
}

//? Qusen 3 :যদি কারো ব্যাঙ্ক একাউন্টের ব্যালেন্স 1000 টাকার কম হয়, তাহলে বলবি, "ডিপোজিট কর"। 1000 থেকে 5000-য়ের মধ্যে হলে বলবি, "বিন্দাস লাইফ এনজয় কর।" আর 5000-য়ের বেশি হলে বলবি, "তুই ধনী, আমারে বিয়া কর।"
// Ans:
const bankBalens = 3333;
if (bankBalens < 1000) {
  console.log('ডিপোজিট কর');
} else if (bankBalens <= 5000) {
  console.log('বিন্দাস লাইফ এনজয় কর');
} else {
  console.log('তুই ধনী, আমারে বিয়া কর');
}

//? Qusen 4 :কোনো পরীক্ষায় কেউ ৫০-এর কম পেলে বলবি "Fail", ৫০ থেকে ৮০-য়ের মধ্যে পেলে বলবি "Pass", আর ৮০-য়ের বেশি পেলে বলবি "A+"।
// Ans:
const mark = 51;
if (mark > 80) {
  console.log('A+');
} else if (mark >= 50) {
  console.log(`Pass`);
} else {
  console.log('Fail');
}

//? Qusen 5 :কোনো বইয়ের সাইজ যদি ১০০-এর কম হয় তবে বলবি "Small book", ১০০ থেকে ৫০০-য়ের মধ্যে হলে বলবি "Mid-size book", আর ৫০০-য়ের বেশি হলে বলবি "heart-attack size book"।
// Ans:

const bookPjNo = 12;
if (bookPjNo > 500) {
  console.log(`Heart-attack Size Book`);
} else if (bookPjNo > 100) {
  console.log(`Mid-Size-book`);
} else {
  console.log(`Small Book`);
}

//? Qusen 6 :কোনটা প্রোগ্রাম লিখ। বা আউটপুট, তাহলে তা ভিউয়ের কম হলে বলবি "Ice", ০ থেকে ২০-য়ের মধ্যে হলে বলবি "Cool Cool", আর ২০-য়ের বেশি হলে বলবি "Hot Hot"!
// Ans:
const calcias = 0;
if (calcias < 0) {
  console.log(`Ice`);
} else if (calcias <= 20) {
  console.log(`Cool Cool.`);
} else {
  console.log(`Hot Hot`);
}

//? Qusen 7 :যদি একটা গেমিং অ্যাকাউন্ট থাকে। প্লেয়ার লেভেল ১০-এর কম হলে বলবি "novice", ১০ থেকে ৫০-য়ের মধ্যে হলে বলবি "Expert", আর ৫০-য়ের বেশি হলে বলবি "Pro Gamer"!
// Ans:
const gmaeApp = 10;
if (gmaeApp < 10) {
  console.log(`Novice`);
} else if (gmaeApp <= 50) {
  console.log('Expert');
} else {
  console.log(`Pro Gamer`);
}
