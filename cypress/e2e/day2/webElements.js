/// <reference types="cypress" />

describe('Web Elements',()=>{
it('First Test',()=> {

//tag name
cy.get('input')

//by ID

cy.get('#twotabsearchtextbox')

//by classname

cy.get('.nav-input.nav-progressive-attribute')

//by attribute
cy.get('[placeholder]')

//by attribute name and value
cy.get('[placeholder=Email]')

//by class value
cy.get('[class="nav-input nav-progressive-attribute"]')

//by tagname and attribute with value
cy.get('input [placeholder=Email]')
cy.get('input [type="hidden"]')

//two difference attirubute or more
cy.get('[placeholder=Email][type="hidden"]#twotabsearchtextbox')

//
cy.contains('crid').click()



})






})