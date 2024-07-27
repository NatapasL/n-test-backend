import { permute } from "./permute";

describe(`permute`, () => {
  test.each([
    [`a`, [`a`]],
    [`ab`, [`ab`, `ba`]],
    [`abc`, [`abc`, `acb`, `bac`, `bca`, `cab`, `cba`]],
  ])(`Return all permuted string`, (text, expectedResults) => {
    const results = permute(text);

    expect(results.length).toEqual(expectedResults.length);
    for (const expectedResult of expectedResults) {
      expect(results).toContain(expectedResult);
    }
  });

  test.each([
    [`a`, 1],
    [`ab`, 2],
    [`abc`, 6],
    [`abcd`, 24],
    [`abcde`, 120],
    [`abcdef`, 720],
    [`aabb`, 6],
    [`aaabc`, 20],
    [`aaabbc`, 60],
    [`aaabbcd`, 420],
  ])(`'%s' has %d results`, (text, expectedLength) => {
    const results = permute(text);

    expect(results.length).toEqual(expectedLength);
  });

  test(`No duplication in results`, () => {
    const text = `aabb`;

    const results = permute(text);

    const uniqueResults = new Set<string>();
    for (const result of results) {
      uniqueResults.add(result);
    }
    expect(results.length).toEqual(uniqueResults.size);
  });
});
