// Task1
console.clear()
let cart1 = [
    {
        name1 : "shirt",
        price : 500
    },
    {
        name2 : "shoes",
        price : 1500
    }
]

let cart2 = [
    {
       name3 : "watch", 
       price : 2000 
    }
]

console.log(cart1, cart2);

let cart3 = [...cart1,...cart2]
console.log(cart3);

cart2.push({Name : "ravi"})

console.log(cart2);

cart1.pop()

console.log(cart1);

let total = cart3.reduce((sum,item) => sum + item.price, 0)
console.log(total);


// Task2

let user = {
    name : "manikanta",
    role : "trainer",
    salary : 20000
}
let update = {
    role : "developer",
    salary : 50000
}
console.log(user,update);

let userUpdate = {...user,...update}
console.log(userUpdate);

let namedes = userUpdate.name
let roledes = userUpdate.role
let salarydes = userUpdate.salary
console.log(namedes, "is now a ",roledes, "earning", salarydes);


// Task 3

function teamscore(teamName,...score) {
    console.log(teamName);
    console.log(score);
    
}
    
teamscore("sunrisers")

teamscore(100,129,103,240)


function teamscore(teamName,...score) {
    let total = score.reduce((sum, item) => sum+ item, 0)
    console.log(total);
        
}
teamscore(120,130,140,150)



function teamscore(teamName,...score) {
    let highest = Math.max(...score)
    console.log(highest);
    
}

// Task4 

let apiData = {
    user : "manikanta",
    address : {
        city: "banglore",
        pincode : 560001
    }

}

console.log(apiData);

let name1 = apiData.user
let city1 = apiData.address.city
let pincode1 = apiData.address.pincode

console.log(name1, "lives in ",  city1 , "--" ,pincode1);


// Task 5

let users = ["A","B","C","D","E"]

users.splice(2,3,"X","Y")
console.log(users);

let spliceval = users.slice(0,3)
console.log(spliceval);

let exists = users.includes("B")
console.log(exists);

let findindex = users.lastIndexOf("E")
console.log(findindex);

// Task 6

let messyData = [1,2,[3,4,[5]],null,undefined,"hello"]


let flatval = messyData.flat(Infinity).filter(item => item != null)
console.log(flatval);

console.clear()
// Task 7

let prices = [1000, 200, 50, 5000]
let ascendingOrder = prices.sort()
console.log(ascendingOrder);
// default sort fails because the .sort() treats number as string


// Task 8

let orders = [
    {
        id : 1,
        amount : 100
    },
    {
        id : 2,
        amount : 200
    },
    {
        id : 3,
        amount : 300
    }
]

let totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);

console.log("Total Revenue:", totalRevenue);

let average = totalRevenue / orders.length;

console.log("Average Order Value:", average);

// Task9

let inventory = [1,2,3,4,5,6,7,8,9,10]
let inventory1 = [11,12,13]

let remove = inventory.pop()
console.log(inventory);

let addItem = inventory.push(10,11,12)
console.log(inventory);

let Spliceval = inventory.splice(4,1,13)
console.log(inventory);

let find = inventory.includes(5)
console.log(find);


let merged = [...inventory,...inventory1]
console.log(merged);


// Task 10

function processData(...data){
    let flatval1 = data.flat(Infinity)
    console.log(flatval1);
    flatval1.sort()
    console.log(flatval1);
    


    
}
processData(1,2,[3,4],[5,[6]])




