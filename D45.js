/* 
    Given by Riot games. Rehash an incorrectly hashed string 
    by combining letter count occurrences and alphabetizing them.
*/

const str1 = "b70a164c32a20c10j3a15";

const expected1 = "a199b70c42j3";

/**
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        let eggs = ""
        if (isNaN(s[i]) && !map[s[i]]) {
            for (let j = i + 1; j < s.length; j++) {
                if (isNaN(s[j])) {
                    map[s[i]] = eggs
                    break
                }
                else {
                    eggs += s[j]
                }
                // console.log(map + "map")
                // console.log(eggs + "eggs")
            }
        }
        else if (isNaN(s[i])) {
            for (let h = i + 1; h < s.length; h++) {
                console.log(s[h])
                if (isNaN(s[h]) || h == s.length - 1) {
                    let eggParse = parseInt(eggs)
                    let valParse = parseInt(map[s[i]])
                    map[s[i]] = eggParse + valParse
                    break
                }
                else {
                    eggs += s[h]
                }
            }
            // console.log(eggs + "eggs")
        }
    }
    return map
}
console.log(rehash(str1))
