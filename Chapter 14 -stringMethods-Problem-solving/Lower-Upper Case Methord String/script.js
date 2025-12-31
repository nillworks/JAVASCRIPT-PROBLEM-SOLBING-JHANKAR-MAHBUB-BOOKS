// Lower-Upper Case Methord String

//? Qs: 1 :  একটা ই-মেইল আছে const email 'User@Example.Com'; এই ই-মেইলকে ছোট হাতের অক্ষরে কনভার্ট কর।
// Ans:
const email = 'User@Example.Com';
const emailToLowerCase = email.toLowerCase();
console.log(emailToLowerCase);

//? Qs: 2 : const greeting = 'hELlo WoRLd'; এই স্ট্রিং পুরোটা বড় হাতের অক্ষরে এবং ছোট হাতের অক্ষরে কনভার্ট করে দেখ।
// Ans:
const greeting = 'hELlo WoRLd';
const greetingToLowerCase = greeting.toLowerCase();
const greetingToUpperCase = greeting.toUpperCase();
console.log(greetingToLowerCase);
console.log(greetingToUpperCase);

//? Qs: 3 : কেইস ইগনোর করে চেক কর const language = 'JavaScript'; এর মধ্যে script আছে কি না।
// Ans:
const language = 'JavaScript';
const chakLanguage = language.toLowerCase().includes('script');
console.log(chakLanguage);

//? Qs: 4 :  const text = 'Nodejs'; এই স্ট্রিংয়ের প্রথম ক্যারেক্টার বড় হাতের কি না, তা চেক কর।
// Ans:

const text = 'Nodejs';
const fristLetters = text[0];
if (fristLetters === fristLetters.toUpperCase()) {
  console.log('Yes Frist Letters Captteal');
} else {
  console.log('No');
}
