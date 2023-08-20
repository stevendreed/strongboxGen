// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function usrInput(MAXLEN)
{
  // adds default behavior to usrInput() function
  if (typeof MAXLEN === 'undefined')
  {
    MAXLEN = 64;
  }
}

function pwGen(validChars, validNums, validSymb, len)
{
  let pwOut = [];

  

  return pwOut;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
