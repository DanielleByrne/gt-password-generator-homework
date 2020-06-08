// Assignment Code
var generateBtn = document.querySelector("#generate");


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
// conditional for nothing selected 
if (
  upLetters === false &&
  lowLetters === false &&
  numbers === false &&
  spclChar === false
) {
  alert("Please refresh and select at least one character type");
}
// passworkd generating function
function generatePassword() {
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

// if/then for length of password verifier
if (passLength >= 8 && passLength <= 128) {
  generatePassword();
  writePassword();
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);