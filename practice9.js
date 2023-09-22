/*
)Write a JavaScript function to extract a specified number of characters from a string.
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/

function truncate_string(string,length){
  return string.slice(0,length)
}
console.log(truncate_string("JagadeeshChenchali",9));