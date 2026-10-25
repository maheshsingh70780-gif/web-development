//javascript
// Question 1: JavaScript se button banana hai aur usko style deni hai.

// Naya button ready kiya hai.

let newButton = document.createElement("button");
newButton.innerText = "Click me !";
newButton.style.color = "white";
newButton.style.backgroundColor = "red";
console.log(newButton);

document.querySelector("body").prepend(newButton);

// Question 2: Paragraph ki class ke saath practice karni hai.

// HTML se paragraph ko pakda hai, ab is par classList use kar sakte hain.
let para = document.querySelector("p"); // para ko select kiya hai.

// Nayi class add karne ke liye classList.add() use kar sakte hain.
 para.classList.add("newCls");

// Class hatane ke liye classList.remove() use hota hai.
para.classList.remove("para2");

// Nayi class check karne ke liye.
 console.log(para.className);

// Paragraph ka text change karne ke liye.
para.innerText = "I am a Final year BCA Student";

// Paragraph ke text ka color blue karne ke liye.
para.style.color = "blue";

// Paragraph ko body ke end mein add karne ke liye.
document.querySelector("body").append(para);
