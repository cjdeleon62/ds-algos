const maxSubArraySum = require('./maxSubArraySum');

test('should pass all cases', () => {
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubArraySum([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubArraySum([4, 2, 1, 6, 2], 4)).toBe(13);
    expect(maxSubArraySum([], 4)).toBe(null);
});