//My variables
var includes = [];
var pLength;
var uppercase;
var lowercase;
var specialCharacters;


// Assignment Code
var generateBtn = document.querySelector("#generate");

//Collecting password Criteria
for (var
  
  
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

