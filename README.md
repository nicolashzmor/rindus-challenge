# IBillboard Users

The project is made with Angular with Testing Suites in both Cypress + Cucumber and Jest

## Serve

Serve: npm run serve

## Tests

Jest Testing: npm run test

E2E Testing: npm run e2e

## Comments

* The project was made with no real connection to an API. 
* There are comments on how connections would have been made.
* The requirement defined an API to fetch the work_positions. 
  * In order to make a more robust Model of WorkPosition, the data was used statically instead of fetching it dynamically.
  * Although may be possible to do it dynamically, the reason behind this decision is to make explicit choices when a new WorkPosition is added to the list, as there are dependencies that weren't defined on the provided services (e.g. a formatted label). This decision promotes a controlled complexity increase and provides a more scalable solution. 
