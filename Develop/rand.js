/* 
rand.js

this file prototypes {1} myRand() and {2} mySeeder functions.

these functions, when used in conjunction, randomly generate ASCII range values
which can be used to generate the actual random component of password elements
+=============================================================================+
*/


function mySeeder()
{
    // obtain the current date
    const date = Date();

    // instance an empty array
    let numericStr = [];

    // loop through date string and copy only numeric values to array

    for (let i = 0; i < date.length; i++)
    {
        if (!isNaN(date[i]))
        {
            numericStr.push(date[i]);
        } // end if
    } // end for
    // parse a float from the numeric-only string
    // set as an integer
    // return the generated seed value
    return Math.floor(parseFloat(numericStr));
} // end mySeeder


/*
myRand(numberInputToSeed)

myRand accepts an integer seed value, bitwise shifts it two to the right,
takes the absolute value, then mod by the range this value should be spread
across

this function returns a value from 0 to n - 1
*/
function myRand(seed)
{ 
    let n = 2048 // set n to be upper value + 1
    return (Math.abs(seed >> 2)) % n;
}
