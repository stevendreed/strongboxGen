/*
script.js
+=================================================================================================+
*/
const generateBtn = document.getElementById(`generate`);

// Write password to the #password input
const writePassword = function ()
{
  console.log('welcome to writePassword()'); // debugging
  console.log(document.getElementById('inc-upper')); // debugging
  let pwOptions = [
    document.getElementById('inc-upper').checked,
    document.getElementById('inc-numeric').checked,
    document.getElementById('inc-symbols').checked,
    document.getElementById('len-range').value,
];
  let password = '';
  let pwArray = pwGen(pwOptions); // pass an array for checked values
  for (i in pwArray)
  {
    password += pwArray[i];
  }
  // set text value to equal generated password
  document.querySelector(`#password`)
  .value = password;
  // render password onto the page
}

/*

password properties include:
 - include upper & lower, just upper, just lower
 - number of these (optional)
 - include numeric [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 - number of these (optional)
 - include special chars: [ , !, ", #, $, %, &, ', (, ), *, +, ',',-, .,
                            :, ;, <, =, >, ?, @, [, ], ^, _, `, {, |, }, ~]
 - number of these (optional)
 - set password length from 8 to 128
*/
const pwGen = function (inputArgs)
{
  let pwOut = [];
  let pwLen = inputArgs[3];
  // build empty array
  for (let i = 0; i < pwLen; i++)
  {
    pwOut.push(''); // blank space
  }
  if (!inputArgs)
  {
    inputArgs.append(true);
    inputArgs.append(true);
    inputArgs.append(true);
    inputArgs.append("12"); // this means 6 filler lowercase chars by default
  }
  console.log(inputArgs);
  if (inputArgs[0])
  {
    // WHILE LOOP: loop through and randomly insert upper case chars to random
    // indices. 1000 is to prevent algorithmic infinite loop
    let i = 0;
    let k = 0;
    while (i < 1000 && k < 2)
    {
      let n = myRand(mySeeder(), pwLen);
      if (pwOut[n] === '')
      {
        // return a string from an ASCII value. A = ASCII 65, therefore
        // we can add 65 to any return from 0 to 25 and generate a capital
        // letter
        pwOut[n] = String.fromCharCode(myRand(mySeeder(), 26) + 65);
        k++; // success counter
        console.log(`successes = ${k} || pwOut = ${pwOut}`);
      }
      i++; // failsafe counter
    }
    console.log(`after adding capitals: ${pwOut}, password len = ${pwLen}`);
  }
  if (inputArgs[1])
  {
    let i = 0;
    let k = 0;
    while (i < 1000 && k < 2)
    {
      let n = myRand(mySeeder(), pwLen);
      if (pwOut[n] === '')
      {
        // return a string from an ASCII value. A = ASCII 65, therefore
        // we can add 65 to any return from 0 to 25 and generate a capital
        // letter
        pwOut[n] = myRand(mySeeder(), 10);
        k++; // success counter
        console.log(`successes = ${k} || pwOut = ${pwOut}`);
      } // end if 
      i++; // failsafe counter
    } // end while
    console.log(`after adding numbers: ${pwOut}, password len = ${pwLen}`);
  } // end if
  if (inputArgs[2])
  {
    let i = 0;
    let k = 0;
    while (i < 1000 && k < 2)
    {
      let n = myRand(mySeeder(), pwLen);
      if (pwOut[n] === '')
      {
        const allSpecialChars = ['!', '"', '#', '$', '%', '&', '\'', '(', ')',
                                 '*', '+', ',', '-', '.', '/', ':', ';', '<',
                                 '=', '>', '?', '@', '[', ']', '^', '_', '`',
                                 '{', '|', '}', '~'];
        let specChar = myRand(mySeeder(), allSpecialChars.length);
        pwOut[n] = allSpecialChars[specChar];
        k++; // success counter
        console.log(`successes = ${k} || pwOut = ${pwOut}`);
      } // end if 
      i++; // failsafe counter
    } // end while
    console.log(`after adding special chars: ${pwOut}, password len = ${pwLen}`);
  }
  // loop through and fill remaining with lowercase chars
  for (let i = 0; i < pwLen; i++)
  {
    if (pwOut[i] === '')
    {
      pwOut[i] = String.fromCharCode(myRand(mySeeder(), 26) + 97);
    }
  }
  console.log(`final pwOut = ${pwOut}`)
  return pwOut;
}

// Add event listener to generate button
// writePassword();
generateBtn.addEventListener('click', () =>
{
  let pwLen = document.getElementById('len-range').value;
  if (pwLen >= 8 && pwLen <= 128)
  {
    writePassword();
  }
  else
  {
    console.log(`error: please enter a valid length (value entered: ${pwLen})`);
  }
});
