/*
4)Write a JavaScript function to capitalize the first letter of a string.
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
*/

/*function captilize(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
}
console.log(captilize("js string exercises"));
*/

// Captrilize first letter of every word in the sentence.
/*function captilize(string) {
    const parts= string.split(" ");
    return parts.maxLength;
}*/

const string= "js string exercises";
const parts= string.split(" ");
const count= parts.length;
console.log(count);