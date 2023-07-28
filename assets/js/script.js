// get references to generate element
const generateBtn = document.querySelector("#generate");

// write password to password input functionality
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// generate password functionality
function generatePassword() {
  const charsNumbers = "0123456789";
  const charsLowercase = "abcdefghijklmnopqrstuvwxyz";
  const charsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charsSymbols = "!@#$%^&*()";
  let chars = "";

  const passwordLength = prompt("How many characters does your password need to have? Must be between 6 and 225 characters.");
  const confirmNumbers = confirm("Would you like to include numbers?");
  const confirmLowercase = confirm(
    "Would you like your password to include LOWER case letters?"
  );
  const confirmUppercase = confirm(
    "Would you like your password to include UPPER case letters?"
  );
  const confirmSymbols = confirm(
    "Would you like your password to include symbols?"
  );
  let password = "";

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
  for (let i = 0; i <passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
  }
  return (password);
}
// event listener for generate button
generateBtn.addEventListener("click", writePassword);
