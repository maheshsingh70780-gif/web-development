//const { LiaEtsy } = require("react-icons/lia");

//Revision is completed.
console.log("I am a fullstack developer"); //kese bhi messege ko print kar sakte h console.log se
console.log("hello mahesh kumar");
console.log("hii who are you man");

//Variable declaration in javascript (js).
//Example messo deff categery m product hote h  un ka price change hota rehta  h  //


// Variables --> variables ek container hota hai jisme hum data/value store karte hain.
//deff data  ko store karne k leye contener chaye in contenr ko  verables kaha jata h
// Reserved keyword in java script --> console not made variable --> because it is reserved keyword in javascript kyuki ye --> pehle hi use ho chuka hai as console.log();

// Types of Variables in JavaScript : Three-(3) types.
//var --> Global variable. var variable can be re-declared & updated.Aglobal scope variable
//let --> local variable.
//const --> fixed or static variable.
// let ka use as --> { Age a = 10; Age a = 20; console.log(a) } ----> error dega kyuki let variable ko re-declare nahi kar sakte hain in same block. 
// let as --> { let a = 10; { let a = 20; console.log(a) } } --> 20 print hoga kyuki inner block me re-declare kiya gya hai.
// 

// #Datatype in javascript :- it is defined as the which type of data stored by variable is called datatypes.
// it is classified into two types:-
//  1).Primitive Datatypes:- it is used to store simple values. & it is fixed in size. eg. Number, String, Boolean, Null, Undefined, BigInt, Symbol.
//  2).Non-Primitive Datatypes :- it is used to store complex values. eg. objects, arrays, functions, etc.
//  Number, String, Boolean, Null, Undefined, BigInt, Symbol --> Primitive Datatypes.
//  
// used in chrome to see datatype of a variable as  --> typeof variableName; --> it will return the datatype of a variable. eg. typeof a; --> it will return number if a = 10;
// typeof name --> 'String' & typeof price = number;
// object --> it is the collection of data in key-values.
// eg. student as object --> { name: "Mhesh", age: 24, rollno: 2402309065, cgpa: 8.1, ispass: true, isfail: false } --> it is a collection of data in key-values.
//  name hai string, age hai number, rollno hai number, cgpa hai number, ispass hai boolean, isfail hai boolean.
// Note :- let --> update and re-declare ho sakta hai
//  const --> no updation nahi ho sakta update pr iskee object ki keys ko change kr sakte hain hm.
const HR = {
    name: "Mahesh Kumar",
    age: 24,
    EmployeeId: 707804,
    salary : 45000,
    tax : 25000,
    Laptop : "lenvo",
    Company : "TCS",
};
//  const hone ke baad object ki properties/keys ki values change kar sakte ho.
// keys ko kaise access karte hain object ke ander --> employee["name"] --> it will return "Mayank Kumar" & employee["age"] --> it will return 20 & employee["EmployeeId"] --> it will return 2402969 & employee["salary"] --> it will return 50000 & employee["tax"] --> it will return 2000 & employee["Laptop"] --> it will return "ASUS" & employee["Company"] --> it will return "Nvidia".
// employee["age"] = employee["age"] + 2;
// employee["name"] = "pavan  Kumar";   

// console.log(employee["name"]);
// console.log(employee["age"]);

// employee["name"] = "Bharat ";
// console.log(employee["name"]);    //Ab name ki value "bharat" ho jayegi


// let z = BigInt("432");
// let p = Symbol("Hii");


// const PI = 2.14;
// console.log(kite);
// const lets = 9.0;
// console.log(Lets);


const profile = {
username : "premachand",
follow : true,
posts : 234,
follow : 34.3000,
following : 42,
youtube : "Apna College"
};
// console.log(typeof profile["youtube"]);//check typeof keys in profile object.
const student = {
name: "Mahesh", 
age : 22,
ROllno : 2402309065,
cgpa : 8.1,
ispass : true,
isfail : false,   
};
student["age"] = student["age"] + 1; 
student["fullname"] = "Krishan jaat";// updates only keys of object student not object is stored in const datatype variable.
console.log(student["fullname"]);

Fullname = "Tony Stark";
let age1 = 50;
const pi = 3.14;
console.log(age1);
console.log(pi);
console.log(isfollowing);
isFollow = false;
console.log(isFollow);
console.log(x);
console.log(y);
console.log(price);
let age2= 56;
console.log(age2);

// // Ques 1). Create a const object called "product" to store information shown in the picture.
// //  
// // 

// const product ={
//     name : "Sandeep shara",
//     type : "iphone",
//     price : 100000,
//     color : "Black",
//     offer : 15,
//     isAvailable : true,
//     isUnavalable : false,
//     rating : "five star",
// }

// console.log(product);


// // Ques 2). Create a const object called "profile" to store information shown in the picture.
// const profile1 = {
//     username : "@mahesh123r",
//     posts : 739,
//     followers : 321,
//     following : 71,
//     isVerified : true,
//     bio : "I am a student of BCA 3rd year at SANSKRITI UNIVERSITY, Mathura, U.P. India.",
// }

// console.log(typeof profile1["username"]);
// console.log(typeof profile1);
// console.log(typeof profile1["posts"]);
// console.log(typeof profile1["followers"]);
// console.log(typeof profile1["isVerified"]);
// console.log(typeof profile1["bio"]);