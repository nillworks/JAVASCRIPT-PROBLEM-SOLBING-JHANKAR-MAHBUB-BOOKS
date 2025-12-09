// Reset Part 2

//? Qs:1:একটি product অবজেক্ট আছে const product = { name: "Laptop", price: 50000, brand: "Dell" }; এটা থেকে name বাদে বাকি প্রোপার্টিগুলো আলাদা একটি অবজেক্টে রাখ।

// Ans:
const product = { name: 'laptop', price: 50000, brand: 'Dell' };
const { name: names, ...extraDetailsProduct } = product;
console.log(names);
console.log(extraDetailsProduct);

//? Qs:2:const project = { id: 101, title: "Web App", budget: 3000, client: "Tech Corp" }; এখানে title বাদে বাকি প্রোপার্টিগুলো আলাদা একটি অবজেক্টে রাখ।

// Ans:
const project = {
  id: 101,
  title: 'Web App',
  budget: 3000,
  client: 'Tech Corp',
};
const { title, ...extraDetailsProject } = project;
console.log(title);
console.log(extraDetailsProject);

//? Qs:3:const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React" }; এখানে language আর specialty আলাদা প্রোপার্টি হিসেবে রেখে বাকিগুলো details নামে একটি অবজেক্টে রাখ।

// Ans:
const programmer = {
  name: 'sophia',
  language: 'javascript',
  experience: 5,
  specialty: 'Frontend',
  tools: 'React',
};
const { language, specialty, ...details } = programmer;
console.log(language);
console.log(specialty);
console.log(details);

//? Qs:4:একটি সংখ্যার array আছে [10, 20, 3, 30, 300, 3000] এটা থেকে প্রথম দুইটা উপাদান বাদে বাকিগুলো আলাদা আরেকটা array-এর মধ্যে রাখ।

// Ans:
const array = [10, 20, 3, 30, 300, 3000];
const [frists, sccrend, ...srcArray] = array;
console.log(frists, sccrend);
console.log(srcArray);

//? Qs:5:একটি function লেখ, যেটা দুইটা প্যারামিটার বাদে বাকি সব প্যারামিটারকে rest অপারেটর দিয়ে ধরে রাখবে। ফাংশনটি সেই বাকি প্যারামিটারগুলোর যোগফল রিটার্ন করবে।

// Ans:
function returnParameters(num1, num2, ...rests) {
  let sum = 0;
  for (const num of rests) {
    sum = sum + num;
  }
  return sum;
}
console.log(returnParameters(2, 3, 34, 56));

//? Qs:6: একটি ফাংশন লেখ, যে সব প্যারামিটারকে rest অপারেটর দিয়ে একটি array-তে রাখবে, তারপর আইটেমগুলো যোগ করবে। ফাংশনটি array-এর উপাদানগুলোর গড় রিটার্ন করবে।
// Ans:
const averageReturn = (...rests) => {
  let sum = 0;
  for (const number of rests) {
    sum = sum + number;
  }
  const avg = sum / rests.length;
  return avg;
};
console.log(averageReturn(10, 23));

// Exta problems

const numbers = [23, 32, 45, 46, 567, 668];
const [frist, src, ...extraNumber] = numbers;
console.log(frist, src);
console.log(extraNumber);

const person = { name: 'Alice', age: 25, city: 'Dhaka', country: 'bangladash' };
const { name, age, ...extraDetails } = person;
console.log(name, age);
console.log(extraDetails);
