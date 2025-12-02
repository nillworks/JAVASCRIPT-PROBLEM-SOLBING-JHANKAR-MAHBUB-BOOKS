// Practice Pat 4 OBJECT

//? Qs:1 :ধর, তোর একটা headphone অবজেক্ট আছে, যার মধ্যে brand: "Sony", price: 3000, আর color: "red"। Object.freeze() মেথড ব্যবহার করে অবজেক্টটা freeze কর। এরপর আবারও নতুন প্রোপার্টি যোগ করতে চেষ্টা কর। দেখ, কাজ করে কি না।
// Ans:
const headPhone = {
  brand: 'sony',
  price: 3000,
  color: 'red',
  // Propota change korar chsta.
};
Object.freeze(headPhone);
headPhone.primaryColor = 'blue'; // not chanege
console.log(headPhone);

//? Qs:2 :const player = { name Messi, goals 800, club Inter Miami }; Object.freeze() মেথড ব্যবহার করে অবজেক্টটা ফ্রিজ কর। তারপর নতুন প্রোপার্টি যোগ করে দেখ, কাজ করে কি না।
// Ans:
const player = { name: 'Masi', goals: 800, club: 'Inter Miami' };
Object.freeze(player);
player.price = '200';
console.log(player);

//? Qs:3 :const book = { title Harry Potter, author JK Rowling, pages 500 }; Object.seal() ব্যবহার করে অবজেক্টটা সিল কর। তারপর author প্রোপার্টি চেঞ্জ করে দেখ।
// Ans:
const book = { title: 'Harry potter', author: 'JK Rowling', pages: 500 };
Object.seal(book);
book.author = ' is working';
console.log(book);

//? Qs:4 :একটা gadget অবজেক্ট বানাও, যার মধ্যে name iPhone, price 120000, আর color Black থাকবে। delete ব্যবহার করে price ডিলিট কর।
// Ans:
const gadget = { name: 'iPhone', price: 120000, color: 'black' };
delete gadget.price;
console.log(gadget);

//? Qs:5 :একটা animal অবজেক্ট বানাও, যার মধ্যে name Tiger, location Sundarban থাকবে। এখন এমন কিছু কর, যাতে টাইগারের লোকেশন চেঞ্জ করা না যায়।
// Ans:
const animal = { name: 'Tiger', location: 'Sundarban' };
Object.freeze(animal);

//? Qs:6 :const food = { name Pizza, price 500, size Large }; এমন কিছু কর, যাতে food-এ নতুন প্রোপার্টি যোগ করা যাবে না। তবে চাইলে দাম বাড়ানো বা কমানো যাবে।
// Ans:
const food = { name: 'pizza', price: 500, size: 'Large' };
Object.seal(food);
food.price = 200;
// food.priceDs = 2002;
console.log(food);
