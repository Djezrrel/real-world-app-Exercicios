import elementos from "../Elementos/elementos";
import contas from "../Elementos/contas";

var Chance = require("chance");
var chance = new Chance();

describe("Login com sucesso", () => {
  it("Deve fazer login com um usuário válido", () => {
    // Implemente os passos do caso de teste aqui
    cy.visit("http://localhost:3000/signin");
    cy.get(elementos.CriarCC).click();

    //verifica se foi para pag de login
    cy.get(elementos.JaTemCC).contains("Have an account? Sign In");

    //Cadrasto
    cy.get(elementos.MultiInput).eq(0).type(chance.name());
    cy.get(elementos.MultiInput).eq(1).type(chance.last());
    cy.get(elementos.MultiInput).eq(2).type(contas.username);
    cy.get(elementos.MultiInput).eq(3).type(contas.password);
    cy.get(elementos.MultiInput).eq(4).type(contas.password);

    //logando conta nova
    cy.get(elementos.CadastrarCC).click();
    cy.get(elementos.CriarCC).contains("Sign Up");
  });
});
