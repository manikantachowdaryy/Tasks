
// Printing and User interaction

console.log("Manikanta");
console.log("FullStack Developer");

alert("Welcome to JavaScriptSession")

 let userinfo = confirm("Do you like coding")
 console.log(userinfo);
 

var userfood = prompt("what is your favourite Food")

console.log(userfood);

document.writeln("Good Evening Team")


// Console MEthods

var c = 10
console.log(c);

console.warn("This is a warning")

console.error("Something went wrong")

console.clear()


// Data Types

let d = "manikanta"
console.log(typeof(d));

const e = 23
console.log(typeof(e));

var boo = false
console.log(boo);

var f
console.log(f);

var g = null
console.log(g);



//  Arrays

let fruits = [  "watermelon", "apple" , "banana" , "pineApple" , "guava" , ]
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[fruits.length-1] );
fruits.push("dragon")
fruits.pop()

console.log(fruits.length);


// Objects

var student = {
    Name : ["manikanta" , "Aakash" , "Jaspreet"],
    Age : ["23" ,"21", "25"],
    Course : ["Mtech", "Btech", "Degree"],
    College : ["Mlrit", "CBIT", "VJIT"]
}

console.log(student.Name);

console.log(student.College);


// Operators

console.log(2+2);
console.log(6-3);
console.log(2*2);
console.log(10/2);
console.log(10%2);
console.log(2**3);


// Increment & decrement

let num1 = 10
    num2 = num1++
console.log(num1);

let num3 = 9
    num4 = ++num3
console.log(num3);

let num = 5;
console.log(num++);
console.log(num);


let z = 5;
console.log(--z);


let num5 = 5;
let num6 = num5++;
let num7 = ++num5;
console.log(num5);
console.log(num6);
console.log(num7);



// real-time logic tasks


let age = prompt("Enter your age:");
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

let name = prompt("Enter your name:");
console.log("Hello " + name);

let marks = [50, 80, 90, 70];
let max = Math.max(...marks);
console.log(max);

let fruitsObj = {
  category: "Seasonal",
  items: ["Mango", "Banana", "Pineapple"]
};
console.log(fruitsObj.items[1]);



let favFruits = [];
favFruits.push(prompt("Enter fruit 1"));
favFruits.push(prompt("Enter fruit 2"));
favFruits.push(prompt("Enter fruit 3"));

console.log(favFruits);












