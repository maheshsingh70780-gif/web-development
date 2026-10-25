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

// Ab background ko blue shade mein change kar diya.
div.style.backgroundColor = "red";

// Is property se div ko temporarily hide kar sakte hain.
// div.style.visibility = "hidden";

// Div ke text ka size bada kiya hai.
div.style.fontSize = "26px";

// Div ke andar ka text replace kar diya hai.
//div.innerText = "Hello!";


// DOM mein naye elements add karna bhi possible hai.
// Ek button JavaScript se create kiya.
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

// Naye element ko add karne ke kuch important methods:
// append() element ko parent ke andar end mein lagata hai.
// prepend() element ko parent ke andar starting mein lagata hai.
// before() selected element se pehle naya element rakhta hai.
// after() selected element ke baad naya element rakhta hai.


// Paragraph ko select karke button ki position decide kar rahe hain.
 let p2 = document.querySelector("div");

// Button ko paragraph ke end mein add karne ke liye.
p2.append(newBtn);

// Button ko paragraph ki starting mein lagane ke liye.
//p2.prepend(newBtn);

// Paragraph se pehle button dikhane ke liye.
//p2.before(newBtn);

// Paragraph ke turant baad button add kiya hai.
p2.after(newBtn);


// Ab ek heading element create karte hain.
 let newHeading = document.createElement("h1");
 newHeading.innerHTML = "<i>Hi, I am new!</i>";    // Heading mein italic formatting wala text dala hai.
 document.querySelector("body").prepend(newHeading); // Heading ko body ke start mein insert kiya hai.

// // Page ke first paragraph ko remove kar rahe hain.
let para3 = document.querySelector("p");
 para3.remove();
newHeading.remove();  // Jo heading banayi thi, use bhi hata diya.

// // MDN par appendChild() aur removeChild() ke examples dekh sakte hain.
// // Ye methods parent aur child elements ke saath kaam karte hain.


// // Practice Question 1:
// // JavaScript se ek button banao aur us par "click me" likho.
// // Background red aur text white rakho.
// // Button ko body ke sabse upar add karo.


// // Practice Question 2:
// // HTML mein ek paragraph banao aur usko class do.
// // CSS mein ek aur class banakar paragraph par apply karo.
// // Check karo ki setAttribute() se purani class replace hoti hai ya nahi.
// // Multiple classes ko manage karne ke

