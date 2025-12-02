// LOGIC BUILD-PART-1

//? Qs:1:তুই জানিস, 1760 গজে একমাইল। তাহলে একটা ফাংশন লিখে ফেল, যাতে বের করতে পারিস, 13 মাইলে কত গজ।
// Ans:
function mileToYard(miles) {
  const yards = miles * 1760;
  const result = `${miles} miles = ${yards} yards.`;
  return result;
}
const inputMiles = 13;
const convertedValue = mileToYard(inputMiles);
console.log(convertedValue);

//? Qs:2:শুনতে কঠিন, কিন্তু চিন্তা করলে সহজ একটা বিষয় হচ্ছে, 1 কিলোওয়াট ঘণ্টা মানে 860 কিলা ক্যালোরি। তাহলে একটা ফাংশন লিখে বের কর। হোয়াটে যেকোনো কিলোওয়াট ঘণ্টা দিলে সে সেটাকে কিলা ক্যালোরিতে কনভার্ট করে দিবে।
// Ans:
function kilowattToCalorie(kilowatts) {
  const calories = kilowatts * 860;
  const result = `${kilowatts} kilowatt-hours = ${calories} kilocalories.`;
  return result;
}
const inputKilowatt = 62;
const convertedValues = kilowattToCalorie(inputKilowatt);
console.log(convertedValues);

//? Qs:3:ঘণ্টাকে সেকেন্ডে কনভার্ট করতে একটা ফাংশন বানাও। এক ঘণ্টাতে কত মিনিট বা এক মিনিটে কত সেকেন্ড। সেটা আমি বলে দিচ্ছি না। তুই চিন্তা করে বের কর এবং আমাকে একটা ফাংশন লিখে দে, যেটা ঘণ্টা দিলে সেটাকে সেকেন্ডে কনভার্ট করে দিবে।
// Ans:
function hoursToSecond(hours) {
  const minutes = hours * 60;
  const seconds = minutes * 60;
  const result = `${hours} hours = ${minutes} minutes = ${seconds} seconds.`;
  return result;
}
const hours = 23;
const convertedValue2 = hoursToSecond(hours);
console.log(convertedValue2);

//? Qs:4:সেন্টিমিটারকে মিটারে কনভার্ট করার জন্য একটা ফাংশন তৈরি কর। তারপর বিভিন্ন মান নিয়ে সেই ফাংশনকে টেস্ট কর। আর তুই তো জানিস, 1 মিটার = 100 সেন্টিমিটার।
// Ans:
function meterToCentimeter(meters) {
  const centimeters = meters * 100;
  const result = `${meters} Meters = ${centimeters} Centimeter.`;
  return result;
}

const meters = 22;
const ConvertValuSmeterToCentimeter = meterToCentimeter(meters);
console.log(ConvertValuSmeterToCentimeter);

//? Qs:5:ইঞ্চিকে সেন্টিমিটারে কনভার্ট করার ফাংশন লিখ। 1 ইঞ্চি = 2.54 সেন্টিমিটার।
// Ans:
function EnchToCentimeters(ench) {
  const centimeters = ench * 2.54;
  const result = `${ench} Ench = ${centimeters}`;
  return result;
}
const ench = 212;
const valueC = EnchToCentimeters(ench);
console.log(valueC);
//? Qs:6:যদি 1 পাউন্ড = 0.453 কিলোগ্রাম হয় তাহলে পাউন্ড থেকে কিলোগ্রামে কনভার্ট করার একটা ফাংশন লিখে ফেল।
// Ans:
function powderToClograms(powder) {
  const clograms = powder * 0.453;
  const result = `${powder} Powder = ${clograms} clograms.`;
  return result;
}
const powder = 2212;
const outputConvert = powderToClograms(powder);
console.log(outputConvert);

//? Qs:7:গজকে মিটারে কনভার্ট করার জন্য একটা ফাংশন তৈরি কর। 1 গজ = 0.91 মিটার।
// Ans:
function yardsToMeters(yards) {
  const meters = yards * 0.91;
  const result = `${yards} Yards = ${meters}`;
  return result;
}
const yards = 212;
const outptuyardsToMeters = yardsToMeters(yards);
console.log(outptuyardsToMeters);

//! Extra Problems .
function inchToFeet(inch) {
  const convertFeet = inch / 12;
  const feetNumber = parseInt(convertFeet);
  const inchRemaining = inch % 12;
  const result = `${feetNumber} Ft ${inchRemaining} inch.`;
  return result;
}
const inch = 100;
const outputInchToFeet = inchToFeet(inch);
console.log(outputInchToFeet);

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  const wholeKilo = Math.floor(kilo);
  const decimalPart = kilo - wholeKilo;
  const result = `${wholeKilo} : ${decimalPart.toFixed(2)}`;
  return result;
}

const miles = 2;
const outputKloMile = mileToKilometer(miles);
console.log(outputKloMile);
