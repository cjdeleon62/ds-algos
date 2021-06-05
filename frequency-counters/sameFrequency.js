/**
 * Write a function called sameFrequency.
 * Given two positive integers, find out if
 * the two numbers have the same frequency
 * of digits.
 * 
 * Must be O(N)
 */
function sameFrequency(num1, num2) {
    const parsedNum1 = num1.toString();
    const parsedNum2 = num2.toString();

    if (parsedNum1.length !== parsedNum2.length) return false;

    const num1Map = {};
    const num2Map = {};

    for (let char of parsedNum1) {
        num1Map[char] = num1Map[char] ? ++num1Map[char] : 1;
    }

    for (let char of parsedNum2) {
        num2Map[char] = num2Map[char] ? ++num2Map[char] : 1;
    }

    for (let key in num1Map) {
        if (!num2Map.hasOwnProperty(key) || num2Map[key] !== num1Map[key]) {
            return false;
        }
    }

    return true;
}

module.exports = sameFrequency;