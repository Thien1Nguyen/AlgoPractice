// CHAPTER 1 – FUNDAMENTALS
// Sigma
function sigma(num) {
    var result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

console.log(sigma(3));

// Factorial
function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5))

// Threes and Fives
// Create function ThreesFives() that adds each value from 100 and 4000000 (inclusive) if that value
// is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
// Second: Change your function to make a BetterThreesFives(start,end)where start and end
// values are customizable. You can think of the above ThreesFives() function as
// BetterThreesFives(100,4000000).

function ThreeFives(start,end) {
    var result = 0;
    for (var i = start; i <= end; i++) {
        if ( (i % 3 === 0 || i % 5 === 0) && (i % 15 !== 0) ) {
            result = i;
            console.log(i);
        }
    }
}
ThreeFives(1,30);

