
// ----------------------------------Task 1-----------------------------------
//Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx"

var zakatPercentage=0.025;
var userInput= prompt("Enter amount");
userInput=Number(userInput);
var result=zakatPercentage*userInput;
alert("Your zakat amount is " + result);



// ----------------------------------Task 2--------------------------------
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

// var familyMembers=prompt("Enter total number of members in your family:")
// var fitrahMethod=prompt("Choose a fitrah method: \n1. Wheat (PKR 250)\n2. Barley (PKR 450)\n3. Dates(PKR 2100)\n4. Raisins(PKR 2800).")
// if(fitrahMethod === "1") {
//     fitrahPrice = 250;
// }
// else if(fitrahMethod === "2") {
//     fitrahPrice = 450;
// }
// else if(fitrahMethod === "3") {
//     fitrahPrice = 2100;
// }
// else if(fitrahMethod === "4") {
//     fitrahPrice = 2800;
// }
// var result=familyMembers*fitrahPrice
// alert("Your fitrah amount is " + result);



// --------------------------------Task 3-----------------------------
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

// var secretNumber=Math.floor(Math.random() * 10) + 1;
// var guess=prompt("Guess the secret number between 1-10:")
// if(guess === secretNumber) {
//     alert("Congratulations! You guessed the secret number." + secretNumber) 
// }
// else if(guess < secretNumber) {
//     alert("Your guess is too low! Please guess again.")
// }
// else if(guess > secretNumber) {
//     alert("Your guess is too high! Please guess again.")
// }



// ----------------------------------Task 4---------------------------------
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

// var userName= prompt("Enter Your Name:")
// var firstLetter= userName.slice(0,1)
// var remainingLetters= userName.slice(1,9)
// var uppercaseLetter=firstLetter.toUpperCase()
// var fullname=uppercaseLetter.concat(letters);
// alert(result);



// ---------------------------------Task 5---------------------------------
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

// var contactNumbers=[]
// var contactNames=[]
// contactNumbers.push(prompt("Enter First Contact Number:"))
// contactNames.push(prompt("Enter First Contact Name:"))
// contactNumbers.push(prompt("Enter Second Contact Number:"));
// contactNames.push(prompt("Enter Second Contact name:"));
// contactNumbers.push(prompt("Enter Third Contact Number:"))
// contactNames.push(prompt("Enter Third Contact Name:"))
// contactNumbers.push(prompt("Enter Fourth Contact Number:"))
// contactNames.push(prompt("Enter Fourth Contact Name:"))
// console.log("contacts:")
// for(var i=0; i < 4; i++) {
//     console.log(contactNumbers[i] + "-" + contactNames[i])
// }



// ------------------------------------Task 6---------------------------------
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

// var products=["green", "blue", "yellow", "red", "orange"]
// var removePosition=+prompt("Enter position of item to be removed(1-" + products.length + ")")


// --------------------------------------Task 7----------------------------------
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

// var userInput1 = prompt("What is your nationality?")
// var userInput2 = prompt("What is your gender?")
// var userInput3 = +prompt("How old are you?")
// if (userInput1 === "Pakistani" || userInput1 === "Indian") {
//   alert("you are eligible to vote")
//   if (userInput2 === "male" && userInput3 > 18) {
//     alert("You are eligible to vote!")
//   }
//   else if (userInput2 === "female" && userInput3 > 18) {
//     var marritalStatus = prompt("Are you married? (yes/no)")
//     if (married === "yes") {
//       alert("You are eligible to vote!")
//     }
//     else {
//       alert("You are not eligible to vote.")
//     }
//   }
//   else {
//     alert("You are not eligible to vote.")
//   }
// }
// else {
//   alert("You are not eligible to vote.")
// }



// ------------------------------------Task 8-----------------------------------
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

// var WorldCupSquad=["Babar", "Rizwan", "Fakhar", "Haris", "Shadab", "Shaheen", "Asif", "Imad", "Amir", "Hasan", "Sarfaraz", "Hasnain", "Rauf", "Wasim", "Imam"]
// var FinalTeamPlayers= WorldCupSquad.slice(0,11)
// // console.log("Final players selected for match against India.")
// console.log(FinalTeamPlayers)
// console.log(WorldCupSquad)

