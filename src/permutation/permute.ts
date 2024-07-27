export function permute(text: string): string[] {
  const textLength = text.length;

  if (textLength <= 1) return [text];
  if (textLength === 2) return [text, swapCharacter(text, 0, 1)];

  const results = new Set<string>();

  for (let i = 0; i < textLength; i++) {
    const swappedText = swapCharacter(text, 0, i);
    const permutedTexts = permuteWithoutFirstCharacter(swappedText);

    for (const permutedText of permutedTexts) {
      results.add(permutedText);
    }
  }

  return [...results];
}

function permuteWithoutFirstCharacter(text: string): string[] {
  const firstCharacter = text[0];
  const permutedSubStrings = permute(text.substring(1));

  return permutedSubStrings.map((subString) =>
    [firstCharacter, subString].join(``)
  );
}

function swapCharacter(text: string, a: number, b: number): string {
  if (a === b) return text;

  const aChar = `${text[a]}`;
  const bChar = `${text[b]}`;
  const splitText = text.split(``);
  splitText[a] = bChar;
  splitText[b] = aChar;

  return splitText.join(``);
}
