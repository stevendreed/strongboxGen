/* 
rand.js

this file prototypes {1} myRand() and {2} mySeeder functions.

these functions, when used in conjunction, randomly generate ASCII range values
which can be used to generate the actual random component of password elements
+=============================================================================+
*/


function mySeeder()
{
    // filler function that returns an integer based on epoch time
    return Math.floor(parseFloat(Date()));
}


/*
myRand(numberInputToSeed)

this function returns a value from 0 to 2048 with the modulus operator
*/
function myRand(seed)
{ 
    // returns values from 0 - 2047
    return (seed >> 2) % 2048;
}
