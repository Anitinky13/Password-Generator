//Variables
var enter;
var Numeric;
var specialCharacter;
var Uppercase;
var Lowercase;

//create arrays for each character set
character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// Numbers included
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// a-z letters
alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Space is for the Uppercase conversion
space = [];

var Preffered;

var toUpper = function (x) {
  return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  newps = generatePassword();
  document.getElementById("password").placeholder = newps;
});

// function to generate password
function generatePassword() {
  //window prompt for length
  enter = parseInt(prompt("Choose characters between 8 and 128."));

  if (!enter) {
    alert("Please select a value of characters for your password.");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Please choose between 8 and 128."));
  } else {
    //window confirm for numerics
    Numeric = confirm("would you like numerics in your password?");
    specialCharacter = confirm(
      //window confirm for symbols
      "Would you like special characters in your password?"
    );
    //window confirm for upper case letter
    Uppercase = confirm("Would you like uppercase letters in your password?");
    //window confirm for lower case letter
    Lowercase = confirm("Would you like lowercase letters in your password?");
  }

  // If all answers are a no.
  if (!specialCharacter && !Numeric && !Uppercase && !Lowercase) {
    Preffered = alert("You must choose at least one criteria!");
  }

  //function that compiles an array based on answers/ arrays methods
  else if (specialCharacter && Numeric && Uppercase && Lowercase) {
    Preffered = character.concat(number, alpha, alpha2);
  }
  // Else if for 3 yes options
  else if (specialCharacter && Numeric && Uppercase) {
    Preffered = character.concat(number, alpha2);
  } else if (specialCharacter && Numeric && Lowercase) {
    Preffered = character.concat(number, alpha);
  } else if (specialCharacter && Lowercase && Uppercase) {
    Preffered = character.concat(alpha, alpha2);
  } else if (Numeric && Lowercase && Uppercase) {
    Preffered = number.concat(alpha, alpha2);
  } else if (specialCharacter && Numeric) {
    Preffered = character.concat(number);
  } else if (specialCharacter && Lowercase) {
    Preffered = character.concat(alpha);
  } else if (specialCharacter && Uppercase) {
    Preffered = character.concat(alpha2);
  } else if (Lowercase && Numeric) {
    Preffered = alpha.concat(number);
  } else if (Lowercase && Uppercase) {
    Preffered = alpha.concat(alpha2);
  } else if (Numeric && Uppercase) {
    Preffered = number.concat(alpha2);
  } else if (specialCharacter) {
    Preffered = character;
  } else if (Numeric) {
    Preffered = number;
  } else if (Lowercase) {
    Preffered = alpha;
  } else if (Uppercase) {
    Preffered = space.concat(alpha2);
  }

  var password = [];

  //function that generates a password based on the arrays selected and of the selected length(use math.floor math.random)
  for (var i = 0; i < enter; i++) {
    var pickPreffered = Preffered[Math.floor(Math.random() * Preffered.length)];
    password.push(pickPreffered);
  }

  var newps = password.join("");
  UserInput(newps);
  return newps;
}
// //display generated password in the password field;

function UserInput(newps) {
  document.getElementById("password").textContent = newps;
}
//generate button, add eventlistener
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});
