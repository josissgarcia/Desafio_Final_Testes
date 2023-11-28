/// <reference types="cypress" />

import Login from '../support/Pages/Login'
import Pim from '../support/Pages/Pim'


describe('Validando pag Admin', () => {
    beforeEach (( ) =>{ 
        Login.logar('Admin','admin123')
    })
   

    it('Validar cadastro de funcionário', ()=>{
        Pim.cadastrarFuncionario()
    })

    it('Validar edição de registro de funcionário',()=>{
        Pim.editarFuncionario()
    })

    it('Validar exclusão de registro de funcionário',()=>{
       Pim.excluirFuncionario()
    }) 
  
})