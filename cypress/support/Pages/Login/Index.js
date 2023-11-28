//MÉTODOS DE AÇÕES DA PAGINA DE LOGIN

const el = require('./Elements').ELEMENTS

class Login {    
    
    validarUrl(){
        cy.visit(el.url)
        cy.get(el.logo).should('be.visible')
    }

    logar(usuario,senha){
        cy.visit(el.url)        
        cy.get(el.campoUsername).type(usuario).type('{enter}'),
        cy.get(el.campoPassword).type(senha)
        cy.get(el.botaoLogin).click()
        cy.get(el.logoAdmin).should('be.visible')        
    }
 
}
export default new Login()