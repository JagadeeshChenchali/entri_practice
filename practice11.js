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
function captilize(string) {
const parts= string.split(" ");
for(i=0;i<parts.length;i++){
parts[i]=parts[i][0].toUpperCase()+parts[i].slice(1);
}
return parts.join(" ");
}
console.log(captilize("js string exercises"));