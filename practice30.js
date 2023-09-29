/*
Prime Number Check
Write a program to check if a given number `n` is prime using a `for` loop.*/

function isPrime(n){
   for (i=2;i<n;i++){
      if (n%i===0){
         return false;
      }
      else{
         return true;
      }
   }
}
console.log(isPrime(11));

/*function isPrime(n){
   let count=0;
   for (i=1;i<=n;i++){
      if (n%i==0){
         count+=1;
      }
   }
   if (count==2){
      console.log("Prime Number");
   }
   else{
      console.log("NOt a prime number");
   }
}
console.log(isPrime(15));*/

/*function isPrime(number){
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
 console.log(isPrime(10));*/