console.log("DOM --> Document Object Model");

// ## Start DOM
// DOM padhne ke liye ek folder banao aur usmein 3 files rakho:
// 1. HTML file --> Website ka structure banane ke liye.
// 2. CSS file --> Website ko style karne ke liye.
// 3. JavaScript file --> Website mein functionality add karne ke liye.
//
// HTML file ko CSS aur JavaScript ke saath connect karna hota hai.
//
// DOM mein hum JavaScript ki help se HTML elements ko access karte hain
// aur website par dynamically changes kar sakte hain.
//
// ## The 3 Musketeers of Web Development
// HTML       --> Structure
// CSS        --> Style
// JavaScript --> Logic aur Functionality
//
// Starter Code:
// <link> tag HTML ko CSS se connect karta hai.
// <script> tag HTML ko JavaScript se connect karta hai.
//
// JavaScript ki separate file banane ke benefits:
// 1. Code readable aur easy to understand hota hai.
// 2. Code ko maintain karna easy hota hai.
// 3. Code ko alag-alag files mein manage kar sakte hain.
// 4. Browser caching se performance improve ho sakti hai.

// alert("Apna College");

// ## Window Object
// Window object browser ki open window ko represent karta hai.
// Ye browser ka global object hai, jise browser automatically create karta hai.
//
// Window object mein bahut saari properties aur methods hoti hain.
//
// console.log() window object ka method hai.
// Isliye console.log() aur window.console.log() dono same kaam karte hain.
//
// Example:

//console.log("Hello World");          // Console mein message print karega.
//window.console.log("Hello World2");  // Wahi kaam karega.
//window.alert("Hello World3");        // Browser mein alert show karega.

// Browser console mein window object ki help se DOM access kar sakte hain.
//
// document, window object ki property hai.
// console.log() --> Output print karne ke liye.
// console.dir() --> Object ki properties aur methods inspect karne ke liye.
//
// Example:
// console.dir(window.document);

// ## What is DOM?
// DOM ka full form Document Object Model hai.
//
// Jab browser HTML page load karta hai, tab woh uska DOM tree create karta hai.
// Is tree mein HTML elements nodes ke form mein represent hote hain.
//
// JavaScript DOM ki help se HTML elements ko access aur manipulate karti hai.
//
// ## DOM Tree Structure
//  ==================================================================
//             |    window  |   <---tree ka ander har ak element ko node kaha jata h or har ak node obj h 
// ============|======|======|========================================
//                    |
//              ===============
//             ||   document   ||
//=============  =============  ==========================================
//                    |
//===============||============||========================================
//               ||    html    ||
//===============|| ===========||=====================================
//                       |
//     -------------------------------------------
//     |                                          |
//   ============                         ================
//  |  head     |                         |   body        |
//  ============                          =================
//      |                                        |
// =================================      ===========================
//  |         |         |           |      |                         |
// =====    =======   ======   ======    ======                    ======
//| meta |  |meta |  |title |  |link |   |div |                   |script|
//========  ======   =======    ======   ======                   ========        
//                                         |
//                               ==========================
//                              |        |       |        |
//                           =====     ====     ====     ====
//                           |img|    |h1 |     |p |     |div|
//                           ====      ====     =====    =====
//
//
//
// Ye ek example structure hai. Actual DOM tree HTML code par depend karta hai.
//
// ## Summary
// DOM HTML document ko JavaScript ke through access karne ka tarika hai.
// DOM ki help se hum HTML elements ka text, style aur structure change kar sakte hain.
//
// Example:

console.log(document.body.childNodes[1]);

// Is code se body ka second child node access hoga.
// Yaad rakho, childNodes mein text nodes aur comments bhi ho sakte hain.
//
// Website mein Dark Mode aur Light Mode ka option bhi DOM ki help se
// implement kar sakte hain.
//
// Example:
// document.body.style.background = "green";
// Isse body ka background green ho jayega.
//
// document.body.childNodes[3].innerText = "abcd";
// Isse selected child node ka text change hoga.
// Kaunsa element select hoga, ye HTML ke structure par depend karta hai.
//
// HTML aur CSS files ko manually edit kiye bina bhi JavaScript se
// website mein dynamically changes kar sakte hain.
//
// Dynamic changes + Manipulation = DOM ka important use.

