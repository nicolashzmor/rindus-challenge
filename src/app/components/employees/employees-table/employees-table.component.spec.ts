import {EmployeesTableComponent} from './employees-table.component';
import {render, RenderResult} from "@testing-library/angular";
import {EmployeesDatabase} from "../../../core/store/employees/employees.values";
import {Employee} from "../../../core/models/employee.model";
import {TuiDialogService} from "@taiga-ui/core";
import {MockProvider} from "ng-mocks";
import {Store} from "@ngxs/store";

describe('EmployeesTableComponent', () => {
  let result: RenderResult<EmployeesTableComponent>
  beforeEach(async () => {
    result = await render(EmployeesTableComponent, {
      providers: [
        MockProvider(TuiDialogService, {open: jest.fn()}),
        MockProvider(Store, {})
      ],
      componentProperties: {
        employees: EmployeesDatabase.map(e => Employee.new(e))
      }
    })
  })
  it('should render', () => {
    expect(result.fixture.componentInstance).toBeTruthy()
  })
});
