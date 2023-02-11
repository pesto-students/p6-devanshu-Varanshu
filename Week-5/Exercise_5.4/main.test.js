const mathOperations = require("./main");

test('Math Operation testing', () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
    expect(mathOperations.diff(4, 2)).toEqual(2);
    expect(mathOperations.product(3, 2)).toEqual(6);
})