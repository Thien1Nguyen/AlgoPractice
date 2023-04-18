/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

const nums6 = [1, 4, 5, 1, 4, 5, 8, 9, 2, 1, 4, 5]
const expected6 = 8


/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {

    if (nums.length == 0) { // if condition to check if nums lenght is 0 and if it is then return null
        return null
    }

    map = {}
    list = []


    for (let i = 0; i < nums.length; i++) { // setting up a loop to irrate through nums array
        // could also use this kind of loop >> for(num in nums){} and then have if condition like if(!map[num]){}

        if (!map[nums[i]]) { // an if conditional to check if nums[i] is in the map as a key, if not add nums[i] as a key and have a key value of 1
            map[nums[i]] = 1
        }
        else {
            map[nums[i]]++; // else if nums[i] is already a key, then increase the key value by 1
        }
    }



    for (let i = 0; i < nums.length; i++) { // a for loop to irrate through nums array once again
        if (map[nums[i]] == 1) { // an if conditional to check nums[i] as a key and if its found return nums[i]
            return nums[i]
        }
    }

}

console.log(firstNonRepeated(nums1), 'expected: ', expected1)
console.log(firstNonRepeated(nums2), 'expected: ', expected2)
console.log(firstNonRepeated(nums3), 'expected: ', expected3)
console.log(firstNonRepeated(nums4), 'expected: ', expected4)
console.log(firstNonRepeated(nums5), 'expected: ', expected5)
console.log(firstNonRepeated(nums6), 'expected: ', expected6)