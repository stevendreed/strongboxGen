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

// const crypto = require('crypto');

function mySeeder()
{
  // obtain the current date
  const date = Date.now();
  /*
  MZN docs: https://developer.mozilla.org/
  en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
  */
  // special thanks to:
  // https://stackoverflow.com/questions/4083204/secure-random-numbers-in-javascript
  return Math.floor(date) % window.crypto.getRandomValues(new Uint16Array(1));
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
function myRand(seed, n)
{ 
    if (!n)
    {
        n = 2048
    }
    seed = seed >> 3 // primes
    seed = seed << 5
    seed = seed >> 7
    return (Math.abs(seed)) % n;
}
