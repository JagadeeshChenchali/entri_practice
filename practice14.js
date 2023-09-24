/*
Positive, Negative, or Zero
Write a function positiveNegativeZero that takes a number as input and prints "Positive" if 
the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.
*/

function pnz(num){
    if (num>0){
        console.log("Positive Number");
    }
    else if(num<0){
        console.log("Negative Number")
    }
    else{
        console.log("Zero")
    }
}
console.log(pnz(0));