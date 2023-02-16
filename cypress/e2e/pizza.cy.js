describe("Kayıt Formu ", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("isim inputunu al ve isim yaz", () => {
    const newIsim = "Mert";
    cy.get("[data-cy=dataisim]").type(`${newIsim}{enter}`);
    cy.get("[data-cy=datasubmit]").should("be.disabled");
  });

  it("isim inputunu doldur ve pizza boyutunu seç", () => {
    const newIsim = "Mert";
    cy.get("[data-cy=dataisim]").type(`${newIsim}{enter}`);
    cy.get("#dropdown").select("Büyük");
    cy.get("[data-cy=datamantar]").check().should("be.checked");
    cy.get("[data-cy=datasubmit]").should("be.disabled");
  });

  it("isim inputunu doldur, pizza boyutunu seç ve 2 tane seçim yap", () => {
    const newIsim = "Mert";
    cy.get("[data-cy=dataisim]").type(`${newIsim}{enter}`);
    cy.get("#dropdown").select("Büyük");
    cy.get("[data-cy=datasucuk]").check().should("be.checked");
    cy.get("[data-cy=datamantar]").check().should("be.checked");
    cy.get("[data-cy=datasubmit]").click().should("be.enabled");
  });
});
