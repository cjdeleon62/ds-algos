const sameFrequency = require('./sameFrequency');

test('should pass all cases', () => {
    expect(sameFrequency(182, 281)).toBe(true);
    expect(sameFrequency(34, 41)).toBe(false);
    expect(sameFrequency(3589578, 5879385)).toBe(true);
    expect(sameFrequency(22, 222)).toBe(false);
});