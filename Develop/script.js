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
  // build a list of elements for: lower/uppercase, numeric, special chars,
  // and length of password (7 < n < 129)

  var password = pwGen();
  var passwordText = document.querySelector(`#password`);
  // set text value to equal generated password
  passwordText.value = password;
  // render password onto the page

}

/*
userInput()

generates buttons on the page that allow the end-user to select what properties
they want their password to have

properties include:
 - include upper & lower, just upper, just lower
 - include numeric [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 - include special chars: [ , !, ", #, $, %, &, ', (, ), *, +, ',',-, .,
                            :, ;, <, =, >, ?, @, [, ], ^, _, `, {, |, }, ~]
*/
function usrInput()
{
  const passwordCard = document.getElementsByClassName(`card`);
}

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
