/*
script.js

this file contains app functions to respond to user input events, provide
functionality to index.html, and build out elements in response to these
inputs
+=============================================================================+
*/
var generateBtn = document.querySelector(`#generate`);

const inputOptions =
{
  includeUpper:
  {
    displayText: `Include upper case characters? {A, B, C, ...}`,
    inputType: `checkmark`
  },
  includeNum:
  {
    displayText: `Include numeric characters? {1, 2, 3, ...}`,
    inputType: `checkmark`
  },
  includeSymbols:
  {
    displayText: `Include symbols? {$, #, |, ...}`,
    inputType: `checkmark`
  },
  pwLen:
  {
    displayText: `Set a length from 8 to 128`,
    inputType: `slider`
  },
}

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

generates inputs on the page that allow the end-user to select what properties
they want their password to have

properties include:
 - include upper & lower, just upper, just lower
 - number of these (optional)
 - include numeric [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 - number of these (optional)
 - include special chars: [ , !, ", #, $, %, &, ', (, ), *, +, ',',-, .,
                            :, ;, <, =, >, ?, @, [, ], ^, _, `, {, |, }, ~]
 - number of these (optional)
 - set password length from 8 to 128
*/
function usrInput()
{
  // find element with card class
  const passwordCard = document.getElementsByClassName(`card`);
  let li = document.createElement("li"); // create an <li> element on the page

  // loop through the input options and add display text, set the input type,
  // add a tracking no to find the order easily
  let tracker = 0;
  for (object in inputOptions)
  {
    li.textContent = inputOptions.object.displayText;
    li.setAttribute(`data-input`, inputOptions.object.inputType);
    li.setAttribute(`data-no`,++tracker);

    // create input in UI
    document.createElement(`input`).
  }
  
  
  // set data attributes for whether or not they were checked/clicked

  // set ids for each button to find them easily

  // append children elements for each button needed

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
