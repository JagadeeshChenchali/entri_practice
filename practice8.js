/*Write a JavaScript function that hides email addresses to prevent unauthorized access. 
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

function protect_email(email){
    const parts= email.split("@");
    const userName= parts[0].slice(0,5);
    return userName+"..."+"@"+parts[1];
}
console.log(protect_email("jagadeeshch789@gmail.com"));

/*function protect_email(email) {
    const parts = email.split("@");
    const username = parts[0];
    const domain = parts[1];
    const hiddenUsername = username.slice(0, 5) + "..." + username.slice(-2);
    return hiddenUsername + "@" + domain;
}
console.log(protect_email("robin_singh@example.com"));
*/