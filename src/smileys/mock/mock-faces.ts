export function mockFaces(eyes: string[], noses: string[], mouths: string[]): string[] {
  const faces: string[] = []
  for (const eye of eyes) {
    for (const nose of noses) {
      for (const mouth of mouths) {
        faces.push(`${eye}${nose}${mouth}`)
      }
    }
  }

  return faces
}