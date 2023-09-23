/*
Write a JavaScript function that hides email addresses to prevent unauthorized access.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

function protect_email(email){
const parts= email.split("@");
const username= parts[0];           
const hiddenUsername= username.slice(0,5)+"..."+username.slice(-2);
return hiddenUsername+"@"+parts[1];
}
console.log(protect_email("jagadeeshch789@gmail.com"));