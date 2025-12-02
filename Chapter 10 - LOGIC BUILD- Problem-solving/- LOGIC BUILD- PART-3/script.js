//? Qs: 1 :একটি অ্যারের জোড়সংখ্যাগুলোর গড় বা এভারেজ বের করার একটা ফাংশন লিখ এবং বিভিন্ন মান দিয়ে সেই ফাংশনকে চেক করো, ঠিক রেজাল্ট দিচ্ছে কি না।
// Ans:
const evenAvgNumber = num => {
  const even = [];
  let evenSum = 0;

  for (const evenNumbers of num) {
    if (evenNumbers % 2 === 0) {
      even.push(evenNumbers);
    }
  }

  for (const evenS of even) {
    evenSum = evenSum + evenS;
  }

  const evenLenthNum = even.length;
  const avg = evenSum / evenLenthNum;
  return Math.round(avg);
};

const even = [23, 23, 43, 4, 345, 45, 34, 3, 23, 12, 10, 3, 34, 45, 34];
const evenAvg = evenAvgNumber(even);
console.log('Average of the even numbers is:', evenAvg);

//? Qs: 2 :একটি অ্যারের বিজোড় সংখ্যাগুলোকে 2 দিয়ে গুণ করে একটি নতুন অ্যারে বানিয়ে নতুন অ্যারে রিটার্ন করো।
// Ans:
const arrOddDuble = arr => {
  const doubled = [];
  for (const oddNum of arr) {
    if (oddNum % 2 === 1) {
      doubled.push(oddNum * 2);
    }
  }
  return doubled;
};

const arr = [23, 23, 2434, 2, 12, 23, 2, 32, 32, 2, 23, 15];
const arrDuble = arrOddDuble(arr);
console.log(arrDuble);

//? Qs: 3 :একটি অ্যারেতে যদি বিজোড়সংখ্যা না থাকে, তবে "No odd numbers found" দেখানোর ব্যবস্থা করো। আর যদি বিজোড়সংখ্যা থাকে, তাহলে "Odd numbers found" রিটার্ন করো।
// Ans:

const oddNumberNotFound = arr => {
  for (const oddNum of arr) {
    if (oddNum % 2 === 1) {
      return 'Odd numbers found';
    }
  }
  return 'Not Odd Numbers Found';
};

const arr2 = [12, 1, 233, 3, 4, 56, 3];
const result = oddNumberNotFound(arr2);
console.log(result);

//? Qs: 4 :একটি অ্যারের বিজোড়সংখ্যাগুলোর গড় বের করে দশমিকের পরে দুই ঘর পর্যন্ত মান রিটার্ন করো।
// Ans:
const arrOddNum = arr => {
  const newArr = [];
  let sum = 0;
  for (const arrOddNum of arr) {
    if (arrOddNum % 2 === 1) {
      sum = sum + arrOddNum;
      newArr.push(arrOddNum);
    }
  }

  const arrLength = newArr.length;
  const avg = sum / arrLength;
  const avgTofixtNum = avg.toFixed(2);
  return avgTofixtNum;
};

const arr3 = [23, 34, 365, 46, 465, 45, 45, 23];
const arrOddNumResult = arrOddNum(arr3);
console.log(arrOddNumResult);

//? Qs: 5 :অ্যারেতে প্রতিটি বিজোড় সংখ্যা থেকে 1 বিয়োগ করে একটি নতুন অ্যারে বানিয়ে ফেল।
// Ans:

const arrMeinas1 = arr => {
  const newArr = [];
  for (const oddNumber of arr) {
    if (oddNumber % 2 === 1) {
      newArr.push(oddNumber - 1);
    }
  }
  return newArr;
};

const arr4 = [234, 1, 345, 546, 456, 457, 56, 75, 45, 4, 3];
const arrMeinas1Result = arrMeinas1(arr4);
console.log(arrMeinas1Result);

// Exta Problems

const oddAvgNumber = num => {
  const odd = [];
  let oddSum = 0;

  for (const oddNum of num) {
    if (oddNum % 2 === 1) {
      odd.push(oddNum);
    }
  }

  for (const oddSums of odd) {
    oddSum = oddSum + oddSums;
  }

  const conut = odd.length;
  const avg = oddSum / conut;
  return avg;

  // return { odd, oddSum };
  // return `odd numbers : ${odd} Total odd numbers Sum : ${oddSum}`;
};

const odd = [12, 23, 32, 233, 433, 34, 231, 23, 23];
const avg = oddAvgNumber(odd);
console.log(`Average of the odd numbers is`, avg);
