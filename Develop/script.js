// Assignment Code
var generateBtn = document.querySelector("#generate");

// generates password through prompts
var generatePassword = function() {
  console.log("log");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);