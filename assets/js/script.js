// get references to generate element
var generateBtn = document.querySelector("#generate");

// write password to password input functionality
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// generate password functionality
function generatePassword() {
  var charsNumbers = "0123456789";
  var charsLowercase = "abcdefghijklmnopqrstuvwxyz";
  var charsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charsSymbols = "!@#$%^&*()";
  var chars = "";

  var passwordLength = prompt("How long does your password need to be?");
  var confirmNumbers = confirm("Would you like to include numbers?");
  var confirmLowercase = confirm(
    "Would you like your password to include lower case letters?"
  );
  var confirmUppercase = confirm(
    "Would you like your password to include upper case letters?"
  );
  var confirmSymbols = confirm(
    "Would you like your password to include symbols?"
  );
  var password = "";

  // require at least 1 password to be chosen
  if (
    confirmNumbers === false &&
    confirmUppercase === false &&
    confirmLowercase === false &&
    confirmSymbols === false
  ) {
    return "To generate as secure password, select at least one of the provided options.";
  }

  // password length requirements
  if (passwordLength < 6 || passwordLength > 225) {
      return "Password must be between 6 and 225 characters long."
  }

  // character concatenation
  if (confirmNumbers === true) {
      chars = chars + charsNumbers;
  }
  if (confirmUppercase === true) {
      chars = chars + charsUppercase;
  }
  if (confirmLowercase === true) {
      chars = chars + charsLowercase;
  }
  if (confirmSymbols === true) {
      chars = chars + charsSymbols;
  }

  // loop to create a password from variables
  for (var i = 0; i <passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
  }
  return (password);
}
// event listener for generate button
generateBtn.addEventListener("click", writePassword);