console.dir(document.body); // Body element ki properties inspect karega.
console.dir(document.head); // Head element ki properties inspect karega.
// console.log(document.body);

// Note:
// JavaScript ko HTML elements tabhi milenge jab woh DOM mein load ho chuke hon.
// Script ko body ke end mein rakh sakte hain ya defer attribute use kar sakte hain.


// ## DOM Manipulation
// DOM Manipulation ka matlab HTML elements ko select karna aur unmein
// JavaScript ki help se changes karna hai.
//
// React seekhne ke liye bhi DOM ki basic understanding useful hai.


// ## 1. Selecting Elements by ID
// Syntax:
// document.getElementById("myId");
//
// ID se hum ek particular HTML element select karte hain.
// CSS mein ID ko # se select karte hain, lekin getElementById() mein
// sirf ID ka naam likhte hain.
//
// Example:
// document.getElementById("heading");
//
// ID ideally har element ke liye unique honi chahiye.
//
// Ek element select kar rahe hain, isliye method ke naam mein Element hai.

let heading = document.getElementById("heading"); // ID heading wala element select karega.

console.log(heading); // Selected element console mein show karega.
console.dir(heading); // Element ki properties inspect karne mein help karega.

// Agar given ID ka element nahi milta, toh null return hota hai.


// ## 2. Selecting Elements by Class
// Syntax:
// document.getElementsByClassName("myClass");
//
// Class ke through hum multiple HTML elements select kar sakte hain.
// CSS mein class ko dot (.) se select karte hain.
// Lekin getElementsByClassName() mein dot nahi lagate.
//
// Example:El

let headings = document.getElementsByClassName("headings");

console.log(headings);
console.dir(headings);

// Ye HTMLCollection return karta hai.
// HTMLCollection array jaisi hoti hai.
// Ismein indexes aur length property hoti hai, lekin ye normal array nahi hai.
//
// Isliye ismein directly push() aur pop() jaise array methods use nahi kar sakte.
//
// Agar matching class nahi milti, toh empty HTMLCollection return hoti hai.


// ## 3. Selecting Elements by Tag Name
// Syntax:
// document.getElementsByTagName("p");
//
// Is method se hum kisi HTML tag ke saare matching elements select kar sakte hain.
// Jaise saare paragraph elements ko select karna.
//
// Note: Method ka correct naam getElementsByTagName() hai.

let parahs = document.getElementsByTagName("p");

console.log(parahs);
console.dir(parahs);

// Ye bhi HTMLCollection return karta hai.


// ## Using Query Selector
// querySelector() aur querySelectorAll() CSS selectors ka use karte hain.
//
// CSS selector likhne ke rules:
// "p"        --> Tag select karne ke liye.
// "#heading" --> ID select karne ke liye.
// ".headings"--> Class select karne ke liye.


// ## 4. querySelector()
// Syntax:
// document.querySelector("selector");
//
// Ye pehla matching element return karta hai.
// Agar matching element nahi milta, toh null return hota hai.

let element = document.querySelector("p");

console.log(element);
console.dir(element);

// Example:
// document.querySelector("p") --> Pehla paragraph select karega.
// document.querySelector("#heading") --> ID heading wala element.
// document.querySelector(".headings") --> Class headings wala pehla element.


// ## 5. querySelectorAll()
// Syntax:
// document.querySelectorAll("selector");
//
// Ye saare matching elements ko select karta hai aur NodeList return karta hai.
// Jab humein ek hi selector ke saare elements chahiye hon, tab use karte hain.

let allElements = document.querySelectorAll(".headings");

console.log(allElements);
console.dir(allElements);

// Agar koi matching element nahi milta, toh empty NodeList return hoti hai.


// ## DOM Properties
// Element select karne ke baad uski properties ki values read kar sakte hain.
// Kuch properties ki values ko change bhi kar sakte hain.


// ## 1. tagName
// tagName selected element ka HTML tag name return karta hai.
//
// Example:
// element.tagName --> Agar element paragraph hai, toh "P" return hoga.
//
// Note:
// tagName ek individual element par use hota hai.
// NodeList par directly allElements.tagName likhne se tag name nahi milega.


