/**
 * Frequency Counters
 * Uses objects or sets to collect values/frequencies of values
 * This can often avoid the need for nested loops or O(N2) operations with strings/arrays
 * Example problem: Anagram
 */

 function validAnagram(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
        return false;
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let char of firstWord) {
        if (!frequencyCounter1[char]) {
            frequencyCounter1[char] = 1;
        } else {
            frequencyCounter1[char] += 1;
        }
    }

    for (let char of secondWord) {
        if (!frequencyCounter2[char]) {
            frequencyCounter2[char] = 1;
        } else {
            frequencyCounter2[char] += 1;
        }
    }

    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
}

module.exports = validAnagram;
