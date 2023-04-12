/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

// const arr1 = ["a", "a", "a"];
// const expected1 = {
//     a: 3,
// };

// const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected2 = {
//     a: 2,
//     b: 1,
//     c: 3,
//     B: 1,
//     d: 1,
// };

// const arr3 = [];
// const expected3 = {};

// /**
//  * Builds a frequency table based on the given array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<string>} arr
//  * @returns {Object<string, number>} A frequency table where the keys are items
//  *    from the given arr and the values are the amnt of times that item occurs.
//  */
// function makeFrequencyTable(arr) {
//     let map = {};
//     for (let i = 0; i < arr.length; i++) { // Setting up a for loop to itterate through arr 
//         if (!map[arr[i]]) { // an if condition to check if arr[i] is in the map already, and if arr[i] not we "push" into it
//             map[arr[i]] = 1; // 
//         }
//         else{ //an else if condition for when arr[i] IS already in the map, and we add 1 to the key value
//             map[arr[i]] += 1;
//         }
//     }
//     return map; // return the map 
// }

// console.log(makeFrequencyTable(arr1), "expected:", expected1)
// console.log(makeFrequencyTable(arr2), "expected:", expected2)
// console.log(makeFrequencyTable(arr3), "expected:", expected3)


/*****************************************************************************/
/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) { // Setting up a for loop to itterate through nums
        if (!map[nums[i]]) { // an if condition to check if nums[i] is in the map already, and if nums[i] is not we "push" it into the map
            map[nums[i]] = 1;
        }
        else{ // an else if condition for when nums[i] is already in the map, if so we add 1 to the key value of nums[i]
            map[nums[i]] += 1;
        }
    }
    for(j in map){ // a new for loop to itterate through the map
        if(map[j] % 2 == 1){ // if the key value is odd then we return the key
            return j
        }

    }
}

console.log(oddOccurrencesInArray(nums1),"expected:", expected1)
console.log(oddOccurrencesInArray(nums2),"expected:", expected2)
console.log(oddOccurrencesInArray(nums3),"expected:", expected3)
console.log(oddOccurrencesInArray(nums4),"expected:", expected4)
/*****************************************************************************/
