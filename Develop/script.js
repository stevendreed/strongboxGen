/*
script.js

this file contains app functions to respond to user input events, provide
functionality to index.html, and build out elements in response to these
inputs
+=============================================================================+
*/
var generateBtn = document.querySelector(`#generate`);

// Write password to the #password input
function writePassword()
{
  var password = generatePassword();
  var passwordText = document.querySelector(`#password`);

  passwordText.value = password;
  // build a list of elements for: lower/uppercase, numeric, special chars,
  // and length of password (7 < n < 129)




  // render password onto the page

}

// function usrInput(MAXLEN)
// {
//   // adds default behavior to usrInput() function
//   if (typeof MAXLEN === `undefined`)
//   {
//     MAXLEN = 64;
//   }
// }

// [# of caps, # of nums, # symbols, # total]
function pwGen(inputArgs)
{
  // default behavior
  if (!inputArgs)
  {
    inputArgs.append(2);
    inputArgs.append(2);
    inputArgs.append(2);
    inputArgs.append(12); // this means 6 filler chars by default
  }
  let pwOut = [];
  

  return pwOut;
}

// Add event listener to generate button
generateBtn.addEventListener(`click`, writePassword());
