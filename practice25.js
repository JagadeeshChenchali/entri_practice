/*
. Sum of Natural Numbers:**
Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` 
loop.
*/


function sum(n){
    let s=0;
    for (i=1;i<=n;i++){
        s+=i;
    }
    return s;
}
console.log(sum(10));