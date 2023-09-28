/*
Print Multiplication Table:**
Write a program to print the multiplication table of a given number `n` using a `for` 
loop.
*/

function multi(n){
  for (i=1;i<=10;i++){
    console.log(n+"X"+i+"="+n*i);
  }
}
console.log(multi(5));

/*function tables(num,range){
    for (let i=1;i<=range;i++){
        console.log(num+"X"+i+"="+num*i);
    }
}
console.log(tables(2,20));*/

/*const n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}*/
