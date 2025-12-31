// Split Methord

//? Qs: 1 : তোর একগাদা বন্ধুর নাম তোকে একটা স্ট্রিং আকারে দিছে "Raju, Rana, Hasan, Kabir, Mahi"। এদের নামগুলো আলাদা বের করে একটা অ্যারে বানিয়ে ফেল।
// Ans:
const friendName = 'Raju, Rana, Hasan, Kabir, Mahi';
const newNameArr = friendName.split(', ');
console.log(newNameArr);

//? Qs: 2 : তুই একটা অ্যারের মধ্যে তোর বন্ধুদের নাম লিখেছিস। এবার নামগুলো একটা স্ট্রিং আকারে বের করবি, আর প্রতিটা নামের মাঝে কমা(“,”) থাকবে।
// Ans:
const friendNames = ['Raju', 'Rana', 'Hasan', 'Kabir', 'Mahi'];
const stringConvert = friendNames.join(',');
console.log(stringConvert);

//? Qs: 3 :  "function if else while" এই স্ট্রিংটাকে স্পেস দিয়ে ভাগ করে প্রতিটা কি-ওয়ার্ড আলাদা করে অ্যারেতে রাখ।
// Ans:
const string = 'function if else while';
const keyWordsString = string.split(' ');
console.log(keyWordsString);

//? Qs: 4 : একটি অ্যারে আছে languages=["JavaScript", "Python", "Java"]। এই অ্যারের প্রতিটা ভাষার নামকে একটি স্ট্রিং বানিয়ে প্রতিটার মাঝে সেমিকোলন যোগ কর।
// Ans:
const languages = ['JavaScript', 'Python', 'Java'];
const AddClone = languages.join(';');
console.log(AddClone);

//? Qs: 5 :  একটি স্ট্রিং দেওয়া আছে "for,while,for-in,for-of,do-while"। এই স্ট্রিং থেকে লুপগুলোর নাম আলাদা করার জন্য split ব্যবহার কর।
// Ans:
const strings = 'for,while,for-in,for-of,do-while';
const result5 = strings.split(',');
console.log(result5);

//? Qs: 6 : একটা স্ট্রিং দেওয়া আছে " console log debug "। এই স্ট্রিং থেকে শুরুর এবং শেষের ফাঁকা জায়গা রিমুভ করে ফেল।
// Ans:
const string6 = ' console log debug ';
const result6 = string6.trim();
console.log(result6);

//? Qs: 7 : const str1 = "push"; const str2= "pop"; const str3 = "shift"; const str4 = "unshift" এই এই স্ট্রিংগুলাকে জোড়া দিয়ে একটা স্ট্রিং বানিয়ে ফেল। concat ইউজ করে।
// Ans:
const str1 = 'push';
const str2 = 'pop';
const str3 = 'shift';
const str4 = 'unshift';

const result7 = str1.concat(' ', str2, ' ', str3, ' ', str4);
console.log(result7);

//? Qs: 8 : "Hello JavaScript Developers" এই স্ট্রিং থেকে "JavaScript" অংশটা বের কর।
// Ans:
const string8 = 'Hello JavaScript Developers';
const resultString8 = string8.slice(6, 16);
console.log(resultString8);

//? Qs: 9 : একটা স্ট্রিং আছে "Code more learn more"। স্ট্রিংটা থেকে "learn" অংশটা substring দিয়ে বের কর।
// Ans:
const string9 = 'Code more learn more';
const result9 = string9.substring(10, 16);
console.log(result9);
