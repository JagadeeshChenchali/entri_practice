/*
Ticket Pricing
Write a function calculateTicketPrice that takes two parameters: a person's age and whether 
they have a student ID (true or false). If the person is under 18 or a student, they get a 
discount. If both conditions are met, return "Discounted price," otherwise return "Regular 
price."
*/

function calculateTicketPrice(age,id){
    if (age<=18 || id===true){
        console.log("Discounted price")
    }
    else{
        console.log("Regular price")
    }
}
console.log(calculateTicketPrice(10,false));