const findLongestSubstring = require('./findLongestSubstring');

test('should pass all cases', () => {
    expect(findLongestSubstring('rithmschool')).toBe(7);
    expect(findLongestSubstring('bbbbbb')).toBe(1);
});