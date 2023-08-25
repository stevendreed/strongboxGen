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
