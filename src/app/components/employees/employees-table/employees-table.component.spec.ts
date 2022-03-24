import {EmployeesTableComponent} from './employees-table.component';
import {render, RenderResult} from "@testing-library/angular";
import {EmployeesDatabase} from "../../../core/store/employees/employees.values";
import {Employee} from "../../../core/models/employee.model";

describe('EmployeesTableComponent', () => {
  let result: RenderResult<EmployeesTableComponent>
  beforeEach(async () => {
    result = await render(EmployeesTableComponent, {
      componentProperties: {
        employees: EmployeesDatabase.map(e => Employee.new(e))
      }
    })
  })
  it('should render', () => {
    expect(result.fixture.componentInstance).toBeTruthy()
  })
});
