export function countSmileys(faces: string[]): number {
  return faces.reduce<number>((sum, face): number => {
    if (isSmiley(face)) sum += 1;

    return sum;
  }, 0);
}

function isSmiley(face: string): boolean {
  const faceLength = face.length;
  if (faceLength > 3) return false;
  if (faceLength < 2) return false;

  return /^[;:][-~]?[)D]$/.test(face);
}
