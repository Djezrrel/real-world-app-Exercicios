
import elementos from "../Elementos/elementos";
import contas from "../Elementos/contas";
import contaBank from "../Elementos/contaBank";

import ContaBanco from "../fixtures/ContaBanco.json";

var Chance = require("chance");
var chance = new Chance();

describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
      // Implemente os passos do caso de teste aqui

      cy.visit("http://localhost:3000/signin");

      //login
      cy.get(elementos.UserName).type(contas.username);
      cy.get(elementos.Password).type(contas.password);
      cy.get(elementos.SignIn).click();
  
      //verificar se esta dentro do banco
      cy.get(contaBank.Verif_user);

      //ver transações
      cy.get(contaBank.MutiTabBank).eq(2).click()

      //se enviou
      cy.get(contaBank.Verif_dinheiro)
      cy.log(contaBank.Verif_dinheiro)
    });
  });