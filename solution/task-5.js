
/***
 * Note explanation for me to understand:
 let random = Math.random() * 1;                 [অর্থাৎ (0.x) সাথে ১ গুণ করলে সেটা শূন্যই থাকবে। [ x দ্বারা জিরো পয়েন্ট সামথিং কে বোঝানো হয়েছে ]]
 let random = Math.random() * 2;                 [এবার (0.x) সাথে ২ গুন্ করলে সেটা ১ এর ছোট কিছুও হতে পারে আবার ১এর চেয়ে বড় কিছুও হতে পারে। বাট যেহেতু Math.random () এই ফাংশনের ম্যান ০.১ থেকে সর্বোচ্চ ০.৯৯ পর্যন্ত কাজেই এক্ষেত্রে ২ দ্বারা গুন্ করলেও সেটা ১ এর চেয়ে ছোট হইতে পারে কিন্তু ২ এর চেয়ে বোরো বা ২ এর সমান কখনোই হবে না, যদিও হয় সর্বোচ্চ ১.৯৯ হইতে পারবে।]
 let random = Math.random() * 3;                 [একইভাবে Math.random() ফাংশনের সাথে ৩ গুন্ করলেও সেটা ১ এর ছোটও হতে পারে বাট সর্বোচ্চ ২.৯৯ এর বেশি হতে পারবে না। ]
 let random = (Math.random() * 3) + 1;           [এখন আমরা তো চাই যে এমন একটা সংখ্যা যেটা সর্বনিম্ন হয়তো ১ হবে নয়তো এর চেয়ে বড়। তাহলে জাস্ট Math.random() * 3 এর সাথে ১ যোগ করে দিলেই হবে, ফলে Math.random () এই ফাংশনের সর্বনিম্ন মান যদি ০.১ ও  হয়, তাহলেও (০.১ * ৩ ) = ০.৩ হবে। এবং যেহেতু এইটার সাথে ১ যোগ হবে ফলে হবে ১.৩।  অর্থাৎ সর্বনিম্ন আমরা ১ টা আরামসে পেয়ে যাবো। ] 
                                                 [দ্বিতীয়ত, এবার যদি আমরা চাই যে মানটা সর্বোচ্চ ৩ এর বেশি হতে পারবে না, তাহলে আমরা ইটা অটোমেটিকালি পেয়ে যাবো, কারণ আগে যেহেতু ১ যোগ করে দিসি ফলে এখন সর্বোচ্চ মান হবে ৩.৯৯। অথচ ১ যোগ করার আগে সর্বোচ্চ ২.৯৯ পর্যন্ত হয়তো। বুঝলে এবার পুরো বেপারটা ?]
 let random = Math.floor(Math.random() * 3) + 1; [এবার জাস্ট Math.floor () ব্যবহার করলেই শুধু পূর্ণ সংখ্যাটা কাউন্ট করবে, দশমিকের পরে আর কিছুই কাউন্ট করবে না। ব্যাপারটা সোজা না এখন ? একটু চিন্তা করলেই সোজা। ]
 ***/

//======= getting random number from 1 to 6
const randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);

// different way / more efficient way
function getRandomNumber(min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + 1;   //[এইখানে মনে হইতে পারে (max - min + 1) এটা কোই থেকে আসলো, কেন লিখলাম ? আসলে এটা কিছুই না, এটার মানে হইলো ]
    return randomNumber;
} 
const lottery = getRandomNumber(1, 6);
console.log(lottery);

// ============= task-5
//======= getting random number from 11 to 20
const randomNumber = Math.floor(Math.random() * 10) + 11; // [এবার এটা একটু চিন্তা করে দেখ, কঠিন কিছু না যদি তুমি উপরের নোটটা পড়ে কনসেপ্টটা বুঝে থাকো। ]
console.log(randomNumber);

// different way / more efficient way
function getRandomNumber(min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;  // [এতক্ষন যদি সবগুলো বুঝে থাকো তাহলে এটাও একটু চিন্তা করলে বুঝার কথা]
    return randomNumber;
} 
const lottery = getRandomNumber(11, 20);
console.log(lottery);


