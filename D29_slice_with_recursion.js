/* 
    Recursively reverse a string
    helpful methods:
    str.slice(beginIndex[, endIndex])
    returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

const str3 = "racecar";
const expected3 = "";


/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {
    // checking if str is empty and if it is we return str
    if (str.length == 0) {
        return "";
    }
    // creating new var
    var endIndex = str.slice(str.length - 1, str.length); // endIndex is going to holds the letter that gets slice off
    var rest = str.slice(0, str.length - 1);// rest var wholes the rest of the str that wasn't in endIndex

    
    return newStr = endIndex + reverseStr(rest);
}

console.log("Answer: ", reverseStr(str1), "Expected Answer: ", expected1)
console.log("Answer: ", reverseStr(str2), "Expected Answer: ", expected2)
console.log("Answer: ", reverseStr(str3), "Expected Answer: ", expected3)
/*****************************************************************************/