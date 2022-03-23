import {defineParameterType} from "cypress-cucumber-preprocessor/steps";
import values, {routes} from "./Values";

defineParameterType({
  name: "route",
  regexp: /Homepage|EmployeesList|AddEmployeeProfile|EditEmployeesProfile/,
  transformer: (routeName: routes) => {
    return values.routes[routeName]({})
  }
})

defineParameterType({
  name: 'ordinal',
  regexp: /(\d+)(?:st|nd|rd|th)/,
  transformer: (s) => parseInt(s, 10),
});
