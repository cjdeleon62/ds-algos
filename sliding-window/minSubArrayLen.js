/**
 * Write a function called minSubArrayLen which accepts
 * two parameters - an array of positive integers and a
 * positive integer. This function should return the
 * minimal length of a contiguous subarray of which the
 * sums is greater than or equal to the integer passed to
 * the function. If there isn't one, return 0 instead.
 */

function minSubArrayLen(values, target) {
    let start = 0;
    let end = 0;
    let minLength = Infinity;
    let total = 0;

    while (start < values.length) {
        if (total < target && end < values.length) {
            total += values[end];
            end++;
        } else if (total >= target) {
            minLength = Math.min(minLength, end - start);
            total -= values[start];
            start++;
        } else {
            break;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

module.exports = minSubArrayLen;