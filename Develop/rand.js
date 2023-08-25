/* 
rand.js

this file prototypes {1} myRand() and {2} mySeeder functions.

these functions, when used in conjunction, randomly generate ASCII range values
which can be used to generate the actual random component of password elements
+=============================================================================+
*/

function myRand(seed)
{
    const date = new Date(); 
    return Math.floor(parseFloat(Date >> 2) % 2048) // returns values from 0 - 2048
}

function mySeeder()
{
    // filler function that returns an integer based on epoch time
    return Math.floor(Date() / 1024);
}

