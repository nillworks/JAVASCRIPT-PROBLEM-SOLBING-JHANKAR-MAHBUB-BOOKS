// Javascript Practicce Pat 3
//? Qs:in
// Ans:
const money = 300;
const popcornPrice = 40;
if (money >= 300) {
  console.log('Going to watch a movie');
  if (popcornPrice <= 50) {
    console.log('Buying PopCorn');
  } else {
    console.log('PopCorn is Expensive');
  }
} else {
  console.log('Home Alone.');
}

//? Qs:1:বন্ধু যদি দাওয়াত দেয়, তাহলে তার জন্মদিনের পার্টিতে তুই যাবি। আর যদি তোকে দাওয়াত না দেয়, তাহলে তাকে ফ্রেন্ডলিস্ট থেকে বের করে দিবি। আর যদি বন্ধু দাওয়াত দিয়ে ফেলে, তাহলে দাওয়াতে যাওয়ার সময় চেক করে দেখবি, পকেটে কত টাকা আছে। যদি 1000 টাকার বেশি থাকে, তাহলে বন্ধুর জন্য একটা গিফট নিয়ে যাবি। না হলে খালি হাতে যাবি।
// Ans:

const frinds = true;
const priceMany = 1100;
if (frinds) {
  if (priceMany >= 1000) {
    console.log(`I will buy a gift for my friend.`);
  } else {
    console.log('I will go empty-handed.');
  }
} else {
  console.log('I will remove him from my friend list.');
}

//? Qs:2:যদি তোর বাসায় মেহমান আসে, তাহলে জিজ্ঞেস করবি, তারা কি চা খাবে কি না। যদি চা খেতে চায়, তাহলে জিজ্ঞেস করবি, সাথে বিস্কুট খাবে কি না। না চাইলে বলবি, ‘শুধু চা হবে’। আর যদি চা ও না খেতে চায়, বলবি, ‘বসে বসে স্টার জলসা দেখুন’।
// Ans:

const tea = true;
const addedBiscuit = false;
if (tea) {
  if (addedBiscuit) {
    console.log(`Biscuit added`);
  } else {
    console.log('Your tea is ready');
  }
} else {
  console.log(`বসে বসে স্টার জলসা দেখুন`);
}

//? Qs:3:তুই একটা অ্যাপ বানাইছিস। প্রথমে চেক করবি, ব্যবহারকারীর অ্যাকাউন্ট অ্যাক্টিভ কি না। যদি অ্যাক্টিভ হয়, তার সাবস্ক্রিপশন চেক করবি। যদি প্রিমিয়াম হয়, তাকে প্রিমিয়াম ফিচার দেখাবি। না হলে বলবি, ‘ফ্রি ভার্সন দেখুন’।
// Ans:

const accountVerify = true;
const subscription = 'premium';
if (accountVerify) {
  if (subscription === 'premium') {
    console.log(`Welcome! You can use ${subscription} features.`);
  } else {
    console.log('Free Trail.');
  }
} else {
  console.log('Your Accounts Not Verify');
}

//? Qs:4:তোর বাসায় ফ্রিজে যদি খাবার থাকে, খাওয়ার ব্যবস্থা করবি। আর যদি না থাকে, চেক করবি, ফুড ডেলিভারি অ্যাপ কাজ করছে কি না। কাজ করলে অর্ডার দিবি, না হলে বলবি, ‘আজ আমি রোজা’।
// Ans:
const frize = false;
const oderFrotes = false;

if (frize) {
  console.log('cock Now');
} else {
  if (oderFrotes) {
    console.log('Fordes Dalevare app is working.');
  } else {
    console.log('Im roja Now.');
  }
}

//? Qs:5:দেখ, তুই একটা পার্টি করবি। প্রথমে দেখবি, পার্টিতে 100 জনের বেশি গেস্ট আসছে কি না। যদি আসে, তাহলে চেক করবি, সবাই গিফট আনছে কি না। যদি আনে, বলবি, ‘Lets party all night.’ না আনলে বলবি, ‘I will party with myself.’
// Ans:

const gastNo = 20;
const giftAllMambers = true;
if (gastNo > 100) {
  if (giftAllMambers) {
    console.log('Lets party all night.');
  } else {
    console.log('I will party with myself');
  }
} else {
  console.log('Not enough guests for the party.');
}
