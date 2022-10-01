var password = [];
// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

// Array of uppercase characters to be included in password
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// selects 'generate password' button
var generateBtn = document.querySelector("#generate");

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function getPasswordOptions() {
  // 3)
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain? Choose value between 8 and 128'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must be no more than 128 characters');
    return null;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm('Click OK to include special characters.');
  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm('Click OK to include numeric characters.');
  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowercaseCharacters = confirm('Click OK to include lowercase characters.');
  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUppercaseCharacters = confirm('Click OK to include uppercase characters.');
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (!hasLowercaseCharacters && !hasNumericCharacters && !hasSpecialCharacters && !hasUppercaseCharacters) {
    alert('Must choose at least one character category');
    return null;
  }
  // Object to store user input
  var passwordOptions = {
    length : length,
    hasSpecialCharacters : hasSpecialCharacters,
    hasNumericCharacters : hasNumericCharacters,
    hasLowercaseCharacters : hasLowercaseCharacters,
    hasUppercaseCharacters : hasUppercaseCharacters
  };

  return passwordOptions;
}

function generatePassword() {
  var options = getPasswordOptions();
      // all choices
    if (options.hasLowercaseCharacters && options.hasNumericCharacters && options.hasSpecialCharacters && options.hasUppercaseCharacters) {
      var finalArray = specialCharacters.concat(lowerCaseCharacters, upperCaseCharacters, numericCharacters);
      // 3 choices
    } else if (options.hasLowercaseCharacters && options.hasNumericCharacters && options. hasSpecialCharacters) {
      finalArray = specialCharacters.concat(lowerCaseCharacters, numericCharacters);

    } else if (options.hasLowercaseCharacters && options.hasNumericCharacters && options.hasUppercaseCharacters) {
      finalArray = lowerCaseCharacters.concat(upperCaseCharacters, numericCharacters);

    } else if (options.hasLowercaseCharacters && options.hasSpecialCharacters && options.hasUppercaseCharacters) {
      finalArray = lowerCaseCharacters.concat(specialCharacters, upperCaseCharacters);

    } else if (options.hasNumericCharacters && options.hasSpecialCharacters && options.hasUppercaseCharacters) {
      finalArray = numericCharacters.concat(specialCharacters, upperCaseCharacters);
      // 2 choices
    } else if (options.hasLowercaseCharacters && options.hasNumericCharacters) {
      finalArray = lowerCaseCharacters.concat(numericCharacters);

    } else if (options.hasLowercaseCharacters && options.hasSpecialCharacters) {
      finalArray = lowerCaseCharacters.concat(specialCharacters);

    } else if (options.hasLowercaseCharacters && options.hasUppercaseCharacters) {
      finalArray = lowerCaseCharacters.concat(upperCaseCharacters);

    } else if (options.hasNumericCharacters && options.hasSpecialCharacters) {
      finalArray = numericCharacters.concat(specialCharacters);

    } else if (options.hasNumericCharacters && options.hasUppercaseCharacters) {
      finalArray = numericCharacters.concat(upperCaseCharacters);

    } else if (options.hasUppercaseCharacters && options.hasSpecialCharacters) {
      finalArray = upperCaseCharacters.concat(specialCharacters);
      // 1 choice
    } else if (options.hasNumericCharacters) {
      finalArray = numericCharacters;

    } else if (options.hasLowercaseCharacters) {
      finalArray = lowerCaseCharacters;

    } else if (options.hasUppercaseCharacters) {
      finalArray = upperCaseCharacters;

    } else if (options.hasSpecialCharacters) {
      finalArray = specialCharacters;
    }

    password = [];
  for (var i = 0; i < options.length; i++) {
   var chosenCharacters = getRandom(finalArray);
   password.push(chosenCharacters)
  }

}
// Write password to the #password input
function writePassword() {
  generatePassword();
  var finalPassword = password.join('');
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);