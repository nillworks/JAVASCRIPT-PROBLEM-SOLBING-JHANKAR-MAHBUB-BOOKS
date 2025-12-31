// Immutable String

//? Qs: 1 : একটা স্ট্রিং বানা city, যার মান হবে Chattogram। এবার indexOf দিয়ে বের কর, g কোন ইনডেক্সে আছে ।
// Ans:
const city = 'Chattogram';
const resultIndxOf = city.indexOf('g');
console.log(resultIndxOf);

//? Qs: 2 : একটা স্ট্রিং বানা division, যার মান হবে Sylhet। includes দিয়ে দেখ, এই স্ট্রিংয়ের মধ্যে y আছে কি না ।
// Ans:

const division = 'Sylhet';
const findLetters = division.includes('y');
console.log(findLetters);

//? Qs: 3 : const name = 'Rifat'; স্ট্রিংয়ের শেষ ক্যারেক্টার বের কর।
// Ans:
const name = 'Rifat';
const lest = name[name.length - 1];
console.log(lest);

//? Qs: 4 : একটা স্ট্রিং বানা language, যার মান হবে javascript। এবার indexOf দিয়ে চেক কর, rip কোন ইনডেক্সে শুরু হয়েছে।
// Ans:
const language = 'javascript';
const indexFind = language.indexOf('rip');
console.log(indexFind);

//? Qs: 5 : const text = 'Immutable'; স্ট্রিংয়ের দৈর্ঘ্য বের কর এবং চেক কর এটি mutable কি না।
// Ans:
const text = 'Immutable';
text[0] = 'x';
const width = text.length;
console.log(text, width);
