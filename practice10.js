/*function xyz(string){
    let x= string.split(" ");
    let n= x.length;
    for (let i=o; i<n; i++){
        x[i]= x[i][0].toUpperCase()+ x[i].subString(1);
    }
    return x[i].join(" ");
}
console.log(xyz("my name is jagadeesh chenchali"));
*/

function camalecase(str){
    str=str.split(" ");
    for (let i=0, x=str.length; i<x ; i++){
    str[i]=str[i][0].toUpperCase()+str[i].substr(1);
    }
    return str.join(" ");
}
console.log(camalecase("my name is jagadeesh chenchali"));


/*const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
sentence=words.join(" ");
console.log(sentence);
*/