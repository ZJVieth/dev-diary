/**
 * # Utility Functions for string operations
 * <[js <[string
 *
 * <°Functions and code snippets related to strings.°>
 */


/*
 * <[reverse
 */
const reverseString = (string) => {
  return string
    .split("")
    .reverse()
    .join("");
};

/**
 * Concats an array of classNames into one string.
 * @param {Array<string>} names 
 * @returns {string} className
 */
const className = names => {
  return names.join(" ")
}