// Practice Pat 2 loop

//? Qs: 1:while লুপ দিয়ে 10 বার কনসোল লগ কর। আমি প্রতিদিন মিনিমাম 3 ঘন্টা করে প্রোগ্রামিং প্র্যাকটিস করব।
// Ans:
let hours = 3;
let num = 0;
while (num < 10) {
  console.log(`Daily programing kori ${hours}`);
  num++;
}

//? Qs: 2:তুমি 1 থেকে 20 পর্যন্ত সংখ্যা লিখবা একটি while লুপ দিয়ে।
// Ans:
let num1 = 1;
while (num1 <= 20) {
  console.log(num1);
  num1++;
}

//? Qs: 3:while লুপ দিয়ে 50 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট কর।
// Ans:
let num2 = 50;
while (num2 <= 100) {
  console.log(num2);
  num2++;
}

//? Qs: 4:একটি while লুপ দিয়ে 1 থেকে 10 পর্যন্ত সংখ্যাগুলো প্রিন্ট করার সময় সংখ্যাগুলোকে 3 দিয়ে গুণ করে ফেলবি। তাহলে কিস্ত 3-এর নামটা হয়ে যাবে।
// Ans:
let num3 = 1;
while (num3 <= 10) {
  console.log(num3 * 3);
  num3++;
}

//? Qs: 5:একটি while লুপ দিয়ে 111 থেকে 110 পর্যন্ত সংখ্যাগুলো প্রিন্ট করার সময় সংখ্যাগুলোকে 2 দিয়ে ভাগ করে ফেলবি।
// Ans:
let num4 = 111;
while (num4 >= 110) {
  console.log(num4 / 2);
  num4--;
}