// ## 2. innerText
// innerText element ka visible/rendered text read karne ke liye use hota hai.
// Isse element ke text ko change bhi kar sakte hain.
//
// Example:
// div.innerText = "abcd";
//
// Isse div ke andar ka existing content replace ho jayega.
// Agar div ke andar child elements hain, toh unka content bhi replace ho sakta hai.
//
// ## Parent, Child aur Sibling
// DOM ek tree-like structure hai.
//
// Parent --> Jiske andar doosre nodes hote hain.
// Child  --> Jo kisi doosre node ke andar hota hai.
// Sibling --> Same parent ke andar maujood nodes.
//
// Example:
//
// <body> <---- parent
//     <div>  // ex div ek parent h or div k child ima,h1,p,div h
//         |
//         <img>
//         <h1></h1>
//         <p></p>
//         <div></div>  --->or child k neche jo ate h wo descendants hote h
//     </div>
//     <script></script>
// </body>
//
// Is example mein body parent hai div aur script ka.
// Div parent hai img, h1, p aur inner div ka.
// Img, h1, p aur inner div ek hi parent ke children hain.
//
// ## Homework: DOM Navigation
//
// Example tree:
//
// body
//  |
//  div
//  |
//  |---- img
//  |---- img
//  |---- h1
//
// body.children[0] --> Body ka pehla child element.
// div.children[0]  --> Div ka pehla child element.
// div.children[1]  --> Div ka doosra child element.
// div.children[2]  --> Div ka teesra child element.
//
// DOM Navigation ka matlab ek node se doosre node tak jaana hai.
//
// Important node types:
// 1. Text nodes
// 2. Comment nodes
// 3. Element nodes
//
// Inka difference samajhne ke liye firstChild aur firstElementChild
// ke behaviour ko compare karna useful hai.

console.dir(document.body.firstChild);

// firstChild pehla child node return karta hai.
// HTML mein spaces aur line breaks hone par pehla child text node bhi ho sakta hai.
//
// Sirf pehla HTML element chahiye toh firstElementChild use karo.
//
// Example:
// document.querySelector("div").children;
// Ye div ke direct child elements ki HTMLCollection return karega.
//
// Homework:
// Text nodes, comment nodes aur element nodes ke baare mein MDN par padho.


// ## Accessing a div element
// querySelector("div") page ka pehla matching div select karta hai.

let div = document.querySelector("div");

console.dir(div);
console.log(div.innerText);

// innerText se div ke text ko read ya update kar sakte hain.
//
// Example:
// div.innerText = "abcd";
//
// Isse div ka existing content replace ho sakta hai.
// Div ke andar fruits ya doosre nested elements hain, toh unka content
// bhi replace ho jayega.


// ## Accessing the old heading
// querySelector("h1") page ka pehla matching h1 element select karega.

let oldheading = document.querySelector("h1");

console.log(oldheading);


// ## 3. innerHTML
// innerHTML element ke andar ka HTML content return karta hai.
// Ismein text ke saath HTML tags bhi milte hain.

console.log(div.innerHTML);

// innerHTML ko set karke element ke andar HTML add kar sakte hain.
//
// Example:
// div.innerHTML = "<div>inner div</div>";
//
// Isse div ke andar ek naya nested div create hoga.
//
// Dhyan rakho:
// innerHTML set karne se existing content replace ho sakta hai.
// Untrusted user input ko directly innerHTML mein insert nahi karna chahiye,
// kyunki isse security risk ho sakta hai.


// ## 4. textContent
// textContent element aur uske descendants ka text return karta hai.
// Ismein hidden elements ka text bhi include ho sakta hai.
//
// innerText aur textContent mein difference hai:
// innerText rendered text par focus karta hai.
// textContent text nodes ka content return karta hai.


// ## Let's Practice

// Q1. JavaScript se ek h2 heading create karo.
// Usmein "Hello JavaScript" text likho.
// Uske baad " from Apna College students" text append karo.
//
// Solution:

let h2 = document.createElement("h2");

h2.innerText = "Hello JavaScript";
h2
