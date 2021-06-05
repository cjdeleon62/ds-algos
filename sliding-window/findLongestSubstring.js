const { words } = require("lodash");

/**
 * Write a function called findLongestSubstring, which accepts
 * a string and returns the length of the longest substring
 * with all distinct characters.
 */
function findLongestSubstring(word) {
    if (!findLongestSubstring) return 0;

    let maxLength = 0;
    let start = 0;
    let end = 0;
    const wordMap = {};

    while (end < word.length) {
        if (!wordMap.hasOwnProperty(word.charAt(end))) {
            wordMap[word.charAt(end)] = 1;
            maxLength = Math.max(maxLength, end + 1 - start);
        } else if (wordMap.hasOwnProperty(word.charAt(end))) {
            start = end;
        }
        end++;
    }

    return maxLength;
}

module.exports = findLongestSubstring;