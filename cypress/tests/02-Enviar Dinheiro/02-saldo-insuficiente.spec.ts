import elementos from "../Elementos/elementos";
import contas from "../Elementos/contas";
import contaBank from "../Elementos/contaBank";

import ContaBanco from "../fixtures/ContaBanco.json";

var Chance = require("chance");
var chance = new Chance();

describe("Enviar dinheiro com saldo insuficiente", () => {
  it("Deve enviar dinheiro com sucesso", () => {
    // Implemente os passos do caso de teste aqui

    cy.visit("http://localhost:3000/signin");

    //login
    cy.get(elementos.UserName).type(contas.username);
    cy.get(elementos.Password).type(contas.password);
    cy.get(elementos.SignIn).click();

     //checkout 1x
    //  cy.get(elementos.VerfyPag).contains('Next').click()
    //  cy.get(contaBank.Salvar_cc_bank).contains("Save");

     //cadrasta banco
    // cy.get(contaBank.Nome_conta).type(ContaBanco.Conta.Nome_conta)
    // cy.get(contaBank.Roteamento).type(ContaBanco.Conta.Roteamento)
    // cy.get(contaBank.Numero_conta).type(ContaBanco.Conta.Numero_conta)

    // cy.get(contaBank.Salvar_cc_bank).click()
    // cy.get(contaBank.CC_pronta).click()

    //verificar se esta dentro do banco
    cy.get(contaBank.Verif_user);
    
    //ir para amigos
    cy.get(contaBank.MutiTabBank).eq(1).click();

    //criar transação
    cy.get(contaBank.Create_trans).click();

    //escolhendo amigo
    cy.get(contaBank.Lista_user).each(($element) => {
      const text = $element.text().trim();
      cy.log(`Encontrado: ${text}`);

      if (text.includes("Ted ParisianU")) {
        cy.wrap($element).click({ force: true }); // Força o clique
      }
    });

    //enviando valor
    cy.get(contaBank.Dinheiro).should("contain", "$0.00");
    cy.get(contaBank.Valor_enviar).eq(0).type('100000')
    cy.get(contaBank.Valor_enviar).eq(1).type('Mandando MIL DOLARES')
    cy.get(contaBank.Botao_enviarV).eq(1).click()

    cy.get('[data-test="alert-bar-success"]').contains("Falta dinheiro,isso é bug");
  });
});
