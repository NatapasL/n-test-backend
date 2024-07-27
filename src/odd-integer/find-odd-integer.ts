export function findOddInteger(inputs: number[]): number {
  const countTable = inputs.reduce<Map<number, number>>((acc, integer) => {
    const count = acc.get(integer) ?? 0;
    acc.set(integer, count + 1);

    return acc;
  }, new Map<number, number>());

  for (const [integer, count] of countTable.entries()) {
    if (count % 2 == 1) return integer;
  }

  throw new Error(`Should be one odd occurrence integer`);
}
