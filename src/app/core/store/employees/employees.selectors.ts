import {createSelector} from "@ngxs/store";
import {EmployeesState} from "./employees.state";
import {EmployeesModels} from "./employees.models";
import {Employee} from "../../models/employee.model";

export class EmployeesSelectors {
  public static GetEmployees(): (state: EmployeesModels.State) => Employee[] {
    return createSelector<(state: EmployeesModels.State) => Employee[]>([EmployeesState], ({employees, filterBy}) => {
      const Employees = employees.map(e => Employee.new(e))
      return filterBy ? Employees.filter(Employee.searchByIndexableKeys(filterBy)) : Employees
    })
  }
}
