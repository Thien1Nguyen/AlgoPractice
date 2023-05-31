/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.

    Output: only the shared values between the two arrays (deduped).

    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
//Blake's Nested For loops
function orderedIntersection(sortedA, sortedB) {
    const new_arr = [];
    for (let i = 0; i < sortedA.length; i++) {
        for (let j = 0; j < sortedB.length; j++) {
            if (sortedA[i] == sortedB[j] && !new_arr.includes(sortedA[i])) {
                new_arr.push(sortedA[i])
            }
        }
    }
    return new_arr

}

/*****************************************************************************/
//Kyle's HashMap
/*function orderedIntersection(sortedA, sortedB) {
    let hash = {}
    for (let i=0;i<sortedA.length;i++){
        if (!hash[ sortedA[i] ]){
            hash[sortedA[i]] = true
        }
    }



    let outs = []
    for (let i=0;i<sortedB.length;i++){
        if (hash[sortedB[i]]){
            outs.push(sortedB[i])
            hash[sortedB[i]] = false
        }        
    }
    return outs
}*/


//module.exports = { orderedIntersection };