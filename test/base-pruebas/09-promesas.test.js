import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Tests in 09-promesas", () => {
  test("getHeroByIdAsync should return an hero", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });

  test("getHeroByIdAsync should return an error if hero doesn't exist", (done) => {
    const id = 1000;
    getHeroeByIdAsync(id).catch((error) => {
      console.log(error);

      done();
    });
  });
});
