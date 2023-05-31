// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/*****************************************************************************/
/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */

// // Spencer's solution
function twoSum(nums, targetSum) {
let map ={} // an empty map to keep track of index value and index as key pairs

    for(let i =0; i<nums.length; i++){// classic for loop to itterate through nums array
        let indxValue = nums[i]; // a vari "indxValue" to keep track of the current index value
        let diff = targetSum - indxValue; // a vair "diff" to keep track of the current diffrence between targetSum and the indexValue

//         // an if condition to check if our map HAS diff within it, if it does return the key value of diff along with i as a new array
        if(map.hasOwnProperty(diff)){
            return([map[diff], i])
            }

            // semi fake else, that just push into our map a key pair of {indxValue : i}
        map[indxValue] = i;
    }
}

function twoSum2(nums, targetSum) {
    
    for(let i =0; i<nums.length - 1; i++){
        // let sum = nums[i]

        for(let j =i + 1; j< nums.length; j++){
            if(nums[i] + nums[j] === targetSum){
                return([i,j])
            }
        }

    }
}


console.log(twoSum2(nums1, targetSum1));
console.log(twoSum2(nums2, targetSum2));
console.log(twoSum2(nums3, targetSum3));