//Let's Practice
// Q.1)Create a toggle button that changes 
// the screen to dark mode when clicked and light
//  mode when clicked again.
console.log("hello ");

let modeBtn = document.querySelector("#mode");
let currMode = "ligh"; //dark

 modeBtn.addEventListener("click",()=>{
    // console.log("you are trying to change mode");
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white"; 
    }
    console.log(currMode);
});