/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array
 * has its corresponding value squared in the second array.
 * The frequency of values must be the same.
 */
const same = (arr, squaredArr) => {
    if (arr.length !== squaredArr.length) return false;
    const frequencyMap = {};

    squaredArr.forEach(num => {
        if (!frequencyMap[num]) {
            frequencyMap[num] = 1;
        } else {
            frequencyMap[num] += 1;
        }
    });

    arr.forEach((num) => {
        if (!frequencyMap.hasOwnProperty(num ** 2)) return false;

        frequencyMap[num ** 2] -= 1;
    });


    for (const value of Object.values(frequencyMap)) {
        if (value < 0) {
            return false;
        }
    }

    return true;
};

module.exports = same;