/*
Fibonacci Sequence:**
Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.
*/


function fibonacci(n){
    let first=0, second=1, next;
    for (i=2;i<n;i++){
        next= first+second;
        console.log(next);
        first = second;
        second= next;
    }
}
console.log(fibonacci(10));
