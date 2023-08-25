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
  // gather options configured from end-user out of html data attr  
  let pwOptions = {}; // todo: set key-data pair to match with pw options

// pass pwGen args based on what was enabled by end-user
  var password = pwGen(pwOptions);
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
 - number of these
 - include numeric [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 - number of these
 - include special chars: [ , !, ", #, $, %, &, ', (, ), *, +, ',',-, .,
                            :, ;, <, =, >, ?, @, [, ], ^, _, `, {, |, }, ~]
 - number of these
 - set password length from 8 to 128
*/
function usrInput()
{
  // find element with card class
  const passwordCard = document.getElementsByClassName(`card`);

  // append children elements for each button needed

  // set data attributes for whether or not they were checked/clicked

  // set ids for each button to find them easily

  // render each button in a user-friendly way
}

// [# of caps, # of nums, # symbols, # total]
function pwGen(inputArgs)
{
  // default behavior

  // note: pass an object of true/false for each param instead
  if (!inputArgs)
  {
    inputArgs.append(2);
    inputArgs.append(2);
    inputArgs.append(2);
    inputArgs.append(12); // this means 6 filler chars by default
  }
  let pwOut = [];
  console.log(inputArgs);
  return pwOut;
}

// Add event listener to generate button
generateBtn.addEventListener(`click`, writePassword());
