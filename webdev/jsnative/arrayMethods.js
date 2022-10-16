/**
 * # Array Methods in native JS
 * <[js
 * <[array
 * <[list
 */

var n_out = 0
var bool_result = false

const nr_array = [1, 2, 3, 4, 5]
const obj_array = [
    {
        name: "Mister",
        id: 1001
    },
    {
        name: "Misses",
        id: 1002
    },
    {
        name: "Kiddo",
        id: 1001
    }
]

// <[map
const mapped_nr_array = nr_array.map((el, i) => el + i)
// [1, 3, 5, 7, 9]


// <[forEach
n = 0
nr_array.forEach((el, i) => n += el)
// n = 15


// <[reduce
n = 0
n = nr_array.reduce((runningValue, el, i) => runningValue + el)
// n = 15
// An initial value can be provided to the reduce method as the second parameter.
// [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce]


// <[reduceRight
const n_str = ""
n_str = nr_array.reduceRight((accumulator, el) => accumulator.concat(el))
// n_str = "54321"
// [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight]


// <[filter
// iterates over the entire array and returns all matching elements
const filtered_nr_array = nr_array.filter(el => el%2 === 0)
// [2, 4]


// <[find
// iterates over the array until the first matching element
var found_obj = obj_array.find(el => el.id === 1002)
// { name: "Misses", id: 1002 }

// Alternative find methods

found_obj = obj_array.findLast(el => el.id === 1001)
// { name: "Mister", id: 1001 }

var found_i = obj_array.findIndex(el => el.id <= 1000)
// -1 (not found)

found_i = obj_array.findLastIndex(el => el.id >= 1000)
// 2

// <[every
const isBelowTen = currValue => currValue < 10
bool_result = nr_array.every(isBelowTen)
// true
// [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every]


// <[fill
const filled_nr_array = nr_array.fill(0, 2, 3)
// [1, 2, 0, 0, 5]
// (valueToFill, startIndex, endIndex)
// [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill]


// <[flat
const flattened_nr_array = [...nr_array, [6, 7]].flat()
// [1, 2, 3, 4, 5, 6, 7]
// Allows to specify the depth, in cases like [1, 2, [[[3], 4]], 5]
// [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat]


// <[flatMap
const flattened_mapped_nr_array = [...nr_array, [6, 7]].flatMap(el => el + 1)
// [2, 3, 4, 5, 6, 7, 8]
// can only flatten by one level
// [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap]


// 

