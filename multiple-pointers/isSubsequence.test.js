const isSubsequence = require('./isSubsequence');

test('should pass all cases', () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true);
    expect(isSubsequence('sing', 'sting')).toBe(true);
    expect(isSubsequence('abc', 'abracadabra')).toBe(true);
    expect(isSubsequence('abc', 'acb')).toBe(false);
});