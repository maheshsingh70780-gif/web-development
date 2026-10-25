// //start Event
console.log("this is tutorial eventin js")
// Events in JS (JavaScript)
// - Event: Jab kisi object ki state mein change hota hai,
//  use Event kehte hain.
// - Event ka use: Jab koi important change hota hai, toh 
// event code ko uske baare mein batata hai.

// JavaScript mein Events ke types
// 1.) Mouse Events: Mouse se hone wale actions, jaise click aur 
// double click.
// 2.) Keyboard Events: Keyboard se hone wale actions, 
// jaise keypress, keyup aur keydown.
// 3.) Form Events: Form submit karne jaise actions.
// 4.) Print Events: Print karne se related events aur bhi
//  bahut saare events hote hain.
// Example: Jab tum website par button click karte ho, toh 
// click event trigger hota hai aur JavaScript uske according
//  kaam kar sakti hai.


// --> Better way to use Event Handling in Javascript.
//  node.event = () => {
//    handle here.
//  }
// 

// ## 2). Event Object :-
// --> It is a special object that has details about the event.
//  --> All event handlers have access to the Event Object's
//  properties and methods.

// --> node.event = (e) => {
//  handle here
// }

// --> e.target, e.type, e.clientX, e.clientY . 

let btn1 = document.querySelector("#btn1");

// Event Listener 1
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - handler1");
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX, evt.clientY);
});

//    console.log("Handler 1"); // console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);  //26
// }

// 2)
 let div = document.querySelector("div");
 div.anmouseover = (evt) => {
     console.log("you are inside div");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, e.clientY);
    //  console.log("mouse over event is triggered");
 };


 // 3)Event listeners 
//   addEventListener() ka use kisi HTML element par event
//    ko handle karne ke liye hota hai
//  Node.addeventlistener(event,callback)  -->callback ko handler kahte
//  h


// -> Event listener ko remove karne ke liye use hota hai.
// -> Same event aur callback dena hota hai.
// -> Callback reference same hona chahiye.
//  Node.removeeventlistener(event,callback)

//note the callback reference should be same to remove

//event listener 1

//event listener 2
btn1.addEventListener("click",() => {
    console.log("button1 was clicked - handler2");

});
// event listener 3 
// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler3");
// });

// for removing ke liye variable me store karta h or callback 
// function ko.

const handler3 = () => {
    console.log("button1 was clicked - handler3");
};

btn1.addEventListener("click", handler3);

//event listener 4 
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - handler4");
});




//Let's Practice
// Q.1)Create a toggle button that changes 
// the screen to dark mode when clicked and light
//  mode when clicked again.
