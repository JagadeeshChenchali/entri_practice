/*
Age Eligibility
Write a function checkAge that takes an age as input. The function should return "Allowed" if 
the age is between 18 and 65 (inclusive), and "Not allowed" otherwise.
*/

function checkAge(age){
    if (age>=18 && age<=65){
        console.log("Allowed");
    }
    else{
        console.log("Not Allowed");
    }
}
console.log(checkAge(69));