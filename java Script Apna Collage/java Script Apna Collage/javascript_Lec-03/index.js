// // Revision of JS-Lec-03;

// const { json } = require("express");

// console.log("Loop in JavaScript");

// // 1). Loops

// // Loops are used to execute a piece of code again and again.

// // There are four types of loops in JavaScript:
// // 1). for Loop
// // 2). while Loop
// // 3). do while Loop
// // 4). forEach Loop
// // For Loop Syntax:
// //print 1 to 10000
for (let i = 1; i <= 1000; i++) {
console.log("Apna COLLAGE");
}
// //Ex
for (let i = 1; i <= 10; i++){
console.log("i=",i);
}

// //Calculate sum 1 to n
let sum = 0;
 for (let j  = 1; j <= 5; j++){    ///i=1,initilize ,i<=5 stoping value,i++ updation
sum = sum + j;//sum = 0 + 1
}
// console.log("loop has ended sum = ", sum);//15

// //2.infinite Loop ---->ak asa loop jo never ending ho--->jes k stoping condition ---> true de vo nerver ending 
// //Ex infinite loop ko kabe  apne program m nahi lekhana h ager lekhte h ho hama system kam nahi karta h
// //3. while loop --->important note-->jo kam ham for loop se kar sakthe 
// // h vo while loop se kar skthe
// //  h par jo kam while loop se kar sakthe h vo for loop se nahi kar sakthe
// //while loop ---->syntex --->  initialization;
// //whie(condition){
// //do some work --->statement
// //increment++/decrement--;
// //}
// //Ex (3).print 1 to 5;
let m = 1;
while(m <= 5){
    console.log("apna School m =",m);
    m++; }
console.log("Loop has ended");


// //4.do while loop

let i = 1;
do{
console.log("i",i);
    i++;
}while(i <= 5 );


// // 5.for-of loop
Syntax
for(let val of strVar)
// //     //Do some work
}
let str = "Maheshsingh";

 let size = 0;    //string k length chack karne 
 for (let i of str){ //iterator k ander --> characters ayege
    console.log("i=",i);
    size++;
}
 console.log("size =",size) //11

// //6). for-in loop  ---> for in loop ko ham object k leye used kar sakte h and array ko be used kar payege
// //  Syntex ---> for(let key in objVar){
// //     //do some work
 //}
  let student ={  // --->student name ka ak obj bana lete h
     name: "Mahesh", //key value name -->age-->Cgpa-->ispass ye key value h
    age:    20,
    Cgpa:   8.16,
    ispass: true

};
for(let key in student){
    console.log("key=",key, "value=",student[key]);

}



// //practice Q1).--> print all even number from 0 to 100.
// //Q2).  print all number from 0 to 100.
// //Q3).    print all odd number from 0 to 100.
// // for (let num =0; num<= 100; num++){ 
// //     //console.log("num=",num);  //---->es method se 1 to 100 number print hoge output m//100
// //     if(num % 2 === 0){
// //         //even number             //odd number ---->if(num % 2 !== 0){
// //         console.log("num=",num)  // ager muje even number print karna h to if(num% 2 !==0) kar dege 
        
// //     }

// // }

// // for(let r = 0; r<= 100; r++){
// //       if(r%2 !=0){ //odd number
// //         console.log(r);
// // }
// // }

// // for(let s = 0; s <= 100; s++){
// //      console.log(s);         //all number(odd ho ya + even)
// //  }

// // //Q4).
// // let gameNum = 25;
// let userNum = prompt("Guess the game number :");
// // console.log(userNum);
// while(userNum != gameNum){//game
// userNum = prompt("you entered wrong number.Guess again :");
// }
// console.log("congratulations, you entered the right number");



// //  String in json
// //  String is asequence of charcters used to represent text
// // create a string 
// let str1 ="Apna collage";
// let str2 ='code Alpha'; //jetne b str ko ham javascript k ander create karte h inbuild property hote h or inbuild function hote h in inbuldfun ko ham method kahte h
// console.log(str[0]);
// console.log(string2[6]);
// // string length property--->her sting h ak internal verable  hota h jo uske bare m value store kata h
// // or ak internel verable jo har string k pass hota h kese b string lenght print kar n ho--->le str="..."



// // Template Literals 
// //lemplate literals in javascript--->a way  to have embedded expressions in strings
// let sentence= 'This is a template literal';
// console.log(sentence);  

//Real life example use of template.
let obj = {
    item: "phone",
    price:1200,
};
console.log("the cost of",obj.item, " is",obj.price,"rupees"); 
let output = 'the cost of ${obj.item} is ${obj.prie} rupees';
console.log(output)
let specialString = 'This is a template literal ${1 + 2 + 3}';
console.log(specialString);
// escape character \n --> ka use karte h ye next line,\t
console.log("mahesh singh\n my friend krishan");
console.log("Apna \ncollage");
let str3 = "apna\tcollage";//12 character --->\t ye one character m hhe ayega na k 2 char.
console.log(str3.length);



//string method in js.
// these are built in function to manipulate a string
// str toUpperCase() --->"abc" to "ABc" --->to upper ka work h abc str ko ABC m convert ka dega
let str4 = "ApnaCollage";
str4 = str4.toUpperCase();
console.log(str4);
// str.toLowerCase() --->"ABC" to "abc"  -->toLower ka  work h ABC str ko abc m convert ka dega
let str5 = "ApnaCollage";
str5 = str5.toLowerCase();
console.log(str5);
// str.trim()//removes whitespace
let str6 = "    mahesh is  a good ||  boy   ";
console.log(str6.trim());
//stringlength().kese metod par applay in str k sath print new created with method we print string to print main sting in it,

// str3.slice(startTransition,end?)//returns part of string
let str = "01234567";
console.log(str.slice(3));
// str1.concat(str2)//joins str2 with str1
let str7 = "apna";
let str8 = "collage";
let res = str7+str8 ;
console.log(res);

// str3.replace(searchVal.newVal)/.,mnb cWE5
let str9 = "hello";
console.log(str9.replace("lo","p"));

// str3.charAlt
let str0 = "Ilovejs";
str0 = str0.replace("I","s");
console.log(str0);//I

// Q1 //practice Question:
//Ques.5). Prompt the user to enter their full name.Generate a username for them based on the input.
//start username with @,followed by their full name and ending with the fullname length.
//eg : user name = "shradhakhapra",username should be "@shradhakhapra13".
//solve :

//1st method.
let username = prompt("Enter full name : ");
let specialusername = `@${username}13`;
console.log("@"+username+username.length);
console.log(specialusername);

//2nd method.
let fullname = prompt("Enter your fullname without spaces");
console.log("@"+fullname+fullname.length);




