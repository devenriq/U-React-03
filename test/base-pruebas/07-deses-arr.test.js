import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("It should return a string and a number", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});
