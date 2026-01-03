// Undefined and Not Get

//? Qs: 1 : একটা if কন্ডিশনের মধ্যে 'false' লিখে চেক কর। 'false' কি সত্য টাইপের ভ্যালু হিসেবে আচরণ করে, নাকি করে না।
// Ans:
const bool = false;
if (bool) {
  console.log('ture type value');
} else {
  console.log('Not false');
}

//? Qs: 2 : একটা খালি অবজেক্টে { } কোনো প্রোপার্টি নাই। এইটা কী falsy একটা ভ্যালু। চেক কর if-এর ভিতরে শর্ত হিসেবে লিখে।
// Ans:
const obj = {};
if (obj) {
  console.log('object is ture');
} else {
  console.log('Object is not ture is false');
}

//? Qs: 3 :  একটা খালি অ্যারে [ ] কোনো উপাদান নাই। এইটা কি truthy ভ্যালু। চেক কর if-এর ভিতরে শর্ত হিসেবে লিখে।
// Ans:
const arr = [];
if (arr) {
  console.log('Arr is ture');
} else {
  console.log('Arr is not a ture is false');
}
//? Qs: 4 : একটা অ্যারে [ ] আছে, এইটার সামনে !! দিলে কী পাওয়া যাবে।
// Ans:
const array = [];
if (!!array) {
  console.log('man ture ki not ture');
} else {
  console.log('itz false');
}
