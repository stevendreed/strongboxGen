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
    const date = Date.now();
    /*
    MZN docs: https://developer.mozilla.org/
    en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
    */
    // const date = Date();
    // console.log(date);
    // instance an empty array
    // let numericStr = [];

    // loop through date string and copy only numeric values to array

    // for (let i = 0; i < date.length; i++)
    // {
    //     console.log(date[i]);
    //     if (!isNaN(date[i]))
    //     {
    //         console.log(!isNaN(date[i]));
    //         numericStr.push(date[i]);
    //         console.log(`numeric string: ${numericStr}`)
    //     } // end if
    // } // end for

    // // remove unwanted `,`s
    // for (let i = 0; i < numericStr.length; i++)
    // {
    //     if (numericStr[i] % 1 != numericStr[i])
    //     {
    //         numericStr.splice(i, 1);
    //     }
    //     console.log(`numeric string: ${numericStr}`);
    // }

    // parse a float from the numeric-only string
    // set as an integer
    // return the generated seed value
    // console.log(`return val: ${Math.floor(parseFloat(numericStr))}`)
    // return Math.floor(parseFloat(numericStr));
    return Math.floor(date);
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
