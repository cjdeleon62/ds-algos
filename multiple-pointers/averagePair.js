/**
 * Write a function called averagePair. Given a sorted
 * array of integers and a target average, determine
 * if there is a pair of values in the array where the
 * average of the pair equals the target average. There
 * may be more than one pair that matches the average target.
 */
function averagePair(values, targetAvg) {
    if (values.length < 2) return false;

    let end = values.length - 1;

    for (let i = 0; i < values.length -1; i++) {
        if ((values[i] + values[end])/2 > targetAvg) {
            end--;
            continue;
        } else if ((values[i] + values[end])/2 === targetAvg) {
            return true;
        }
    }

    return false;
}

module.exports = averagePair;