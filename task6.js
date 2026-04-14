// Task 1

let cart = [
    {
        name : "shirt" ,
        price : 500 ,
        Qty : 2
    },
    {
        name : "shoes",
        price : 1500,
        Qty : 1
    },
    {
        name : "Cap",
        price : 300 ,
        Qty : 3
    }
]

let totalPrice = cart.reduce((acc,c,i,t)=> {
    return  acc + c.price
    
},0)

console.log(totalPrice);

let abovePrice = cart.filter((c,i,t)=>{
    return c.price>1000
})
console.log(abovePrice);

let uppercaseval = cart.map((c,i,t)=>{
    return c.name.toUpperCase()
    
})
console.log(uppercaseval);


// Task 2

let students = [
    {
        name1 : "Arun",
        marks : 85
    },
    {
        name1 : "bala",
        marks : 45 ,
    },
    {
        name1 : "Charan",
        marks : 60 
    },
    {
        name1 : "Divya",
        marks : 30
    }
]

let failedStudents = students.filter((c,i,t)=>{
    return c.marks <50 
})
console.log(failedStudents);

let geraterthan = students.some((c,i,t)=>{
    return c.marks>85
})
console.log(geraterthan);

let passedStu = students.every((c,i,t)=>{
    return c.marks>35
})

console.log(passedStu);

let studentFailed = students.find((c,i,t)=>{
    return c.marks <= 35
})
console.log(studentFailed);

// Task 3

let employees = [
    {
        name2 : "A",
        salary : 25000
    },
    {
        name2 : "B",
        salary : 40000
    },
    {
        name2 : "C",
        salary : 15000
    },
    {
        name2 : "D",
        salary : 50000
    }
]

let salaryInc = employees.map((c,i,t)=>{
    return c.salary * 1.10
})
console.log(salaryInc);

let greaterSal = employees.filter((c,i,t)=>{
    return c.salary > 30000
})
console.log(greaterSal);

let totalExp = employees.reduce((acc,c,i,t)=>{
    return acc + c.salary
},0)

console.log(totalExp);

let sorting = employees.sort((a,b)=>{
    return  b.salary - a.salary
})
console.log(sorting);

// Task 4
let products = ["Laptop", "Mobile", "Tablet", "Camera"]

console.log(products.includes("Mobile"));
let lowercase = products.map((c,i,t)=>{
    return c.toLowerCase()
})
console.log(lowercase);
console.log(products.indexOf("Tablet"));
console.log(products.join("-"));

// Task 5

let yearD = prompt("enter your date of birth year")
console.log(yearD);

let yearData = new Date()
let yearR = yearData.getFullYear()


let yourAge = yearR - yearD
alert("You are "  + yourAge + " years old ");


// Task 6

let users = [
    {
        username : "admin",
        password : "1234"
    },
    {
        username : "user",
        password : "abcd"
    }
]

let inputusername = "admin"
let inputpassword = "1234"
let exists = users.find((c,i,t)=>{
    return c.username = "user"
    c.username == inputusername && c.password == inputpassword

})
if (exists){
    console.log("login success ");
    
}else {
    console.log("invalid credentials");
    
}
console.log(exists);



// Task 7 

let numbers = [  10, 15, 20, 25, 30]

let even = numbers.filter(num => num %2 ===0)
console.log(even);

let odd = numbers.some((c)=>{
    return c.numbers %2 !== 0
})
console.log(odd);


let allEven = numbers.every((c)=>{
    return c.numbers %2 === 0
})
console.log(allEven);

let greater = numbers.find(num => num > 20)
console.log(greater);

// Bonus Challamge 

let orders = [
    {
        id : 1,
        amount : 500,
        status : "delivered"
    },
    {
        id : 2,
        amount : 1500,
        status : "pending"
    },
    {
        id : 3,
        amount : 2000,
        status : "delivered"
    }
]
let totalrevenue = orders
.filter((c,i,t)=>{
    return c.status === "delivered"

})
.reduce((acc,c,i,t)=>{
    return acc + c.amount
},0)
console.log(totalrevenue);

let pending = orders.filter((c,i,t)=>{
    return c.status === "pending"
})

console.log(pending);

let greater1000 = orders.some((c,i,t)=>{
    return c.amount > 1000
})
console.log(greater1000);

let sortorders = orders.sort((a,b)=>{
    return a.amount-b.amount
})
console.log(sortorders);

// Completed