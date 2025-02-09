import elementos from '../Elementos/elementos';
import contas from '../Elementos/contas';

var Chance = require('chance');
var chance = new Chance();


describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      // Implemente os passos do caso de teste aqui
      cy.visit('http://localhost:3000/signin')


      cy.get(elementos.UserName).type(contas.username)
      cy.get(elementos.Password).type(contas.password)
      cy.get(elementos.SignIn).click()
  
      //verifica se entrou
      cy.get(elementos.VerfyPag).contains('Next').click()

    });
  });