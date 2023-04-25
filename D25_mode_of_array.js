/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
    var map = {};// creating a map to hold key pairs
    for (var num of nums) { // looping through nums array and add key pairs or increasing key value is key already exist in the map
        if (!map[num]) {
            map[num] = 1;
        }
        else {
            map[num]++;
        }
    }
    var counter = 0; // a counter var to keep track of the highest key value
    var same = true // a same var to check whether or not if all of the key values are the same
    for (key in map) {
        if (map[key] > counter) { // setting counter to the highest key value
            counter = map[key]; 
        }
        if (map[key] < counter) { // checking if all the key values are the same or not, if not then same = false.
            same = false
        }
    }

    new_arr = [] // creating a new array name new_arr so we can push in the keys of map that had the key value equal to counter
    if (nums.length == 1) { // data sanitation, if the nums array length is 1 then we just push w/e that single value into new_arr and return new_arr 
        new_arr.push(nums[0])
        return new_arr
    }
    else { // if nums length is longer than 1 then we loops through map and checking if the key value is equal to counter and if it is, then we add the key into new_arr
        for (key in map) {
            if (map[key] == counter) {
                new_arr.push(key)
            }
        }
        if (!same) { // checking if the key values are all the same, and if they are not then return new_arr
            return new_arr
        }
        else { // if all of the key values are then same then we return an empty array since we don't have a mode.
            return []
        }
    }
}

console.log(mode(nums1), "expected: ",expected1 );
console.log(mode(nums2), "expected: ",expected2 );
console.log(mode(nums3), "expected: ",expected3 );
console.log(mode(nums4), "expected: ",expected4 );
console.log(mode(nums5), "expected: ",expected5 );