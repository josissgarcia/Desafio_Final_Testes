/// <reference types="cypress" />

import Login from '../support/Pages/Login'


describe('Acessar Site', () => {
  
  it('Validar acesso a Url', ()=>{
    Login.validarUrl()
  }) 

  it('Realizar login com sucesso', () => {
    Login.logar('Admin','admin123')
  })  

})


