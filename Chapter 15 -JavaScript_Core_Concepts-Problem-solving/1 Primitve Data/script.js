// primitive Data

//? Qs: 1: একটি ভ্যারিয়েবল বানা, যার নাম হবে num এবং সেটাতে 15 রাখ। আরেকটি ভ্যারিয়েবল বানা, যার নাম হবে copy এবং num-এর মান সেট কর। এবার copy- এর মান পরিবর্তন করে 25 কর। এরপর console.log-এ num এবং copy-এর মান দেখ। দুইটা কি সেইম নাকি আলাদা আলাদা।
// Ans:
const num = 15;
let copy = num;
copy = 25;
console.log(num, copy);
// Output: 15 25
// কারণ: number হলো Primitive data
// Primitive data তে value copy হয়
// তাই copy পরিবর্তন করলে num পরিবর্তন হয় না

//? Qs: 2: একটি অ্যারে তৈরি কর, যার নাম হবে arr এবং সেটাতে [1, 2, 3] থাকবে। সেটি আরেকটি ভ্যারিয়েবলে সেট কর। কপি করা ভ্যারিয়েবলে ৪৪ যোগ কর। তারপর প্রথম এবং কপি করা অ্যারে কনসোল লগ করে দেখ, দুইটা কি ডিফারেন্ট আউটপুট দেখাচ্ছে?
// Ans:

const arr = [1, 2, 3];
const copyArr = arr;
copyArr.push(88);
console.log(arr);
console.log(copyArr);

// কারণ: Array হলো Non-Primitive data
// Non-Primitive data তে value কপি হয় না, reference কপি হয়
// arr এবং copyArr দুইটাই একই memory location কে point করে
// তাই copyArr তে push করলে arr ও পরিবর্তন হয়ে যায়

//? Qs: 3: একটি অবজেক্ট বানা, যার নাম হবে language, যার মধ্যে দুটি প্রোপার্টি থাকবে name এবং age। name হবে JS এবং age হবে 30। language অবজেক্টটি একটি নতুন ভ্যারিয়েবল newVersion-এ সেট কর। এরপর newVersion-এ নতুন প্রোপার্টি যোগ কর, যেটার key হবে location এবং value হবে Browser console.log ব্যবহার করে person এবং newPerson-এর মান দেখাও।
// Ans:

const language = { name: 'js', age: 30 };
let newVersion = language;
newVersion.location = 'Browser';
console.log(language);
console.log(newVersion);
