/**
 * # Array Methods in native JS
 * <[js
 * <[array
 * <[list

var n_out = 0
const nr_array = [1, 2, 3, 4, 5]

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
// Technically, an initial value can be provided to the reduce method as the second parameter.

