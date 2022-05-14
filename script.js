window.alert("Welcome to Password Generator!");

//Function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = [
  {
    char: 0,
    lower: false,
    upper: false,
    special: false,
  },
];

//function criteria
var chooseCriteria = function () {
  //first question: how many characters
  password.char = window.prompt(
    "How many characters would you like your password to have? Select a number between 8 and 128."
  );

  console.log("char;" + password.char);
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
