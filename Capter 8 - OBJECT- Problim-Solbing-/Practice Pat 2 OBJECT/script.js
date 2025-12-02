// Practice Pat 2 OBJECT
'stice';
//? Qs:1 :একটা player অবজেক্ট তৈরি করবি। নাম, বয়স, স্পোর্টস, টিম ইত্যাদি প্রোপার্টি থাকবে। তারপর সেই অবজেক্ট থেকে dot notation দিয়ে তার টিমের নাম console কর।
// Ans:
const player = {
  teamName: 'Rsk Sqards',
  playerName: ['rsk bled', 'kutous', 'fileker', 'najud'],
  age: [20, 18, 17, 20],
};
console.log(player.teamName);

//? Qs:2 :একটা laptop অবজেক্ট তৈরি কর। তার brand, price, hardDisc, ram, screenSize ইত্যাদি প্রোপার্টি থাকবে। dot notation দিয়ে screenSize বের করে দেখ।
// Ans:
const laptop = {
  brind: 'Mack Bock Ar',
  price: 230000,
  dardDice: 512,
  Rem: 32,
  screenSize: 15.6,
};
console.log(laptop.screenSize);

//? Qs:3 :তোর একটা প্রিয় জায়গা আছে, যার নাম favPlace। তার মধ্যে কিছু তথ্য আছে। যেমন, name: "Cox’s Bazar", distance: "400km", আর popularity: "high"। bracket notation দিয়ে popularity প্রোপার্টি console log কর।
// Ans:
const favPlace = {
  name: 'cox s Bazar',
  distance: '400km',
  popularity: 'high',
};
console.log(favPlace['popularity']);

//? Qs:4 :তুই একটা phone অবজেক্ট বানাস। সেখানে brand, color, price প্রোপার্টি থাকবে। ব্রান্ড দিস Nokia, কালার black আর দাম 5000। bracket notation দিয়ে দাম বের কর।
// Ans:
const phone = {
  name: 'Nokia',
  price: 5000,
  color: 'black',
};
console.log(phone['price']);

//? Qs:5 :একটা library অবজেক্ট তৈরি কর। তার মধ্যে name Public Library, location Dhaka আর books: 5000 প্রোপার্টি থাকবে। dot notation দিয়ে location বের কর।
// Ans:
const library = {
  name: 'public library',
  location: 'Dhaka',
  books: 5000,
};
console.log(library.location);

//? Qs:6 :একটা movie অবজেক্ট বানাস। যার title Inception, director Nolan, rating 9। bracket notation দিয়ে rating প্রোপার্টি বের কর।
// Ans:
const movie = {
  title: 'inception',
  director: 'shipon',
  rating: 9,
};
console.log(movie['rating']);

//? Qs:7 :একটা college অবজেক্ট বানাস। যার নাম ndc, প্রতিষ্ঠিত (established) 1949, গ্রুপ (groups) ['Science', 'Arts', 'Commerce']। এবার তোর কাজ হবে সেখান থেকে groups-এর মান অর্থাৎ ইনডেক্স ১-এর মান বের করা।
// Ans:
const college = {
  name: 'ndc',
  established: 1949,
  groups: ['Science', 'arts', 'commerce'],
};
console.log(college.groups[1]);

//? Qs:8 :একটা family অবজেক্ট বানাস। যার মধ্যে প্রোপার্টি হবে father। সেটার মানও আবারকটা অবজেক্ট এবং ফাদারের মধ্যে তোর আব্বুর নাম, বয়স এবং পেশা (profession) থাকবে। একইভাবে family অবজেক্টে mother নামে প্রোপার্টি থাকবে, সেই প্রোপার্টির মানও আবারকটা অবজেক্ট। আর mother-এর অবজেক্টের মধ্যে তোর আম্মুর নাম, বয়স আর পেশা থাকবে। এবার কাজ কর, mother-এর age প্রোপার্টি বের কর। তারপর তোর আব্বুর age-এর মান বের কর। এবার দুইটা age-এর যোগফল বের কর এবং সেটা আউটপুট হিসেবে দেখ।
// Ans:
const family = {
  father: {
    name: 'Sapan Kumar Roy',
    age: 40,
    profession: 'auto gari driver',
  },
  mother: {
    name: 'Jointy Roy',
    age: 35,
    profession: 'house Wife',
  },
};

const matherAgeis = family.mother.age;
const fatherAgeis = family.father.age;
const totalAge = matherAgeis + fatherAgeis;
console.log(totalAge);

const keysCkak = Object.keys(college);
console.log(keysCkak);
const valuseChack = Object.values(family);
console.log(valuseChack);

if ('brind' in laptop) {
  console.log(`ture`);
} else {
  console.log('fales');
}

const into = Object.entries(laptop);
console.log(into);

/*
// exta pratce

const person = {
  name: 'Shipon Roy',
  age: 25,
  profession: 'developer',
  salary: 25000,
  married: false,
  'fav places': ['bandarban', 'saintmartin', 'kuakata'],
};
console.log(person['fav places']);
console.log(person['fav places']);

const college = {
  name: 'Dhamri Herdnce High school & college',
  class: [11, 12],
  event: ['science fair', 'shipon roy', '21', 'feb'],
  unique: {
    color: 'bule',
    result: {
      gpa: 5,
      'merit R': 'top',
    },
  },
};

*/
