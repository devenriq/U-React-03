import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Tests in 09-promesas", () => {
  test("getHeroByIdAsync should return an hero", () => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(true).toBe(false);
    });
  });
});
