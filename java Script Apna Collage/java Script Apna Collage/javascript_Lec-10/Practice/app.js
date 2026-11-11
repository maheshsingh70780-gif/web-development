// Q1. You are creating a website for your college. 
// Create a class User with 2 properties, name and email. 
// It also has a method called viewData() that allows users 
// to view website data.


let Data = "secret information";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(" data =", Data);
    }
}

let student1 = new User("Mahesh","abc@gmail.com");
let student2 = new User("Priya","priya@gmail.com");
let teacher1 = new User("Dean","dean@college.com");

// Q2. Create a new class called Admin which inherits
//  from User. Add a new method called editData to 
// Admin that allows it to edit website data.
class Admin extends User {
     constructor(name, email){
      super(name, email);
    }
    editData(){
        Data = "some new value"; 
    }
}

let admin1 =new Admin("admin","admin@college.com");




//Error Handling
// try-catch
// try {
//     ...normal code

// }catch(err){//err is error object

//     ...handling error

// }

let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a + b);
try{
    console.log("a+b = ", a + c);
} catch(err) {
        console.log(err);
    }

console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);

