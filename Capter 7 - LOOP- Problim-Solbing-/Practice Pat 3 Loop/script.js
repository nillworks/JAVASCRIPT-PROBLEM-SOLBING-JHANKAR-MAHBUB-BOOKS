// Practice Pat 3 Loop

//? Qs: 1:while লুপ দিয়ে 50 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট কর।
// Ans:

let num = 50;
while (num <= 100) {
  console.log(num);
  num++;
}

//? Qs: 2:while লুপ দিয়ে 5 থেকে 15 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর।
// Ans:
let num1 = 5;
let sum = 0;
while (num1 <= 15) {
  sum = num1 + sum;
  num1++;
}
console.log(`5 theke 15 porjonto jogfol is: ${sum}`);

//? Qs: 3:তুমি এক স্কুলে 1 থেকে 50 পর্যন্ত ছাত্রদের রোল নাম্বার লিস্ট করবি, তারপর একটা while লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।
// Ans:
let rullNum = 1;
let sum1 = 0;
while (rullNum <= 50) {
  console.log(rullNum);
  sum1 = rullNum + sum1;
  rullNum++;
}
console.log(`Total Number is sum:${sum1}`);

//? Qs: 4:while লুপ ব্যবহার করে 21 থেকে 50 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং ঐযোগফলের যোগফল দেখাবি।
// Ans:
let num2 = 21;
let sum2 = 0;
while (num2 <= 50) {
  sum2 = sum2 + num2;
  num2++;
}
console.log(`21 theke 50 porjonto jogfol holo: ${sum2}`);

//? Qs: 5:20 থেকে 40 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং শুধু ফাইনাল যোগফলটা আউটপুট হিসেবে দেখাবি।
// Ans:
let num3 = 20;
let sum3 = 0;
while (num3 <= 40) {
  sum3 = sum3 + num3;
  num3++;
}
console.log(`20 theke 40 porjonto jogfol holo: ${sum3}`);
