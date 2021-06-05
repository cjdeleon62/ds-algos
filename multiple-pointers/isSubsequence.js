/**
 * Write a function called isSubsequence which takes
 * in two strings and checks whether the characters
 * in the first string form a subsequence of the
 * characters in the second string. In other words,
 * the function should check whether the characters
 * in the first string appear somewhere in the second
 * string, without their order changing.
 */
function isSubsequence(word1, word2) {
    let word1Pointer = 0;
    let word2Pointer = 0;

    if (!word1.length) {
        return false;
    }

    while (word2Pointer < word2.length) {
        if (word2[word2Pointer] === word1[word1Pointer]) {
            word1Pointer++;
        }

        if (word1Pointer === word1.length) return true;
        word2Pointer++;
    }

    return false;
}

module.exports = isSubsequence;