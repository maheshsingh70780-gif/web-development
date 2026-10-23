// DOM Part 2 - Document Object Model
console.log("DOCUMENT OBJECT MODEL PART-02");

// DOM Manipulation mein hum HTML elements ke saath kaam karte hain.

// Attributes se related methods
// getAttribute() se element ki existing value check kar sakte hain.
// setAttribute() se attribute ki value update kar sakte hain.

let div = document.querySelector("div");
console.log(div);

// Div ke id attribute ko read kiya hai.
let id = div.getAttribute("id");
console.log(id); // Div ki id print hogi.

// Name attribute ki value check kar rahe hain.
let name = div.getAttribute("name");
console.log(name); // Div ka name print hoga.

//getAttribute method 
// Page ke first paragraph ko select kiya hai
let para = document.querySelector("p");
console.log(para.getAttribute("class")); // Paragraph ki class milegi.

//paragraph ki class ko change karne ka example
let para1= document.querySelector("p");

// Is line se paragraph ki purani class ki jagah newClass aa jayegi.
console.log(para.setAttribute("class", "newClass"));

// JavaScript se CSS properties change karna
let div1 = document.querySelector("div");
div1.style.backgroundColor = "green";// Div ka background color blue kar diya ha

