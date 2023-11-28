//MÉTODOS DE AÇÕES DA PAGINA PIM

const el = require('./Elements').ELEMENTS

class Pim {
    
    cadastrarFuncionario(){
        cy.get(el.botaoPim).click()
        cy.get(el.botaoAdd).click()
        cy.get(el.campoFirstName).type('José')
        cy.get(el.campoMiddleName).type('Augusto')
        cy.get(el.campoLastName).type('Santos') 
        cy.get(el.botaoCreateLoginDetails).click()

        cy.get(el.campoUserName).contains('Username').parent().next().type('José Augusto').click()
        cy.get(el.campoPassword).contains('Password').parent().next().type('@Augusto250').click()
        cy.get(el.campoConfirmPassword).contains('Confirm').parent().next().type('@Augusto250').click() 
        cy.get(el.botaoSave).children().contains('Save').click({ force: true })
        cy.get(el.nomeFuncCadastrado).should('have.text', 'José Santos')
    }

    localizarFuncionario(){
        cy.get(el.botaoPim).click()
        cy.get(el.campoInformationEmployeeName).contains('Employee Name').parent().next().type('Augusto')
        cy.get(el.botaoSearch).click()
    }

    editarFuncionario(){
        this.localizarFuncionario()
        cy.get(el.linhaRegistroFunc).contains('José').parent().siblings().find(el.iconeEditar).type('{enter}')
        cy.get(el.campoEdicaoNome).clear().type('Francisco')
        cy.get(el.botaoEdicaoSave).first().click()
        cy.get(el.botaoSave).contains('Save').first().click({ force: true })
        cy.reload()
        cy.get(el.nomeFuncCadastrado).should('have.text', 'Francisco Santos')

    }

    excluirFuncionario(){
        this.localizarFuncionario()
        cy.get(el.linhaRegistroFunc).contains('Augusto').parent().siblings().find(el.iconeExcluir).type('{enter}')
        cy.get(el.iconeConfirmaExclusao).click()
        cy.get(el.msgNaoEncontrado).should('have.text','No Records Found')          
    }

}  

export default new Pim()


