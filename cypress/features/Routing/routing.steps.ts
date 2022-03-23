import {Given} from "cypress-cucumber-preprocessor/steps";

Given('User is in home page', () => {
  cy.visit('/')
})
