import elementos from "../Elementos/elementos";
import contas from "../Elementos/contas";
import contaBank from "../Elementos/contaBank";

import ContaBanco from "../fixtures/ContaBanco.json";

var Chance = require("chance");
var chance = new Chance();

describe("Enviar dinheiro com saldo suficiente", () => {
  it("Deve enviar dinheiro com sucesso", () => {
    // Implemente os passos do caso de teste aqui

    cy.visit("http://localhost:3000/signin");

    //login
    cy.get(elementos.UserName).type(contas.username);
    cy.get(elementos.Password).type(contas.password);
    cy.get(elementos.SignIn).click();

  
      //verifica se entrou,uma vez que entrou nao precisa
      //cy.get(elementos.VerfyPag).contains('Next').click()

       // !!Uma vez que criou o banco, 
       // Não precisa mais verificar e nem criar denovo!! Apenas se criar um novo banko ou user
      // cy.get(contaBank.Nome_conta).type(ContaBanco.Conta.Nome_conta)
      // cy.get(contaBank.Roteamento).type(ContaBanco.Conta.Roteamento)
      // cy.get(contaBank.Numero_conta).type(ContaBanco.Conta.Numero_conta)

      // cy.get(contaBank.Salvar_cc_bank).click()
      // cy.get(contaBank.CC_pronta).click()

       // Verificar se esta na conta
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
      /**
       * cy.get(contaBank.Lista_user): Pega todos os elementos que correspondem ao seletor Lista_user.
        .each(($element) => { ... }): Itera sobre cada elemento encontrado na lista

       * $element.text(): Pega o texto do elemento atual.
        .trim(): Remove espaços extras no início e no final, evitando problemas na comparação.
         cy.log(...): Escreve o nome encontrado no log do Cypress para depuração

       * text.includes('Ted ParisianU'): Verifica se o texto do elemento contém "Ted ParisianU".
        Por que includes()?
        Às vezes, o Cypress pode capturar o nome com espaços extras ou caracteres invisíveis, 
        então includes() evita que o teste falhe por pequenas diferenças.

        cy.wrap($element): Como $element é um objeto DOM puro, wrap() o transforma em um elemento Cypress para que possamos interagir com ele.
        .click({ force: true }): Força o clique mesmo se o elemento estiver coberto por outro (como um modal invisível ou uma animação)

       */
    });

    //enviando valor
    cy.get(contaBank.Valor_enviar).eq(0).type("100000");
    cy.get(contaBank.Valor_enviar).eq(1).type("Mandando MIL DOLARES");
    cy.get(contaBank.Botao_enviarV).eq(1).click();

    cy.get('[data-test="alert-bar-success"]').contains("Submitted");
  });
});
