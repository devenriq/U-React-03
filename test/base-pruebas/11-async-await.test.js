import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Testing 11-async-await", () => {
  test("Should return the URL of the image", async () => {
    const url = await getImagen();

    console.log(url);

    expect(typeof url).toBe("string");
  });
});
