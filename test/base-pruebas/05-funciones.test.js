import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    expect(testUser).toEqual(user);
    console.log(user);
  });

  test("getUsuario debe retornar un objeto", () => {
    const name = "enrique";

    const test = {
      uid: "ABC567",
      username: name,
    };

    const newUser = getUsuarioActivo(name);

    expect(newUser).toEqual(test);
  });
});
