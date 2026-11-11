// Sync in JS
// Start learning
// Synchronous---> mean the code runs in a particular
// sequece of instruction given in the program 
// Each instruction waits for the previous instruction
// to complete its execution                    
//                            


//Ex).
console.log("one");//-->one instruction
console.log("two");
console.log("three"); //Ex this is Synchronous program

//ASynchronous --> due to  Synchronous programing sometimes imp
//instruction get blocked due some previous instruction which causes a 
// delay in the UI.  ASynchronous code executio allows to execute next
//instructions immediately and doesn't block the flow

// ex
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello, 10000);  //timeout ye ek function h,hame kete time bad hello print karna h
//or
console.log("one");
console.log("two");
setTimeout(() => {
    console.log("hello");
},405000000000); //settimeout of the print ;--->phone ham koye amount pay karte time wait nahi karte
console.log("three");
console.log("four");


//callback  ---> a callback is a fuction as an argument to another function
function Sum(a, b){
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
} 
calculator(1, 2,  (a,b) =>{
    console.log(a + b);
}); // asa function jo duse function k ander argument pass hota h


// Callback Hell --> callback Hell: nested callbacks stacked
// below one another forming a pyramid structure. (Pyramid of Doom)
// this style of programming becomes difficult to understand & manage

// //nesting--> ka matlab hota h ak chege k ander dusere chege ko lekna 
// let age = 19;
// if(age >= 18){
//     if (age >= 60){
//         console.log("senior");
//     }else{
//         console.log("middle");
//     }
// }else{
//     console.log("child");
// }
     
// for(let i=0; i<5; i++){
//     let str = "";
//     for(let j = 0; j < 5; j++){
//         str = str + j;
//         console.log(i, str);
//     }
// }


// getData
function getData(dataId,getNextData){ // getnextdata ka kam hota h  ager hame koye or data chaye
    //timer set 2s
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        }, 2000);
    });
}

//promise Chain
// let p1 = getData(1);
// p1.then((res) =>{
//     getData(1).then((res) =>{ //method2
//     console.log(res);
//      getData(2).then((res) =>{
//     console.log(res);
//      });
// });
//Method3
// console.log("getting data1 ....");
// getData(1)
// .then((res) => {
//     console.log("getting data2 ....");
//     return getData(2);   
// })
// .then((res) =>{
//     console.log("getting data3 ....");
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// });   

// callback hell
// getData(1,() =>{
//     console.log("getting data2 ...."); //ak callback k ander dusra callback dal deye 
//     getData(2, () =>{
//         console.log("getting data3 ....");
//      getData(3,()=>{
//         console.log("getting data4 ....")
//         getData(4); 
//      });
//    });
// });
    

// ex) instagram acount k uper login kart  e h  [username] us k bad [password]
//enter karte h to pahle h user name ko serch kar rahe h ager user name melga ho sakta h 
// us m 2,second  lag jaye ,us k bad h password ko check karyege

//Promises --> is for "eventual" completion of task. it is an object
//in js it is a solution to callback hell

//let promise = new promise((resole.reject)=>{...})
//                              |     |
//                   function with 2 handlers

//promises --> A javascript promise object can be
//pending: the result is undefined
//Resolved: the result is a value (fulfilled)  --->resolve(result)
//Rejected: the result is an error (rejected) --->reject(error)
// let promise = new Promise((resolve, reject) => {
//      console.log("I am a promise");
//      reject("some error occurred");
// });
// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         // reject("network err"); //ager error ayega jase h promise 
//         // fulfilled nahi print nahi  hoga
//     });
// };


// let promise = getpromise();
// promise.then((res) => {
//     console.log("Promise fulfilled",res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });
// error ko catch karne k leye
//promises ko use karne k do  funcctio hote h 
//then() --> is used to handle the resolved state of
//  a promise
//catch() --> is used to handle the rejected state
//  of a promise 


//Asyncfunction
function asyncFunc1(){
    return new promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);

    });
}
 function asyncFunc2(){
    return new promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);

    });
}
console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     // console.log(res);
//     console.log("fetching data2....");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         // console.log(res);  es hata b sakte 
//     });
// });

// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });



// //Async-Await
// ASync function always returns a promise
// async function myfuc(){....}

    
//     await pauses the executio of its surrounding async function until
//  the promise is settled
//Ex
function api(){
    return new promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        },2000);
    });
}
async function getWeatherData(){
    await api();//1st
    await api();//2st
}


//Ex.2)
async function getAlldata(){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data1....");
    await getData(2);
    console.log("getting data1....");
    await getData(3);
    console.log("getting data1....");
    await getData(4);
    console.log("getting data1....");
    await getData(5);
   
}


//IIFE: Immediately invoked function expression
//IIFE is a function that is called immediately 
// as soon as it is defined  
//    (function (){          
//                         
//      })();
//
//     (() =>{
        //
//     })();
//
//    (async () =>{
// 
//      })();
//
