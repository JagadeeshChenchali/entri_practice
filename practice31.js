/*

*/

function solution(string){
    let reverse="";
    for (i=string.length-1;i>=0;i--){
        reverse+=string[i];
    }
    return reverse;
}
console.log(solution("hello"));