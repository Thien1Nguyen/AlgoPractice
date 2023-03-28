// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// var productExceptSelf = function (nums) {
//     let answer = [];
//     let right = 1;
//     let left = 1;
//     for (let i = 0; i < nums.length; i++) {
//         let j = i;
//         while (j < nums.length) {
//             right = right * nums[j + 1];
//             j++;
//         }
//         while (j >= 0) {
//             left = left * nums[j - 1];
//             j--;
//         }
//         answer.push(left * right);
//     }
//     return answer;
// };
//COINSTAIRCASE
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.


// Example 1:


// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.
// Example 2:


// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.
var arrangeCoins = function(n) {
    let row = 1;
    while(n >= row){ 
    n = n - (row);
        row++;
    }
    return row-1;
};

console.log(arrangeCoins(5)) // output: 2
console.log(arrangeCoins(8)) // output: 3
console.log(arrangeCoins(11)) // output: 4