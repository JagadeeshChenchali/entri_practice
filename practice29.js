/*
Reverse a String
Write a program to reverse a string using a `for` loop
*/


function reverse(string){
let s="";
for (i=string.length-1;i>=0;i--){
    s+=string[i];
}
return s;
}
console.log(reverse("hello"));

/*function reverseString(string){
    let reversed="";
    for(let i=string.length-1;i>=0;i--){
        reversed+=string[i];
    }
    return reversed;
}
console.log(reverseString("jagadeesh"));*/