/*
Fibonacci Sequence:**
Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.
*/

function fibonacci(num){
    let first=0;
    console.log(first);
    let second=1, next;
    console.log(second);
    for (let i=2;i<num;i++){
        next = first+second;
        console.log(next);
        first=second;
        second=next;
    }
}
console.log(fibonacci(15));
