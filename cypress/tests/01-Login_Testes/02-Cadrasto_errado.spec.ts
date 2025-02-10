import elementos from "../Elementos/elementos";
import contas from "../Elementos/contas";

var Chance = require("chance");
var chance = new Chance();

describe("Tentar registrar um novo usuário com informações incompletas", () => {
  it("Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias", () => {
    // Implemente os passos do caso de teste aqui

    cy.visit("http://localhost:3000/signin");
    cy.get(elementos.CriarCC).click();

    //verifica se foi para pag de login
    cy.get(elementos.JaTemCC).contains("Have an account? Sign In");

    //Cadrasto
    cy.get(elementos.MultiInput).eq(0).type(chance.name());
    cy.get(elementos.MultiInput).eq(1).click();
    cy.get(elementos.MultiInput).eq(2).type(chance.last());
    cy.get(elementos.MultiInput).eq(3).type(contas.password);
    cy.get(elementos.MultiInput).eq(4).type(contas.password);
    cy.get(elementos.erroCadrasto).contains("Last Name is required");
  });

  it("Deve exibir mensagens de erro ao tentar registrar um novo usuário com senhas diferentes", () => {
    // Implemente os passos do caso de teste aqui

    cy.visit("http://localhost:3000/signin");
    cy.get(elementos.CriarCC).click();

    //verifica se foi para pag de login
    cy.get(elementos.JaTemCC).contains("Have an account? Sign In");

    //Cadrasto
    cy.get(elementos.MultiInput).eq(0).type(chance.name());
    cy.get(elementos.MultiInput)
      .eq(1)
      .type(chance.string({ length: 5 }));
    cy.get(elementos.MultiInput).eq(2).type(chance.last());
    cy.get(elementos.MultiInput).eq(3).type("ASDASD");
    cy.get(elementos.MultiInput).eq(4).type("asow2");
    cy.get(elementos.confirmaSenhaErr);
  });
});
