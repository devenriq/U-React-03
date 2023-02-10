import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Testing 08-imp-exp", () => {
  test("It should return a hero per ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });

    console.log(hero);
  });

  test("It should return a hero per ID", () => {
    const id = 3;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 3, name: "Superman", owner: "DC" });

    console.log(hero);
  });

  test("It should return undefined if the hero doesn't exist", () => {
    const id = 102;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();

    console.log(hero);
  });

  test("It should return an object with the heroes of DC", () => {
    const owner = "DC";

    const listOfHeroes = getHeroesByOwner(owner);
    expect(listOfHeroes).toHaveLength(3);

    console.log(listOfHeroes);
  });

  test("It should return an object with the heroes of Marvel", () => {
    const owner = "Marvel";

    const listOfHeroes = getHeroesByOwner(owner);
    expect(listOfHeroes).toHaveLength(2);

    console.log(listOfHeroes);
  });
});
