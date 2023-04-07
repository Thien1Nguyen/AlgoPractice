/*   String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

//   const str1 = "a x a";
//   const expected1 = true;
  
//   const str2 = "racecar";
//   const expected2 = true;
  
//   const str3 = "Dud";
//   const expected3 = false;
  
//   const str4 = "oho!";
//   const expected4 = false;
  
//   /**
//    * Determines if the given str is a palindrome (same forwards and backwards).
//    * - Time: O(?).
//    * - Space: O(?).
//    * @param {string} str
//    * @returns {boolean} Whether the given str is a palindrome or not.
//    */
//   function isPalindrome(str) {
//     let palindrome = true

//     for(let i = 0, j = str.length-1; i <= j, j >= i; i++, j--){ //A for loop starting from the left and moving to the right for i while j will start from the right and moves to the left. 
//         console.log(str[i], str[j])
//         if(str[i] != str[j]){ // if statement to check if the elements at i and j are the same
//             palindrome = false // if they are set palindrome boolean to true
//             return palindrome
//         }
//   }
//   return palindrome
// }
//   console.log(isPalindrome(str1), "expected:"  + expected1)
//   console.log(isPalindrome(str2),"expected:"  + expected2)
//   console.log(isPalindrome(str3), "expected:"  + expected3)
//   console.log(isPalindrome(str4), "expected:"  + expected4)


  /*****************************************************************************/

 /* 
Acronyms
Create a function that, given a string, returns the string’s acronym 
(first letter of each word capitalized). 
Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    let str_new = "";
    for(let x = 0; x < str.length; x++) {
        if((x == 0) && (str[x] != " ")) {
            str_new += str[x];
        } else if((str[x - 1] == " ") && (str[x] != " ")) {
            str_new += str[x];
        }
    }
    return str_new.toUpperCase();
}

console.log(acronymize(str1))
console.log(acronymize(str2))
console.log(acronymize(str3))
console.log(acronymize(str4))

/*****************************************************************************/