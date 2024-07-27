import { countSmileys } from "./count-smileys";
import { mockFaces } from "./mock/mock-faces";

describe(`countSmileys`, () => {
  const validEyes = [`;`, `:`];
  const validNoses = [`~`, `-`];
  const validMouths = [`)`, `D`];

  test(`Return smileys faces count`, () => {
    const faces = mockFaces(validEyes, validNoses, validMouths);

    const count = countSmileys(faces);

    expect(count).toEqual(faces.length);
  });

  test(`Not count non-smileys faces`, () => {
    const smileyFaces = mockFaces(validEyes, validNoses, validMouths);
    const notSmileyFaces = [`;}`, `:-(`, `:-/`, `;|`];

    const count = countSmileys([...smileyFaces, ...notSmileyFaces]);

    expect(count).toEqual(smileyFaces.length);
  });

  test(`Not count face shorter than 2`, () => {
    const faces = [`)`];

    const count = countSmileys(faces);

    expect(count).toEqual(0);
  });

  test(`Not count face longer than 3`, () => {
    const faces = [`:-))`];

    const count = countSmileys(faces);

    expect(count).toEqual(0);
  });

  test(`Not count face with no eye`, () => {
    const faces = mockFaces([``], validNoses, validMouths);

    const count = countSmileys(faces);

    expect(count).toEqual(0);
  });

  test(`Count face with no nose if eye and mouth is still correct`, () => {
    const faces = mockFaces(validEyes, [``], validMouths);

    const count = countSmileys(faces);

    expect(count).toEqual(faces.length);
  });

  test(`Not count face with no mouth`, () => {
    const faces = mockFaces(validEyes, validNoses, [``]);

    const count = countSmileys(faces);

    expect(count).toEqual(0);
  });

  test(`Return 0 when array is empty`, () => {
    const faces: string[] = [];

    const count = countSmileys(faces);

    expect(count).toEqual(0);
  });
});
