import {Given, When} from "cypress-cucumber-preprocessor/steps";
import values from "./commons/Values";

Given("I am adding a new employee", () => {
  cy.get('[data-e2e-id=employees-list__new-employee-button]').click()
  cy.url().should('include', values.routes.AddEmployeeProfile({}))
})
When(/^I input the employee's (.*): (.*)$/, function (field, value) {
  cy.get(`[data-e2e-id=new-employee__form-field__${field}]`).clear().type(value)
});
When(/^I select the employee's (.*): (.*)$/, function (field, value) {
  cy.get(`[data-e2e-id=new-employee__form-field__${field}]`).click()
  cy.contains(value).closest('button').click()
});
When(/^Submit employee$/, function () {
  cy.get('[data-e2e-id=new-employee__submit-button]').click()
});
When(/^Cancel employee sign-up$/, function () {
  cy.get('[data-e2e-id=new-employee__cancel-button]').click()
});

