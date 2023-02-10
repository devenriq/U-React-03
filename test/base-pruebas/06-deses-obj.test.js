import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Tests on 06-deses-obj file", () => {
  test("usContext should return an object", () => {
    const keyName = "eagle";
    const age = 25;

    const objTested = {
      nombreClave: keyName,
      anios: age,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const funcTested = usContext({ clave: "eagle", edad: 25 });
    console.log(funcTested);
    expect(objTested).toEqual(funcTested);
  });
});
