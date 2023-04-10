/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, , 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    let space_check = []; // setting up an array to keep track of the index for each "person" in queue
    let clear = true; // boolean to check if people are social dist correctly

        for (let i = 0; i < queue.length; i++) { // a for loop to iterate through the queue array
            if (queue[i] == 1) { // if queue[i] is 1, the index gets recorded into the new array space_check
                space_check.push(i)
            }
        }
        for (let k = space_check.length - 1; k > 0; k--) { // a for loop to iterate through space_check array
            if (space_check[k] - space_check[k - 1] < 6) { // a condition to check if the index value pair space_check is less than 6
                clear = false; // if it is we switch clear to false and return clear as false
                return clear
            }
        }
        return clear // return clear as true if ya'll done social dist correctly
}


console.log(socialDistancingEnforcer(queue1), "expected:", expected1)
console.log(socialDistancingEnforcer(queue2), "expected:", expected2)
console.log(socialDistancingEnforcer(queue3), "expected:", expected3)
console.log(socialDistancingEnforcer(queue4), "expected:", expected4)

/*****************************************************************************/