/*
Factorial of a Number:**
Write a program to calculate the factorial of a given number `n` using a `for` loop
*/

function factorial(num){
    let f = 1;
    for (i=1; i<=num; i++){
        f*=i;
    }
    return f;
}
console.log(factorial(5));