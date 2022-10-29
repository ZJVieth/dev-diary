/**
 * # Javascript Math/Number Utilities
 * <[js <[math <[int <[number <[util
 * 
 * <°Code snippets and functions related to math and numbers in javascript.°>
 */

/*
 * <[clamp <[min <[max
 */
/**
 * Limits a value to a range within a maximum and minimum value.
 * @param {number} min 
 * @param {number} max 
 * @param {number} val 
 * @returns number
 */
const clamp = (min, max, val) => {
    if (val < min)
        return min
    if (val > max)
        return max
    return val
}


/*
 * <[wrap <[min <[max
 */
/**
 * Wraps a value back to minimum when exceeding a maximum and back to maximum when
 * exceeding a minimum value.
 * @param {number} low 
 * @param {number} high 
 * @param {number} val 
 * @returns number
 */
const wrap = (low, high, val) => {
    if (val < low)
        return high
    if (val > high)
        return low
    return val
}