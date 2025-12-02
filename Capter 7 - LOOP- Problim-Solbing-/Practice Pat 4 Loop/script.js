// Practice Pat 4 Loop
//? Qs: 1:For লুপ দিয়ে 150 থেকে 170 পর্যন্ত সংখ্যা প্রিন্ট কর।
// Ans:
for (let i = 150; i <= 170; i++) {
  console.log(i);
}

//? Qs: 2:তুমি এক স্কুলে 31 থেকে 58 পর্যন্ত ছাত্রদের রোল নাম্বার লিস্ট করবি, তারপর একটা for লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।
// Ans:
let sum = 0;
for (let i = 31; i <= 58; i++) {
  console.log(i);
  sum = sum + i;
}
console.log(`Sum of number 31 to 58 is:${sum}`);

//? Qs: 3:For লুপ দিয়ে 25 থেকে 75 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং যোগফল শেষে প্রিন্ট কর।
// Ans:
let sum1 = 0;
for (let i = 25; i <= 75; i++) {
  sum1 = sum1 + i;
}
console.log(`Total sum from 25 to 75 is: ${sum1}`);
