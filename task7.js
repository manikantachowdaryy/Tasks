// Task 1 - Order System

console.log("order placed");
setTimeout(()=>{
    console.log("Preparing Food");
    

},2000)
setTimeout(()=>{
    console.log("Food ready");
    
},4000)
setTimeout(()=>{
    console.log("Delivered");
    
},5000)


// Task 2 - Digital Clock 

let time1 = setInterval(()=>{
    let time = new Date()
    console.log(time.toLocaleTimeString());
    
},1000)

setTimeout(()=>{
    clearInterval(time1)
},10000)

// LEVEL 2  Task - 3 

function loginuser(){
    console.log("User logged in ");
    
}
function getUserData(){
    console.log("User Data Fetched");
    
}
function getUSerPosts(){
    console.log("User Posts Fetched");
    
}

setTimeout(loginuser,1)
setTimeout(getUserData,2)
setTimeout(getUSerPosts,3)


// LEVEL 3  Task - 4

let apilink = 'https://fakestoreapi.com/products/'
fetch(apilink)

function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let products = [
        { id: 1, name: "Shirt", price: 500 },
        { id: 2, name: "Shoes", price: 1500 },
        { id: 3, name: "Watch", price: 2000 }
      ];

      let isError = false;

      if (!isError) {
        resolve(products);   
      } else {
        reject("API Failed");
      }

    }, 2000);
  });
}
getProducts()
  .then((data) => {
    console.log("Products:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Done");
  });

  // Completed
