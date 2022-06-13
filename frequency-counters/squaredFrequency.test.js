const same = require('./squaredFrequency');

test('should pass all these cases', () => {
        expect(same(
            [1, 2, 3],
            [4, 1, 9]
        )).toBeTrue;
        expect(same(
            [1, 2, 3],
            [1, 9]
        )).toBeFalse;
        expect(same(
            [1, 2, 1],
            [4, 4, 1]
        )).toBeFalse;
});