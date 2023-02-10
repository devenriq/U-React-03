describe("Pruebas en demo", () => {
  test("Esta prueba no debe de fallar", () => {
    //Inicialización

    const message1 = "Hola Mundo";

    // Estimulo

    const message2 = message1.trim();

    // Observación
    expect(message1).toBe(message2);
    expect(message2).toBe(message1);
  });
});
