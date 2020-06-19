
//My variables

var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numArr = [1,2,3,4,5,6,7,8,9,0];
var specialArr = ["*","/","&","@","$","_","+"];
var choicesArr = [];

//Prompts function
function getPrompts() {
    passLengthString = parseInt(prompt("How many characters will your password be? Enter a number between 8 and 128."));
    if (isNaN(passLengthString) || passLengthString < 8 || passLengthString >128) {
        alert("Character length must fall between 8 and 128!!")
    return false;
    }
    if (confirm("Would you like your password to contain uppercase values?")) {
        choicesArr = choicesArr.concat(upperArr);
    }
    if (confirm("Would you like your password to contain lowercase values?")) {
        choicesArr = choicesArr.concat(lowerArr);
    }
    if (confirm("Would you like your password to contain numbers?")) {
        choicesArr = choicesArr.concat(numArr);
    }
    if (confirm("Would you like your password to contain special characters?")) {
        choicesArr = choicesArr.concat(specialArr);
    }
    return true;
   
}
//Creating the password
function generatePassword() {
    getPrompts();
    var password = "";
    for(let i = 0; i < passLengthString; i++) {
        var randomLetters = (Math.floor(Math.random() * choicesArr.length));
        password += choicesArr[randomLetters];
console.log(password)
    }
    return password;
}



// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    var password = generatePassword();
    passwordText.value = password;
  };


  // Assignment Code
    var generateBtn = document.querySelector("#generate");
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  



  