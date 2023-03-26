/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true*/







var containsDuplicate = function (nums) {

    const s = new Set(nums); // creating a set from array nums
    console.log(s);
    return s.size !== nums.length // to check if the amount of unique elements is the same as the nums lenght. If theyre the same then no duplicate return false, but if set size is < nums lenghts then there are dubs

    // double = false; <<my solution
    // for(let i = 0 ; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[j] == nums[i]){
    //             double = true;
    //             return double;
    //         }
    //     }

    // }
    // return double;
};

console.log(containsDuplicate([1, 2, 1, 4]));
