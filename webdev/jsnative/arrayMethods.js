/**
 * # Array Methods in native JS
 * <[js
 * <[array
 * <[list

var n_out = 0
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


// <[filter
// iterates over the entire array and returns all matching elements
const filtered_nr_array = nr_array.filter(el => el%2 === 0)
// [2, 4]


// <[find
// iterates over the array until the first matching element
const found_obj = obj_array.find(el => el.id === 1002)
// { name: "Misses", id: 1002 }

