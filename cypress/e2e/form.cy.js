describe("Kayıt Formu ", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("isim inputunu al ve isim yaz", () => {
    const newIsim = "Mert";
    cy.get("[data-cy=dataisim]").type(`${newIsim}{enter}`);
  });
});
