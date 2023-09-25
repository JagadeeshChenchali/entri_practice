/*
. Sum of Natural Numbers:**
Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` 
loop.
*/

function sumOfNumbers(num){
    let n=0;
    for (i=1;i<=num;i++){
        n+=i;}
    return n;
}
console.log(sumOfNumbers(5));