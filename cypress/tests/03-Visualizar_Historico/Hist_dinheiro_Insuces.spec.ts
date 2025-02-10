
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

        //criando conta
       // cy.get(elementos.CriarCC).click();
    
        //verifica se foi para pag de login
        //cy.get(elementos.JaTemCC).contains("Have an account? Sign In");
    
        //Cadrasto, apenas 1x
        //cy.get(elementos.MultiInput).eq(0).type(chance.name());
        //cy.get(elementos.MultiInput).eq(1).type(chance.last());
        //cy.get(elementos.MultiInput).eq(2).type('New');
        //cy.get(elementos.MultiInput).eq(3).type('New2@');
        //cy.get(elementos.MultiInput).eq(4).type('New2@');
    
        //conta nova,apenas 1x
        //cy.get(elementos.CadastrarCC).click();
        //cy.get(elementos.CriarCC).contains("Sign Up");

        //entrando na conta nova
        cy.get(elementos.UserName).type('New');
        cy.get(elementos.Password).type('New2@');
        cy.get(elementos.SignIn).click();

         //checkout 1x
        //cy.get(elementos.VerfyPag).contains('Next').click()
        //cy.get(contaBank.Salvar_cc_bank).contains("Save");
    
         //criando conta nova
        //cy.get(contaBank.Nome_conta).type(ContaBanco.Conta.Nome_conta)
        //cy.get(contaBank.Roteamento).type(ContaBanco.Conta.Roteamento)
        //cy.get(contaBank.Numero_conta).type(ContaBanco.Conta.Numero_conta)

        //salvando banco
        //cy.get(contaBank.Salvar_cc_bank).click()
        //cy.get(contaBank.CC_pronta).click()
  
        //verificar se esta dentro do banco
        cy.get(contaBank.Verif_user);

        //ver transações
        cy.get(contaBank.MutiTabBank).eq(2).click()

        //se enviou
        cy.get(contaBank.Sem_EnviarDim)
        cy.log(contaBank.Sem_EnviarDim)
        cy.get(contaBank.Sem_EnviarDim).contains("No")
    });
  });