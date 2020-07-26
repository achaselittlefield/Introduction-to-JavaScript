/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge 

if (votingAge > 18) {
    console.log("true")
  }



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let variable = 1

if {}


//review



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let year = "1999";
Number(year);





//Task d: Write a function to multiply a*b 

function multiply (a,b){
    const product= a*b;
    return product;
}
multiply(a,b);




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


function dogYears (a){
    const product= a*7;
    return product;
}
dogYears(a);



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let choice2 = Math.random();
if (choice2 < .34) {
    choice2 = "rock";
}
else if (choice2 <= .67) {
    choice2 = "paper";
}
else {
    choice2 = "scissors";
} 


function game(choice1){
    if (choice1 === choice2){
        return "Tie";
    }
    if (choice1 === "paper"){
        if (choice2 === "rock"){
            return "paper wins";
        }
        else{
            if (choice2 === "scissors"){
                return "scissors wins"
            }
        }
    }
    if (choice1 === "rock"){
        if (choice2 === "scissors"){
            return "rock wins";
        }
        else{
            if (choice2 === "paper"){
                return "paper wins"
            }
        }
    }
    if (choice1 === "scissors"){
        if (choice2 === "paper"){
            return "scissors wins";
        }
        else{
            if (choice2 === "rock"){
                return "rock wins"
            }
        }
    }

}

game("scissors");
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kilometers (km){
    const product= (.621371*a) + " miles";
    return product;
}
kilometers(km);





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feet (ft){
    const product= (a*30.48) + " cm";
    return product;
}
feet(ft);



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grades (mark){
    if (mark >= 90){
    return "A";
}
    else if (mark >= 80){
    return "B";
}
else if (mark >= 70){
    return "C";
}
else if (mark >= 60){
    return "D";
}
else if (mark <= 59){
    return "F";
}
}
grades(mark);
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





