// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength;
var upLetters;
var lowLetters;
var numbers;
var spclChar;

// password generating function
function generatePassword() {
  console.log (upLetters)
  var password = [];

  // flags
  var upLetterflag = false;
  var lowLetterFlag = false;
  var numbersFlag = false;
  var spclCharFlag = false;
  var currentLength = 0;

  while (
    upLetterflag === false &&
    lowLetterFlag === false &&
    numbersFlag === false &&
    spclCharFlag === false &&
    currentLength < passLength
  ) {
    // resetting to be able to loop though again
    upLetterflag = false;
    lowLetterFlag = false;
    numbersFlag = false;
    spclCharFlag = false;

    for (i = 0; i < passLength; i++) {
      // check to see if we added the specific character to move on to next character type
      var addedACharacter = false;

      while (addedACharacter === false) {
        var testCase = Math.floor(Math.random() * 4);

        if (upLetters === true && testCase === 0) {
          var characters = randomPick("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
          upLetterflag = true;
          addedACharacter = true;
        } else if (upLetters === false) {
          upLetterflag = true;
        }

        if (lowLetters === true && testCase === 1) {
          var characters = randomPick("abcdefghijklmnopqrstuvwxyz");
          lowLetterFlag = true;
          addedACharacter = true;
        } else if (lowLetters === false) {
          lowLetterFlag = true;
        }

        if (numbers === true && testCase === 2) {
          var characters = randomPick("1234567890");
          numbersFlag = true;
          addedACharacter = true;
        } else if (numbers === false) {
          numbersFlag = true;
        }

        if (spclChar === true && testCase === 3) {
          var characters = randomPick("!@#$%^&*()?><.");
          spclCharFlag = true;
          addedACharacter = true;
        } else if (spclChar === false) {
          spclCharFlag = true;
        }
      }
      password.push(characters);
    }
  }

  return password.join("");
}


// function to find random index of arrays
function randomPick(arrayType) {
  return arrayType[Math.floor(Math.random() * arrayType.length)];
}

function writePassword() {
   passLength = prompt(
    "Please select a password length between 8 and 128 characters."
  );
   upLetters = confirm(
    "Would you like to include uppercase letters? Please click cancel for no or OK for yes."
  );
   lowLetters = confirm(
    "Would you like to include lowercase letters? Please click cancel for no or OK for yes."
  );
   numbers = confirm(
    "Would you like to include numbers? Please click cancel for no or OK for yes."
  );
   spclChar = confirm(
    "Would you like tp include special characters? Please click cancel for no or OK for yes."
  ); 

  // conditional for nothing selected 
if (
  upLetters === false &&
  lowLetters === false &&
  numbers === false &&
  spclChar === false
) {
  alert("Please refresh and select at least one character type");
}
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);