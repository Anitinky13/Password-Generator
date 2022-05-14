var generateBtn = document.querySelector("#generate");
var password = [
  {
    char: 0,
    lower: false,
    upper: false,
    number: false,
    special: false,
  },
];
//function criteria
var chooseCriteria = function () {
  //first question: how many characters
  password.char = window.prompt(
    "How many characters would you like your password to have? Select a number between 8 and 128."
  );
  console.log("char:" + password.char);

  //prompt valid: 8, 128

  if (password.char >= 8 && password.char <= 128) {
    //second question: lowercase?
    password.lower = window.confirm(
      "Would you like you to have a low case letter in your password? \nSelect OK for yes or CANCEL for no."
    );

    //Include Uppercase?
    password.upper = window.confirm(
      "Would you like to have a uppercase letter in your password? \nselect OK for yes or CANCEL for no."
    );

    //include numbers?
    password.numbers = window.confirm(
      "Would you like to have numbers in your password? \nselect OK for yes or CANCEL for no."
    );

    // include symbols?
    password.symbol = window.confirm(
      "would you like your password to contain symbols? \nselect OK for yes or CANCEL for no."
    );

    //choose at least one criteria
    if (
      password.lower == false &&
      password.upper == false &&
      password.number == false &&
      password.symbol == false
    ) {
      //inform user critera is not valid and start prompts again
      window.alert(
        "You did not select enough criteria to create your password. Please try again."
      );
      return selectCriteri();
    } else {
      //display criteria selected and ask to confirm
      window.alert(
        "Password is ready to go. Please review the criteria you chose. If you are satisfied, click on the GENERATE PASSWORD button to create your new password. Otherwise, refresh the page and start over. n\nNumber of Characters: " +
          password.char +
          "\nLowercase Characters Included? " +
          password.lower +
          "\nUppercase Characters Included? " +
          password.upper +
          "\nNumber Characters Included? " +
          password.number +
          "\nSymbol Characters Included? " +
          password.symbol
      );
    }
  } else if (!password.char) {
    window.alert(
      "Welcome to Password Generator. Please answer the following questions to get you started."
    );
    return selectCriteria();
  } else {
    window.alert("Please enter a valid number. Thank you!");
    return selectCriteria();
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//welcome message
window.alert(
  "Welcome to Password Generator! Please answer the following prompts to generate a password"
);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
