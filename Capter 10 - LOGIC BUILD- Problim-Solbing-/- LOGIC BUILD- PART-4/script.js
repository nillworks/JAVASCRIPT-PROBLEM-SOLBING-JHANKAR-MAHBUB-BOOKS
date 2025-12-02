//?  Qs: 1:
// Ans:
const numbers = [1, 5, 61, 5, 87, 75, 81, 61, 81];

const noDublicateNum = nuArr => {
  const nwArr = [];

  for (const itmes of nuArr) {
    if (nwArr.includes(itmes) === false) {
      nwArr.push(itmes);
    }
  }

  return nwArr;
};
const resultNoD = noDublicateNum(numbers);
console.log(resultNoD);

// Extra Problems
const students = [
  'abul',
  'promit',
  'shipon',
  'promit',
  'salime',
  'salime',
  'shovo',
  'shovo',
  'nill',
];

const noDublicate = arr => {
  const newUniqueArr = [];
  for (const uniqe of arr) {
    if (newUniqueArr.includes(uniqe) === false) {
      newUniqueArr.push(uniqe);
    }
  }
  return newUniqueArr;
};

const uniqueArr = noDublicate(students);
console.log(uniqueArr);
