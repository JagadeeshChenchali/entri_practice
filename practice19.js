/*
Username Validation
Write a function validateUsername that takes a username as input. The function should 
return "Valid" if the username has at least 6 characters and contains only letters and 
numbers. Otherwise, return "Invalid."
*/

function validateUsername (username){
    if (username.length>=6 && /^[a-zA-Z0-9]+$/.test(username)){
        console.log("valid");
    }
    else{
        console.log("invalid");
    }
}
console.log(validateUsername("jagadeeshch789@gmail.com"));