import { findOddInteger } from "./find-odd-integer";

describe(`findOddInteger`, () => {
  test.each([
    [[1], 1],
    [[1, 2, 1], 2],
    [[1, 1, 2, 2, 3], 3],
    [[2, 1, 2, 1, 2, 3, 3, 3, 3], 2],
  ])(`Return odd occurrence integer`, (integers, expectedResult) => {
    const result = findOddInteger(integers);

    expect(result).toEqual(expectedResult);
  });

  test(`Throw error when has no odd occurrence integer`, () => {
    const integers = [1, 1];

    expect(() => {
      findOddInteger(integers);
    }).toThrow(Error);
  });
});
