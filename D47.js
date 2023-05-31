const strA1 = "Hello"
const strB1 = "elloH"

const strA2 = "Testing"
const strB2 = "notthesame"

const strA3 = "Hello"
const strB3 = "asHasdfelldfao"





const fun = (s1, s2) => {
    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()
    let map1 = {}
    let map2 = {}

    for (let i = 0; i < s1.length; i++) {
        if (!map1[s1[i]]) {
            map1[s1[i]] = 1
        }
        else {
            map1[s1[i]] += 1
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (!map2[s2[i]]) {
            map2[s2[i]] = 1
        }
        else {
            map2[s2[i]]++
        }
    }
    // console.log(map1)
    // console.log(map2)
    for (key in map1) {
        if(!map2[key]){
            return false
        }
        if (map1[key] > map2[key]) {
            return false
        }
    }

    return true
}

console.log(fun(strA1, strB1))
console.log(fun(strA2, strB2))
console.log(fun(strA3, strB3))