/*
 * Examples of parent commands:
    cy.visit()
    cy.get()
    cy.request()
    cy.exec()
    cy.intercept()
 

/
 * Child Commands
    Child commands are always chained off of a parent command, or another child command.
    The previous subject will automatically be yielded to the callback function.

* Examples of child commands:
    .click()
    .trigger()
    .find()
    .should()
    .as()
 */

/**
 * Examples of dual commands:
  cy.contains()
  cy.screenshot()
  cy.scrollTo()
  cy.wait()
 */

/// <reference types="cypress" /> 
//site erisimi icin
cy.visit('open url')
cy.visit('url', { timeout: 10000 })

cy.url().should('include', path)

//eleman bulmak icin loc referans olarak kullaniliyor
cy.get(loc).click()
cy.get(loc).should('be.visible') //bu locator var mi 
cy.get(loc).should('be.exist')

//negative
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

//https://docs.cypress.io/api/table-of-contents

cy.get('h1').should('have.text','table of Contents')
cy.get('input').should('have.value','blabla')


//parent to child

cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(3).click()

cy.get(loc).next().click()

cy.go('back')

cy.get('tbody tr').nextAll.click({multiple:true}) //table icindeki her bir elemana tiklar

cy.get(loc).prev().click()  //bir önceki 

cy.get(loc).prevAll().click()

//position handling

cy.get(loc).click('top')
cy.get(loc).click('button')
cy.get(loc).click('topLeft')


//hover handling
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mouseup').click()
cy.get(loc).trigger('mousedown').click()

//login
cy.get('username').clear().type('username')



















