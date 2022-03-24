import {When} from "cypress-cucumber-preprocessor/steps";


When('I remove the {ordinal} user on the list', (position) => {
  cy.get('[data-e2e-id=employees-list__actions-menu]').eq(position - 1).click()
  cy.get('[data-e2e-id=employees-list__actions-menu__remove-employee]').click()
})

When(/Confirm Remove Operation by Input User's Name: "([^"]*)"/, (full_name) => {
  cy.get('[data-e2e-id=employees-list__removal-confirm__name-input').type(full_name)
  cy.get('[data-e2e-id=employees-list__removal-confirm__button]').click()
})

