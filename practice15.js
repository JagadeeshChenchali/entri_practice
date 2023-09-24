/*
Grade Calculator
Write a function calculateGrade that takes a student's score as input and prints their 
corresponding grade: "A" for scores 90 and above, "B" for scores 80-89, "C" for scores 70-
79, "D" for scores 60-69, and "F" for scores below 60.
*/

function grade(score){
    if (score>=90){
        console.log("Grade: A")
    }
    else if (score>=80){
        console.log("Grade: B")
    }
    else if (score>=70){
        console.log("Grade: C")
    }
    else if (score>=60){
        console.log("Grade: D")
    }
    else{
        console.log("Grade: F");
    }
}
console.log(grade(48));