import elementos from "../Elementos/elementos";
import contas from "../Elementos/contas";

var Chance = require("chance");
var chance = new Chance();

describe("Tentar fazer login com credenciais inválidas", () => {
  it("Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas,senha", () => {
    // Implemente os passos do caso de teste aqui
    cy.visit("http://localhost:3000/signin");

    cy.get(elementos.UserName).type(contas.username);
    cy.get(elementos.Password).type("erro");

    cy.get(elementos.SignIn).click();
    cy.get(elementos.MsgErroLog).contains("Username or password is invalid");
  });

  it("Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas,login", () => {
    // Implemente os passos do caso de teste aqui
    cy.visit("http://localhost:3000/signin");

    cy.get(elementos.UserName).type("erro");
    cy.get(elementos.Password).type(contas.password);

    cy.get(elementos.SignIn).click();
    cy.get(elementos.MsgErroLog).contains("Username or password is invalid");
  });
});
