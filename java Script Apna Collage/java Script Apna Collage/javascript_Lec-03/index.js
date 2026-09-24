// Revision of JS-Lec-03;

console.log("Loop in JavaScript");

// 1). Loops

// Loops are used to execute a piece of code again and again.

// There are four types of loops in JavaScript:
// 1). for Loop
// 2). while Loop
// 3). do while Loop
// 4). forEach Loop
// For Loop Syntax:
//print 1 to 10000
// for (let i = 1; i <= 1000; i++) {
//     console.log("Apna COLLAGE");
// }
//Ex
for (let i = 1; i <= 10; i++){
    console.log("i=",i);
}

//Calculate sum 1 to n
let sum = 0;
for (let j  = 1; j <= 5; j++){    ///i=1,initilize ,i<=5 stoping value,i++ updation
sum = sum + j;//sum = 0 + 1
}
console.log("loop has ended sum = ", sum);//15

//2.infinite Loop ---->ak asa loop jo never ending ho--->jes k stoping condition ---> true de vo nerver ending 
//Ex infinite loop ko kabe  apne program m nahi lekhana h ager lekhte h ho hama system kam nahi karta h
//3. while loop






//4.do while loop

let i = 1;
do{
    console.log("i",i);
    i++;
}while(i <= 5 );


// 5.for-of loop
// Syntax 
// for(let val of strVar)
//     //Do some work
//  } 
let str = "Maheshsingh";

let size = 0;    //string k length chack karne 
for (let i of str){ //iterator k ander --> characters ayege
    console.log("i=",i);
    size++;
}
console.log("size =",size) //11

//6). for-in loop  ---> for in loop ko ham object k leye used kar sakte h and array ko be used kar payege
//  Syntex ---> for(let key in objVar){
//     //do some work
//  }
 let student ={  // --->student name ka ak obj bana lete h
    name: "Mahesh", //key value name -->age-->Cgpa-->ispass ye key value h
    age:    20,
    Cgpa:   8.16,
    ispass: true

};
for(let key in student){
    console.log("key=",key, "value=",student[key]);

}
