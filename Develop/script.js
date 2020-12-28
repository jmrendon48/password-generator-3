// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
	lowercase: "",
	uppercase: "",
	numeric: "",
	specialCharacters: ""
};

var characters = function() {
	// prompt to choose whether or not to include lowercase characters
	passwordCriteria.lowercase = window.prompt("Do you want to include lowercase characters? Answer yes or no.");
	passwordCriteria.lowercase = passwordCriteria.lowercase.toLowerCase();
	if (passwordCriteria.lowercase === "yes") {
		window.alert("You have chosen to include lowercase characters.");
		passwordCriteria.lowercase = true;
	}
	else if (passwordCriteria.lowercase === "no") {
		window.alert("You have chosen not to include lowercase characters.");
		passwordCriteria.lowercase = false;
	}
	// prompt to choose whether or not to include uppercase characters
	passwordCriteria.uppercase = window.prompt("Do you want to include uppercase characters? Answer yes or no.");
	passwordCriteria.uppercase = passwordCriteria.uppercase.toLowerCase();
	if (passwordCriteria.uppercase === "yes") {
		window.alert("You have chosen to include uppercase characters.");
		passwordCriteria.uppercase = true;
	}
	else if (passwordCriteria.uppercase === "no") {
		window.alert("You have chosen not to include uppercase characters.");
		passwordCriteria.uppercase = false;
	}
	// prompt to choose whether or not to include numeric characters
	passwordCriteria.numeric = window.prompt("Do you want to include numeric characters? Answer yes or no.");
	passwordCriteria.numeric = passwordCriteria.numeric.toLowerCase();
	if (passwordCriteria.numeric === "yes") {
		window.alert("You have chosen to include numeric characters.");
		passwordCriteria.numeric = true;
	}
	else if (passwordCriteria.numeric === "no") {
		window.alert("You have chosen not to include numeric characters.");
		passwordCriteria.numeric = false;
	}
	// prompt to choose whether or not to include special characters
	passwordCriteria.specialCharacters = window.prompt("Do you want to include special characters? Answer yes or no.");
	passwordCriteria.specialCharacters = passwordCriteria.specialCharacters.toLowerCase();
	if (passwordCriteria.specialCharacters === "yes") {
		window.alert("You have chosen to include special characters.");
		passwordCriteria.specialCharacters = true;
	}
	else if (passwordCriteria.specialCharacters === "no") {
		window.alert("You have chosen not to include special characters.");
		passwordCriteria.specialCharacters = false;
	}
	if (passwordCriteria.lowercase === false && 
		passwordCriteria.uppercase === false && 
		passwordCriteria.numeric === false && 
		passwordCriteria.specialCharacters === false) {
		window.alert("You need to pick at least one character type.");
		characters();
	}
};

// generates password through prompts
var generatePassword = function() {
	debugger;
	// prompt to set length of the password
	var passwordLength = window.prompt("Choose the length of the password (at least 8 characters and no more than 128).");
	// changes string from passwordLength prompt to an integer
	passwordLength = parseInt(passwordLength);
	// asks user to enter valid length
	if (passwordLength < 8 || passwordLength > 128) {
		window.alert("You did not enter a valid length. Please try again.");
		length();
	}
	else {
		window.alert("You have entered a length of " + passwordLength + ".");
	}

	window.alert("What character types do you want to use? Choose at least one.");

	characters();

	console.log(passwordCriteria.lowercase);
	console.log(passwordCriteria.uppercase);
	console.log(passwordCriteria.numeric);
	console.log(passwordCriteria.specialCharacters);

	window.alert("Generating password.");
};

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
