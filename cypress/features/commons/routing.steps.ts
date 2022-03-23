import {Given, Then} from "cypress-cucumber-preprocessor/steps";


Given('I navigate to {route}', (path: string) => {
  cy.visit(path)
})


Then('I am on {route}', (path: string) => {
  cy.url().should('include', path)
})
