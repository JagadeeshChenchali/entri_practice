/*
 Count Digits in a Number:
 Write a program to count the number of digits in a given number `n` using a `for` 
loop.
*/

function countNumbers(n){
    let count =0;
    if (n>=1) ++count;
    while(n/10 >=1){
        n/=10;
        ++count;
    }
    return count;
}
console.log(countNumbers(222));

/*function count(n){
    let s=n.length;
    console.log(s);
}
console.log(count("10"));*/
