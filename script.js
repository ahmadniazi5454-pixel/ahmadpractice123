// const students = ["akira", "ben", "charlie", "diana", "eva"];

// for (let i = 0; i < students.length; i++) 
    
// if (students[i] === "charlie") {
//     console.log("student found!");
// }
// else {
//     console.log("student not found!");
// }
// console.log(students[i]);

// function greet(name) {
//     console.log("Hello " , name);
// }
// greet("ahmad");
// greet("sara");

// function add(num1, num2, num3, num4) {
//     console.log(num1 + num2 + num3 + num4);
// }
//  add(30,49,50,20);
//  add(10,20,30,40);

//  function addition (a,b) {
//     return a+b;
//  }
  
//  let result = addition(10,20);
//  console.log(result);

//  function multiply (a,b) {
//     return a*b;
//  }
//  let product = multiply(5,6);
//  console.log(result);
 
//  function subtract (a,b) {
//     return a-b;
//  }  
//  let difference = subtract(20,10);
//  console.log(difference);

//  function divide (a,b) {
//     return a/b;
//  }
//  let quotient = divide(20,4);
//  console.log(quotient);

//  function calculate() {
//     let num1 = Number(prompt("Enter first number"));
//     let num2 = Number(prompt("Enter second number"));
    
//     let add = num1 + num2;
//     let subtract = num1 - num2;
//     let multiply = num1 * num2;
//     let divide = num1 / num2;
 
//     document.write("Addition: " + add + "<br>");
//     document.write("Subtraction: " + subtract + "<br>");
//     document.write("Multiplication: " + multiply + "<br>");
//     document.write("Division: " + divide + "<br>");
// }
// calculate();
      
// let person = {
//     name: "AHMAD",
//     age: 20,
//     welcome: function() {
//         console.log("welcome to the website!");
//         console.log("my name is " + this.name + " and my age is " + this.age);
        
//     }
// }
// person.welcome();

// let student = {
//     rollnumber: prompt("Enter your roll number"),
//     mame: prompt("Enter your name"),
//     math: Number(prompt("Enter your maths marks")),
//     english: Number(prompt("Enter your english marks")),
//     urdu: Number(prompt("Enter your urdu marks")),  
//     pst: Number(prompt("Enter your pst marks")),
//     physics: Number(prompt("Enter your physics marks")),
//     computer: Number(prompt("Enter your computer marks")),          
//     name: "ahmad",
//     english:90,
//     MATHS:90,
//     URDU:90,
//     PST:90,
//     PHYSICS:90,
//     COMPUTER:90
// }
// let total = student.english + student.MATHS + student.URDU  + student.PST + student.PHYSICS + student.COMPUTER;
// let percentage = (total / 550) * 100
// console.log("student name:",student.name);

// console.log("total marks:" + total);
// console.log( "percentage:" + percentage + "%")
// console.log("student grade:" + (percentage >= 80 ? "A+" : percentage >= 70 ? "A" : percentage >= 60 ? "B" : percentage >= 50 ? "C" : "Fail"));
// console.log("student result:" + (percentage >= 50 ? "Pass" : "Fail"));  
// console.log("Roll number:", student.rollnumber);

let student = {
    name: prompt("Enter your name"),
    english: Number(prompt("Enter your English marks")),
    urdu: Number(prompt("Enter your Urdu marks")),
    math: Number(prompt("Enter your Math marks")),
    islamiyat: Number(prompt("Enter your Islamiyat marks"))
};
let total=student.english+student.islamiyat+student.math+student.urdu;
let percentage=(total/4);
document.write("Student Name: " + student.name + "<br>");
document.write("english marks", student.english + "<br>");
document.write("urdu marks" , student.urdu + "<br>");
document.write("math marks" , student.math +"<br>");
document.write("islamiyat marks", student.islamiyat +"<br>");
document.write("Total Marks: " + total + " <br>");
document.write("Percentage: " + percentage + "%");
