import {When} from "cypress-cucumber-preprocessor/steps";

When('I edit the {ordinal} employee', (position) => {
  cy.get('[data-e2e-id=employees-list__actions-menu]').eq(position).click()
  cy.get('[data-e2e-id=employees-list__actions-menu__edit-employee]').click()
})
