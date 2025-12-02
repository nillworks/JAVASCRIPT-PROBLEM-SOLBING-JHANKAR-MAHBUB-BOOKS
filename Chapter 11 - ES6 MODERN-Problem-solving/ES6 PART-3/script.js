//? Qs:1:টেমপ্লেট স্ট্রিংয়ের মাধ্যমে দুটি সংখ্যার বিয়োগফল দেখাও। যেমন: The difference between 100 and 20 is 80।
// Ans:
const a = 20;
const b = 30;

const difference = `The difference between ${a} and ${b} is ${a - b}`;
console.log(difference);

//? Qs:2:একটি অবজেক্ট employee তৈরি কর, যেখানে name, age এবং salary থাকবে। টেমপ্লেট স্ট্রিং দিয়ে তার নাম, বয়স এবং স্যালারি দেখাও।
// Ans:

const employee = { name: 'shipon roy', age: 19, salary: 19900 };
const result = `Student Name: ${employee.name} Age: ${employee.age} Salary:${employee?.salary}`;
console.log(result);

//? Qs:3: fruits নামে একটি অ্যারে তৈরি কর। টেমপ্লেট স্ট্রিং ব্যবহার করে দেখাও, ওই অ্যারের তৃতীয় ফলটি কী।
// Ans:
const fruits = ['aple', 'orenge', 'Benena', 'works'];
const favaretFruits = `my Favaret Fruits ${fruits[2]}`;
console.log(favaretFruits);

//? Qs:4: const a = 50 এবং const b = 10 থাকলে টেমপ্লেট স্ট্রিং দিয়ে দেখাও The division of a and b is 5।
// Ans:
const x = 50;
const y = 20;
const division = `The division of x and y is ${x / y}`;
console.log(division);

//? Qs:5:const person = { firstName: "Amit", lastName: "Kumar" };
//টেমপ্লেট স্ট্রিং ব্যবহার করে দেখাও Full Name: Amit Kumar।

// Ans:
const nameObj = { fristName: 'shipon', lastName: 'roy' };
const stringIs = `fullNameIs:${nameObj.fristName} ${nameObj.lastName}`;
console.log(stringIs);
//? Qs:6:একটি অ্যারে animals = ["Cat", "Dog", "Elephant"] তৈরি কর এবং টেমপ্লেট স্ট্রিং ব্যবহার করে দেখাও My favorite animals are Cat, Dog, Elephant।
// Ans:
const animals = ['Cat', 'Dog', 'Elephant'];
const myFavarictAnimals = `My favorite animals are ${animals[0]} ${animals[1]} ${animals[2]}`;
console.log(myFavarictAnimals);

//? Qs:7: তোমার কাছে student নামে একটি অবজেক্ট আছে, সেই অবজেক্টের মধ্যে তার নাম আছে, তার বয়স আছে এবং তার তিনটা সাবজেক্টের মার্কস দেওয়া আছে results নামক একটি প্রোপার্টির মধ্যে। ওই তিনটা মান একত্রে যোগ হবে এবং টেমপ্লেট স্ট্রিং দিয়ে দেখাও স্টুডেন্টের নাম, তার তিনটা সাবজেক্টের রেজাল্টের যোগ দেখানো। গড় দেখানোর জন্য তিনটা সাবজেক্টের মান যোগ করে তিন দিয়ে ভাগ করবে।
// Ans:

const studentId = { name: 'Shipon Roy', age: 20, result: [60, 70, 80] };

const total = studentId.result[0] + studentId.result[1] + studentId.result[2];
const AvgResult = total / studentId.result.length;

const tampletStringIs = `StudentName: ${studentId.name} TotalResult: ${total} AvgResult: ${AvgResult}`;
console.log(tampletStringIs);
