let a = prompt("enter your name")
console.log(a);

let b = Number(prompt("enter your age"))
console.log(b);

let c = Number(prompt("what is Your monthly salary"))
console.log(c);

let d = Number(prompt("loan amount required?"))
console.log(d);


let eligibility;

if (b >= 21 && b <= 60 && c >= 25000){
    eligibility = "eligible"
}else{
    eligibility = "Not Eligible"
    
}
alert(eligibility)


let emi = d/12
console.log("emi = ", emi);


let loanType;

if(d>500000){
    loanType = "high loan";
    
}else if(d>200000){
    loanType = "medium loan";
    
}else{
    loanType = "low loan";
    
}

let risk;

if(c>50000){
    risk = "low risk"
    
}else{
    risk = "high risk"
    
}

let customer;

switch (true) {
    case emi > 50000:
        customer = "Premium Customer";
        break;

    case emi > 20000:
        customer = "Standard Customer";
        break;

    default:
        customer = "Basic Customer";
}





// type conversion

let number = (10 + "10")
console.log(number);

let number1 = (10 + Number("10"))
console.log(number1);



alert( "EMI =" + emi)

alert(
    "loan category :" + loanType  + "\n" +
    "risk level :" + risk + "\n" + 
    "Customer Type :" + customer

);
