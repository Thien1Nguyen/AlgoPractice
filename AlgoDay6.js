// Two Sum from LeetCode
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// My Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];        // Blank array to hold the result
    for(var i = 0; i < nums.length; i++){ // a loop to cycle through nums length
        let temp = nums[i]; // to hold on to one of the index to compare it with the second index
        for(var j = i+1; j<nums.length; j++){ // cycling through the rest of the index to find the second result
            if(nums[i] + nums[j] === target){
            result.push(i)
            result.push(j)
            return result;
            }
        }
    }
};
//Spencer hash map solution 
function twoSum(arr, target) {
    //Your code here
    var seen = {} //hash map object will allow O(1) look up time of already seen values. 
    // we will store KVPs with the key being the value from the array, and the value being its index 
    
    for (var i = 0; i < arr.length; i++){ //loop through the array
        var currentValue = arr[i]; // initialize current value to consider
        var delta = target - currentValue; // let delta be the value needed to reach target with currentValue
        if (seen.hasOwnProperty(delta)){ // if delta exists in our hash map ( O(1) look up time) // if (seen[delta])
            return [seen[delta], i] // return an array containing the two indices
        }
        seen[currentValue] = i; // otherwise, add current value and its index as a KVP to our seen object
    }

}