import {Given, Then} from "cypress-cucumber-preprocessor/steps";

Given(/^the below employees are registered$/, function () {

});

Then(/^I see employee "([^"]*)" on screen$/, function (full_name: string) {
  cy.contains(full_name)
});
