/*
Time of Day Greeting
Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and 
prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" 
for hours 12-17, and "Good evening" for hours 18-23.
*/

function timeOfDay(num){
    if (num>=6 && num<12){
        console.log("Good Morning");
    }
    else if(num>=12 && num<18){
        console.log("Good Afternoon")
    }
    else if(num>=18 && num<23) {
        console.log("Good Evening")
    }
}
console.log(timeOfDay(10));