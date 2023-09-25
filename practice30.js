/*
Prime Number Check
Write a program to check if a given number `n` is prime using a `for` loop.*/

function isPrime(number){
    let count = 0;
    for(let i = 1;i<=number;i++)    {
       if(number%i == 0){
          count = count + 1;
       }
    }
    if(count == 2){
       return true;
    }
    else{
       return false;
    }
 }
 console.log(isPrime(10));