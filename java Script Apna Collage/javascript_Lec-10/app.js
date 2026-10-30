// Prototypes in JavaScript
// 1. JavaScript Object

// JavaScript mein object ek entity hoti hai jiske paas:
// - State: Object ki properties ya data.
// - Behavior: Object ke methods ya functions.
//Example.
// const ka use object create karne ke liye kiya hai
const student = {
    name: "Mahesh kumar, Mayank kumar",   // Student ka name store kiya hai
    marks: 94.4, // Student ke marks store kiye hain
    printMarks: function() {      // printMarks ek method (function) hai
        console.log("mark =", this.marks);  // this.marks current object ke marks ko access karta hai
    },
};

// Method ko call kiya hai
student.printMarks();

// Output: mark = 94.4

// Important points (Notes):
// 1. const – Object declare karne ke liye.
// 2. name – Student ka naam (property).
// 3. marks – Student ke marks (property).
// 4. printMarks() – Object ka method.
// 5. this – Current object ko refer karta hai.
// 6. this.marks – Current object ki marks property access karta hai.
// Yaad rakhna: Object ke andar variables ko Properties aur functions ko Methods kehte hain.
