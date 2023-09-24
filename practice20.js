/*
Color Selection
Write a function selectColor that takes a color choice ("red", "blue", "green") and whether the 
color is available (true or false). If the color is available and the choice is "blue" or "green," 
return "Selected." If the choice is "red," return "Not available." For any other choice, return 
"Invalid choice."
*/

function selectColor(color,available){
    if ((color === "blue" || color === "green")&& available===true){
        console.log("selected")
    }
    else if ((color === "red")&& available===true){
        console.log("not available");
    }
    else{
        console.log("Invalid choice")
    }
}
console.log(selectColor("red",true));