// Generate Coin Change
// Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and
// computes how to represent that amount with the smallest number of coins. Console.log the result.

// function generateCoinChange(cents){
//     var quarter = 0;
//     var dime = 0;
//     var nickel = 0;
//     var penny = 0;
//     var leftOver = 0;

//     if (cents > 25) {
//         leftOver = cents % 25;
//         quarter = Math.floor(cents / 25);
//     }

//     if (leftOver > 10) {
//         dime = Math.floor(leftOver / 10);
//         leftOver = leftOver % 10;
//     }

//     if (leftOver > 5) {
//         nickel = Math.floor(leftOver / 5);
//         leftOver = leftOver % 5;
//     }

//     penny = leftOver;

//     console.log("quarter: " + quarter);
//     console.log("dime: " + dime);
//     console.log("nickel: " + nickel);
//     console.log("penny: " + penny);
// }

// generateCoinChange(76);

/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 18000000000000;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {

    map = {} // setting up a map to put stuff in :D\

    if(cents >= 10000){
        map['big_Ben'] = Math.floor(cents/10000);
                cents -=10000*map['big_Ben']
    }

    if(cents >= 5000){
        map['50_dollar_bill'] = Math.floor(cents/5000);
                cents -=5000*map['50_dollar_bill']
    }

    if(cents >= 2000){
        map['20_dollar_bill'] = Math.floor(cents/2000);
            cents -=2000*map['20_dollar_bill']
    }

    if(cents >= 1000){
        map['10_dollar_bill'] = Math.floor(cents/1000);
            cents -=1000*map['10_dollar_bill']
    }

    if(cents >= 500){
        map['5_dollar_bill'] = Math.floor(cents/500);
            cents -=500*map['5_dollar_bill']
    }

    if(cents >= 100){
        map['dollar'] = Math.floor(cents/100);
        cents -=100*map['dollar']
    }

    if(cents >= 50){
        map['half_dollar'] = Math.floor(cents/50);
        cents -=50*map['half_dollar']
    }

    if(cents >= 25){ // if condition to check if
        map['quarter'] = Math.floor(cents/25);
        cents -= 25*map['quarter']
    }

    if(cents >= 10){
        map['dime'] = Math.floor(cents/10);
        cents -= 10*map['dime']
    }

    if(cents >= 5){
        map['nickel'] = Math.floor(cents/5);
        cents -= 5*map['nickel']
    }

    if(cents >= 1){
        map['penny'] = cents;
    }

    return map;
}

console.log(fewestCoinChange(cents1), "expected: ", expected1 )
console.log(fewestCoinChange(cents2), "expected: ", expected2 )
console.log(fewestCoinChange(cents3), "expected: ", expected3 )
console.log(fewestCoinChange(cents4), "expected: ", expected4 )

/*****************************************************************************/




