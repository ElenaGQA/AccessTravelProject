/// <reference types = "Cypress"/>

describe('access travel website test suite', () => {


  Cypress.on('uncaught:exception', (err, runnable)  =>{
    // returning false here prevents Cypress from failing the test
    return false
  })


  it('navigate to main page', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
  })
})