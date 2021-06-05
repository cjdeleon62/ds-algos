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
    const sortedArgs = args.sort(function(a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        }
        return 0;
    });

    let start = 0;
    for (let i = 1; i < sortedArgs.length; i++) {
        if (sortedArgs[i] === sortedArgs[start]) {
            return true;
        }

        start = i;
    }

    return false;
}

module.exports = areThereDuplicates;