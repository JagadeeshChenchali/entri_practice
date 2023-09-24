/*
)Even or Odd
Write a function evenOrOdd that takes an integer as input and prints "Even" if the number is 
even, and "Odd" if the number is odd.
*/

function evenOdd(num){
    if (num% 2===0){
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");
    }
}
console.log(evenOdd(3));