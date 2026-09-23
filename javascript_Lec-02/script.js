//Revision of Operaters and Conditional Statements is start
console.log("Revision of operators and conditional statements");  //this code is printed Revision of operators and conditional statements -->
//comment -->  ase bhi comment kar sakte h

//Operater in java script
//used to perform some operater on
//#Arithmetic operater|| +,-,*, /||#Uranary operators
//#Assignment operater||         || #Comparison Operators
//#Relational Operators||


let m =10;
let n =12;
//let c = m + n;
console.log("m =",m,"&& n =",n);
console.log("m + n =", m + n);
console.log("m - n =", m - n);
console.log("m * n =", m * n);
console.log("m / n =", m / n);
console.log("m % n =", m % n); //modulu oerater --> %
console.log("m ** n =", m ** n);  //Exponential perater --> ** -->10^12

//Unary Operatar
let a = 10;
let b = 20;

console.log("a =",a,"&& b =",b);
//a = a + 1;//11
a++;  //post increment||--->  ++a preincrement || shortcut 11
console.log(a);
//b = b -1;
--b; //pre increment|| ---> b++ postincrement//19 
console.log(b);

//Assigement Operaters
let x = 19;
let y = 20;
x += 4; //a =a + 4 ;
y -= 4;
x *= 4; 
y /= 20;
x %= 4;
y **= 20;
console.log("x = ", x);
console.log("y = ", y);

//comparision operater
let apple = 23;//number
let banana = "20";//string

console.log("23 == 23",apple == banana);//false
console.log("23 != 23",apple !== banana);//true
console.log("23 ===23",apple === banana);//false
console.log("23 > 20",apple > banana);//true
console.log("23 >= 20",apple >= banana);//true
console.log("23 < 20",apple < banana);//false
console.log("23 <= 20",apple <= banana);//false

//logical operater ||[&& , || , !]
let R = 10;
let p = 20;

let cond1 = R < 10;
let cond2 = p===20;
console.log("cond1 && cond2",cond1 && cond2);//false
console.log("cond1 || cond2",cond1 || cond2);//true
//console.log("cond1 ! cond2",cond1 ! cond2);

// Condition Statements
// to implement some condition is the code
//  there are three ype of CSSLayerStatement
// 1).if statement -->if is a resive keyword 
// 2).if-else statement
// 3).else-if statement

// if statement
let mode = "light";
let color ;

if(mode === "dark"){
    color = "blue";
}

if(mode === "light"){
color = "black";
}
console.log(color);

// if-esle statement         //EX Odd OR even number
let age = 20;                // let num = 12;
if(age >= 18){               // if(num \ 2 ===0){
    console.log("vivo");    //console.log(num,"is even");
}else{                      //}else{
    console.log("note vivo");//consloe.log(num,"is odd");                     
}                            //}



//else-if statement
let body =0;

if(body =50){
    console.log("juner");
}else if(body > 60){
    console.log(senior);
}else{
    console.log("older")
}



//ternary operatars
let ag = 35;
age == 16;
let result = age == 18
































