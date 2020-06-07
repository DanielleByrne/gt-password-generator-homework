// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Getting password info
var passLength = prompt(
  "Please select a password length between 8 and 128 characters."
);
var upLetters = confirm(
  "Would you like to include uppercase letters? Please click cancel for no or OK for yes."
);
var lowLetters = confirm(
  "Would you like to include lowercase letters? Please click cancel for no or OK for yes."
);
var numbers = confirm(
  "Would you like to include numbers? Please click cancel for no or OK for yes."
);
var spclChar = confirm(
  "Would you like tp include special characters? Please click cancel for no or OK for yes."
);

function generatePassword() {
  // make variale to store password
  var password;
// statements for random numbers
  if (upLetters === true) {
    var uprCase = randomPick("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    console.log(uprCase);
  }
  if (upLetters === true) {
    var uprCase = randomPick("abcdefghijklmnopqrstuvwxyz");
    console.log(uprCase);
  }
  if (upLetters === true) {
    var uprCase = randomPick("1234567890");
    console.log(uprCase);
  }
  if (upLetters === true) {
    var uprCase = randomPick("!@#$%^&*()?><.,");
    console.log(uprCase);
  }
// loop for password length
  for (i = 0; i < passLength; i++) {}
  return password;
}
// if/then for length of password verifier
if (passLength >= 8 && passLength <= 128) {
  generatePassword();
} else {
  prompt("Please enter a number between 8 and 128.");
}
// function to find random index of arrays
function randomPick(arrayType) {
  return arrayType[Math.floor(Math.random() * arrayType.length)];
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// var fvnajfr = randomPick("asdfgj");
// console.log (fvnajfr);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// I need an alert for password length , global variable to store answer
// alert for lowercase, if/then statement global variable for answer
//  alert for uppercase, if/then statement global variable for answer
// alert for numbers, if/then statmennt, global variable for answer
//  alert for special characters, global statement for variable answer
//  else statment for when they select nothing
//  generated password contains all selected criteria
// need
// need to ba able to randomly call which one it generates 
// make sure if it calls each one randomly, it gets all of them at least once
// while loop until each one has been hit at least once (make sure to reset), keep for loop for length
// how do you make sure each one is hit at least once?
// use booleans to flag ones hit
// how does it choose which character to make next