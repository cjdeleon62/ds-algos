/**
 * Implement a function called areThereDuplicates which
 * accepts a variable number of arguments, and checks
 * whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern or the
 * multiple pointer pattern.
 * Time O(N)
 * Space O(N)
 */
 function areThereDuplicates(...args) {
    const argMap = {};

    for (let char of args) {
        if (argMap.hasOwnProperty(char)) {
            return true;
        }

        argMap[char] = 1;
    }

    return false;
}

module.exports = areThereDuplicates;