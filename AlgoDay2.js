// Generate Coin Change
// Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and
// computes how to represent that amount with the smallest number of coins. Console.log the result.

function generateCoinChange(cents) {
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;
    var leftOver = 0;

    if (cents > 25) {
        leftOver = cents % 25;
        quarter = Math.floor(cents / 25);
    }
    if (leftOver > 10) {
        dime = Math.floor(leftOver / 10);
        leftOver = leftOver % 10;

    }
    if (leftOver > 5) {
        nickel = Math.floor(leftOver / 5);
        leftOver = leftOver % 5;
    }
    penny = leftOver;

    console.log("quarter: " + quarter);
    console.log("dime: " + dime);
    console.log("nickel: " + nickel);
    console.log("penny: " + penny);
}

generateCoinChange(26);
