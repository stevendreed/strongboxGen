/*
script.js

this file contains app functions to respond to user input events, provide
functionality to index.html, and build out elements in response to these
inputs
+=================================================================================================+
*/
var generateBtn = document.querySelector(`#generate`);

// Write password to the #password input
function writePassword()
{
  console.log('welcome to writePassword()'); // debugging
  // gather options configured from end-user out of html data attr  
  // let pwOptions = {}; // todo: set key-data pair to match with pw options
  let pwOptForm = document.getElementById('pw-opt-form');

  let incUpp = pwOptForm
  .getElementById('inc-upper').value
  let incNum = pwOptForm
    .getElementById('inc-numeric').value
  let incSymb = pwOptForm
    .getElementById('inc-symbols').value
  let lenRange = pwOptForm
    .getElementById('len-range').value
  
// pass pwGen args based on what was enabled by end-user
  let password = pwGen({
    incUpp, incNum, incSymb, lenRange
  });
  // set text value to equal generated password
  document.querySelector(`#password`)
  .value = password;
  // render password onto the page
}

/*
userInput(null)

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
// function usrInput(inputOptions)
// {
//   // find element with card class
//   const passwordCard = document.getElementsById(`pw-options`);
//   console.log(`pw-options: ${passwordCard}`); // debugging
//   let inputBtn = document.createElement(`input`); // create an  <input> element on the page
//   console.log(`inputBtn: ${inputBtn}`); // debugging

//   // loop through the input options and add display text, set the input type,
//   // add a tracking no to find the order easily
//   let tracker = 0;

//   // loop through each object and assign a button with each property
//   for (object in inputOptions)
//   {
//     inputBtn.textContent = object.displayText;
//     console.log(inputBtn.textContent); // debugging
//     inputBtn.setAttribute(`type`, object.inputType);
//     console.log(inputBtn.type); // debugging
//     inputBtn.setAttribute(`data-no`, ++tracker);
//     console.log(inputBtn.dataNo); // debugging
    
//     // create input in UI
//     document.createElement(`input`);
//     passwordCard.appendChild(inputBtn);
//   }
// } // end usrInput

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

/*
* initPwOptions(object of objects)
* this function initializes a set of buttons and inputs within a form tag
* returns an object of button-tags and value entered as key-value pairs
*/
// const initPwOptions = function(pwObj)
// {
//   // find div to append child form and grandchildren buttons to
//   const inputFieldEl = document.getElementsByClassName(`pw-options`)
//   .createElement(`form`)
//   .setAttribute(`id`, `pwForm`);
//   for (let object in pwObj)
//   {
//     const newInEl = inputFieldEl.createElement(`input`)
//     .setAttribute(`name`, object.displayText)
//     .setAttribute(`type`, object.inputType)
//     .setAttribute(`data-attribute`, object)

//     inputFieldEl.appendChild(newInEl); // add as child to the input form
//   } // end for in

// } // end initPwOptions


// Dynamically create user input options
// usrInput({
//   includeUpper:
//   {
//     displayText: `Include upper case characters? {A, B, C, ...}`,
//     inputType: `checkbox`,
//     enabled: false
//   },
//   includeNum:
//   {
//     displayText: `Include numeric characters? {1, 2, 3, ...}`,
//     inputType: `checkbox`,
//     enabled: false
//   },
//   includeSymbols:
//   {
//     displayText: `Include symbols? {$, #, |, ...}`,
//     inputType: `checkbox`,
//     enabled: false
//   },
//   pwLen:
//   {
//     displayText: `Set a length from 8 to 128`,
//     inputType: `range`,
//     enabled: false
//   }
// });

// Add event listener to generate button
writePassword();
generateBtn.addEventListener(`click`, writePassword());
