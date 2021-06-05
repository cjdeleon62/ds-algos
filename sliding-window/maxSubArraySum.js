/**
 * Write a function called maxSubArraySum which accepts
 * an array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive
 * elements in the array.
 */
function maxSubArraySum(values, n) {
    if (values.length < n) return null;
    
    let max = 0;
    let tempMax = 0;

    // find the first n elements sum
    for (let i = 0; i < n; i++) {
        max += values[i];
    }

    // assign tempMax to the current max
    tempMax = max;

    // move the window over and check if the window sum is larger than the current max sum
    for (let i = 0; i < values.length - n; i++) {
        tempMax = tempMax - values[i] + values[i + n];
        max = Math.max(tempMax, max);
    }

    // return the highest sum
    return max;
}

module.exports = maxSubArraySum;