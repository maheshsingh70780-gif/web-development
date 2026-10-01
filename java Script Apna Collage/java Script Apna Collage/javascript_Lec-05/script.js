//===================================================
//Function in js
// function ak block of code hota h performs a specific task ,can be invoked whenever needed
console.log("hello");

//=========================================================================
//Syntex
//function definition                       //function call
                                            //functionName();
//function functionName(){
//do some work
//}
//

function myfunction(msg){//parameter --->input
console.log(msg);
    console.log("Welcome to Apna collage!");
    console.log("We are learning JS:");
}
myfunction();//function call k ander jo value pass karte h  --->argument h

//function --->2 number,sum
function sum(a , b){ //local variable --> scope
s = a + b;
console.log("before return");
return s;
}
let val = sum(3, 4);

console.log(val);

//Arrow Functions  ----->compact way of writing a function
//sum function
function sum(a, b){
    return a + b;
}

//Modern Js
const arrowSum = (a, b) =>{
    // console.log(a+b);
    return a+ b;
};

//multiplication function
function mul(a, b){
    return a * b;
}

const arrowMul =(a,b)=>{
    // console.log(a*b);
    return a * b;
}

const printHello = () =>{
        console.log("hello");
    }



    //============================================================================
    //pratice question
    //=============================================================================
    //
    //
    function countVowels(str){
        let count = 0;
        for (const char of str){
            if(
                char === "a"||
                char === "e"||
                char === "i"||
                char === "o"||
                char === "u"
            )
                  {
                count++;
            }
        }
    
    return(count);
}        



//ex2).

const countVow = (str) => {
    function countVowels(str){
        let count = 0;
        for (const char of str){
            if(
                char === "a"||
                char === "e"||
                char === "i"||
                char === "o"||
                char === "u"
            )
                  {
                count++;
            }
        }
    
    return(count);
    }
}

//===============================================================================
//for each loop in array


// let arr = [1, 2, 3, 4, 5];
let arr = ["pune","delhi","mumbai"];
arr.forEach((val,idx,arr) =>{

    console.log(val.toUpperCase(),idx,arr);
});

//Q3).for a given array of number print the square of each value using the foreach loop
let nums = [2,3,4,5,6,67,52,39,];
nums.forEach((num)=>{
    console.log(num * num); //num**2
});

//some mre Array method
//Map methd--->map is very similer foreach lop--->

let num =[67,52,39];
let newArr = nums.map((val) =>{
    return val *2;
});
console.log(newArr);
let calcSquare = (num) =>{
    console.log(num * num);
};

// //filter method
// Eg:all even elements
let array = [1,2,3,4,5,6,7,8,9,22,33,333,444];
let evenArr = array.filter((val) =>{

return val %  2===0;//even
//return val %  2!==0;//odd value
});
console.log(evenArr);


// reduce method 
let array1 =[1,2,3,4,5,6];
const output array1.reduce((res,curr) =>{
    return res + curr;
});
console.log(output);//10  