// Task 1
console.log("js is working");


function calculateDiscount(product, price){
    let finalPrice;

    if(price > 1000){
        finalPrice = price * 0.8;
    } else{
        finalPrice = price * 0.9;
    }

    console.log("product:", product);
    console.log("Fimal Price:", finalPrice);
    
    
}

calculateDiscount("shoes", 2000);


// Task 2

function payment(amount, callback) {
  console.log(`Payment of ${amount} successful`);
  callback();
}

function orderSuccess() {
  console.log("Order delivered");
}

function placeOrder(callback) {
  console.log("Order placed");
  callback(500, orderSuccess);
}

placeOrder(payment);


// Task 3 

let employees = [
  { name: "Navi", salary: 50000 },
  { name: "John", salary: 70000 }
];

for (let emp of employees) {
  if (emp.salary > 60000) {
    console.log(emp.name, "- High Salary");
  } else {
    console.log(emp.name, "- Normal Salary");
  }
}

// Task 4

let correctPassword = "1234";
let attempts = 0;

while (attempts < 3) {
  attempts++;
  console.log("Attempt", attempts);

  let entered = "1234"; // simulate input

  if (entered === correctPassword) {
    console.log("Login success");
    break;
  }
}

// Task 5

function* offers() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Cashback";
}

let gen = offers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Task 6

let cart = [100, 200, 300, 400];
let total = 0;

for (let price of cart) {
  total += price;
}

console.log("Total Bill:", total);

// Task 7 

let user = {
  name: "Navi",
  role: "Developer",
  location: "India"
};

for (let key in user) {
  console.log(key + " : " + user[key]);
}

// Task 8 

function createPhone() {
  return "Phone";
}

function createBattery() {
  return "Battery";
}

function createCharger() {
  return "Charger";
}

console.log("Your Order:", createPhone(), "+", createBattery(), "+", createCharger());

// Task 9 

function collegeForm(name, department = "Not Assigned") {
  console.log("Name:", name);
  console.log("Department:", department);
}

collegeForm("Navi");

// Task 10 

function emi(p) {
  return function (r) {
    return function (t) {
      return (p * r * t) / 100;
    };
  };
}

console.log("EMI:", emi(10000)(2)(12));

// Task 11

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i, "→ Even");
  } else {
    console.log(i, "→ Odd");
  }
}

// Task 12

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a);

// Task 13

(function () {
  console.log("🔥 Flash Sale: 50% OFF on Shirts");
})();

// Task 14

function marks(a, b, c) {
  let total = a + b + c;
  let average = total / 3;

  return {
    total,
    average
  };
}

let result = marks(80, 90, 70);
console.log("Total:", result.total);
console.log("Average:", result.average);

// Task 15

function* offerGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
}

let g = offerGenerator();

let res = g.next();

while (!res.done) {
  console.log(res.value);
  res = g.next();
}

if (res.done) {
  console.log("All offers expired");
}

