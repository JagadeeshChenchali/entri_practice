/*
Write a JavaScript function to convert a string into abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/

function abbrev_name(string){
  const str= string.split(" ");
  return str[0]+" "+str[1][0]+str[1][1]+".";
}
console.log(abbrev_name("Jagadeesh Chenchali"));