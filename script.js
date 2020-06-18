//My variables
var passLengthString = prompt("How many characters will your password be? Enter a number between 8 and 128");
var upper = prompt("Would you like your password to contain uppercase values?");
var lower = prompt("Would you like your password to contain lowercase values?");
var special = prompt("Would you like your password to contain special characters?");

console.log(typeof passLengthString)
console.log(upper)
console.log(lower)
console.log(special)

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Turn password length into number
var passLength = parseInt(passLengthString);
console.log(passLength)

 //validate password length
 //broken when inside my function
 if (passLength < 8 || passLength > 128){
  console.log("error");
} else if (passLength != Number){
  console.log("Not a number");
}


//Collecting password Criteria
function generatePassword (){
 
  
   

}
  
  
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//get password length
//validate password length
