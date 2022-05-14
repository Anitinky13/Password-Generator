//generate button, add eventlistener
var generateBtn = document.querySelector("#generate");
var password = [
  {
    char: 0,
    lower: false,
    upper: false,
    numeric: false,
    special: false,
  },
];
//start function
var selectCriteria = function () {
  //window prompt for length
  password.char = window.prompt(
    "How many characters would you like your password to be? Select a number between 8 and 128."
  );
  console.log("char: " + password.char);

  // min 8, min 128
  if (password.char >= 8 && password.char <= 128) {
    //window confirm for lower case letter
    password.lower = window.confirm(
      "Would you like your password to contain lowercase letters? \nSelect OK for yes or CANCEL for no."
    );
    //window confirm for upper case letter
    password.upper = window.confirm(
      "Would you like your password to contain uppercase letters? \nSelect OK for yes or CANCEL for no."
    );
    //window confirm for numerics
    password.numeric = window.confirm(
      "Would you like your password to contain numbers? \nSelect OK for yes or CANCEL for no."
    );
    //window confirm for symbols
    password.special = window.confirm(
      "Would you like your password to contain special characters? \nSelect OK for yes or CANCEL for no."
    );
    //select at least one
    if (
      password.lower == false &&
      password.upper == false &&
      password.numeric == false &&
      password.special == false
    ) {
      // select a criteria to create password
      window.alert(
        "You did not select sufficient criteria to create your password. Please try again."
      );
      return selectCriteria();
    } else {
      //inform user of criteria selected and ask to confirm
      window.alert(
        "Your password is ready to go. Please review the criteria you selected. If everything looks good, click on the GENERATE PASSWORD button to create your password. Otherwise, refresh the page to start over. \n\nNumber of Characters: " +
          password.char +
          "\nLowercase Characters Included? " +
          password.lower +
          "\nUppercase Characters Included? " +
          password.upper +
          "\nNumeric Characters Included? " +
          password.numeric +
          "\nSpecial Characters Included? " +
          password.special
      );
    }
  } else if (!password.char) {
    window.alert(
      "Welcome to Password Generator. Please answer the following prompts to get started."
    );
    return selectCriteria();
  } else {
    window.alert("You did not enter a valid number. Please try again.");
    return selectCriteria();
  }
};
// //display generated password in the password field
function writePassword() {
  var password = generateAPassword(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//function that compiles an array based on answers/ arrays methods
function generatePassword() {
  var passwordArray = [];
  var password = "";
  var specialCharArray = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    "|",
    ":",
    ";",
    ",",
    "'",
    "''",
    "<",
    ",",
    ">",
    ".",
    "?",
    "/",
  ];
  // loop over length and characters call generator function for each type
  for (var i = 0; i < char; i++) {
    var charType = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    // random lowercase and user selected lowercase
    if (charType == 1 && lower == true) {
      charRandom = Math.floor(Math.random() * (122 - 97 + 1) + 97);
      var passwordChar = String.fromCharCode(charRandom);
      passwordArray.push(passwordChar);
      // random uppercase and user selected uppercase
    } else if (charType == 2 && upper == true) {
      charRandom = Math.floor(Math.random() * (90 - 65 + 1) + 65);
      var passwordChar = String.fromCharCode(charRandom);
      passwordArray.push(passwordChar);
      // random  number and user selected number
    } else if (charType == 3 && numeric == true) {
      charRandom = Math.floor(Math.random() * (57 - 48 + 1) + 48);
      var passwordChar = String.fromCharCode(charRandom);
      passwordArray.push(passwordChar);
      // random symbol and user selected special character
    } else if (charType == 4 && special == true) {
      charRandom = Math.floor(
        Math.random() * (specialCharArray.length - 1 - 0 + 1) + 0
      );
      var passwordChar = specialCharArray[charRandom];
      passwordArray.push(passwordChar);
      // re-loop if criteria not met
    } else {
      i -= 1;
    }
  }
  // convert passwordArray to string
  password = passwordArray.join("");
  return password;
}

// welcome message
window.alert(
  "Welcome to Password Generator. Please answer the following prompts to get started."
);
// prompt user to select password criteria
selectCriteria();
// add event listener to generate button & run selectCriteria function
