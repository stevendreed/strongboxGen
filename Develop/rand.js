/* 
rand.js

this file prototypes {1} myRand() and {2} mySeeder functions.

these functions, when used in conjunction, randomly generate ASCII range values
which can be used to generate the actual random component of password elements
+=============================================================================+
*/

/*
mySeeder()

takes the current epoch time and returns it as an integer

notice that while this is seemingly random, taking a time-based value like this
is NOT random. This is a psuedorandom generator, meaning that it is difficult
for a human to predict the output, but this does NOT mean it is challenging
for a dedicated attacker to model
*/
function mySeeder()
{
    // obtain the current date
    const date = Date.now();
    /*
    MZN docs: https://developer.mozilla.org/
    en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
    */
    return Math.floor(date);
} // end mySeeder


/*
myRand(numberInputToSeed)

myRand accepts an integer seed value, generates a psuedorandom val
from xorshift operations, takes the absolute value, then mod by the range 
this value should be spread across

this function returns a value from 0 to n - 1 -> change n to change the
upper range of the function

for information on xorshift psuedorandom generators, see
see: https://www.iro.umontreal.ca/~lecuyer/myftp/papers/xorshift.pdf
*/
function myRand(seed)
{ 
    let n = 2048 // set n to be upper value + 1
    seed = seed >> 3 // primes
    seed = seed << 5
    seed = seed >> 7
    return (Math.abs(seed)) % n;
}
