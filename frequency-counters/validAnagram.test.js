const validAnagram = require('./validAnagram');

test('should pass all cases', () => {
    expect(validAnagram('', '')).toBe(true);
    expect(validAnagram('aaz', 'zza')).toBe(false);
    expect(validAnagram('azz', 'zzaa')).toBe(false);
    expect(validAnagram('azz', 'zza')).toBe(true);
});