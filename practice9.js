/*
Write a function that takes a URL as input and extracts the domain name from it. For example, if the input is "https://www.example.com/page", the function should return "example.com".
*/

function extract(url,length){
 return  url.slice(12,length);
    
}
console.log(extract("https://www.example.com/page",23));