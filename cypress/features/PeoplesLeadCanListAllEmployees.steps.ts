import {Then, When} from "cypress-cucumber-preprocessor/steps";
import {TableDefinition} from "cypress-cucumber-preprocessor";

When(/^I search "([^"]*)"$/, function (search: string) {
  cy.get('[data-e2e-id=employees-search__input]').type(search)
});

Then(/^I see the belows employees in the list$/, function (dataTable: TableDefinition) {
  dataTable.hashes().forEach(({name, surname, work_position}) => {
    const container = cy.contains(`${name} ${surname}`).closest('[data-e2e-id=employees-list__employee]')
    if (work_position) {
      container.contains(work_position)
    }
  })
});


