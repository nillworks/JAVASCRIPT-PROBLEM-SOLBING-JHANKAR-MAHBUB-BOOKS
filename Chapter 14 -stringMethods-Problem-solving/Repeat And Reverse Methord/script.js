// Repeat And Reverse Methods

//? Qs: 1:  একটি string তৈরি কর, যার ভ্যালু হবে "Hi"। সেটি repeat দিয়ে 10 বার রিপিট করে কনসোল লগ কর।
// Ans:
const string = 'Hi';
const stringRepeat = string.repeat(10);
console.log(stringRepeat);

//? Qs: 1: একটি স্ট্রিং বানা "I am learning JavaScript. JavaScript is amazing!"। replace ব্যবহার করে প্রথম "JavaScript"-কে "JS" দিয়ে রিপ্লেস কর।
// Ans:
const string2 = 'I am learning JavaScript. JavaScript is amazing!';
const stringRelapse = string2.replace('JavaScript', 'JS');
console.log(stringRelapse);

//? Qs: 1: একটি স্ট্রিং বানা "I love apples and apples are tasty!". সব "apples"-কে "mangoes" দিয়ে রিপ্লেস কর।
// Ans:
const string3 = 'I love apples and apples are tasty!';
const ReplaceAllApples = string3.replaceAll('apples', 'mangoes');
console.log(ReplaceAllApples);

// Reverse Methods
const sentence = 'I am learning Web Dev';
let reverseSentence = '';
for (const letter of sentence) {
  reverseSentence = letter + reverseSentence;
  console.log(letter);
}

console.log(reverseSentence);
