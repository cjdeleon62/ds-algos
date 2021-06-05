const search = require('./search');

test('should pass all cases', () => {
    expect(search([1, 2, 3, 4, 5, 6], 4)).toBe(4);
    expect(search([1, 2, 3, 4, 5, 6], 6)).toBe(6);
    expect(search([1, 2, 3, 4, 5, 6], 11)).toBe(-1);
});