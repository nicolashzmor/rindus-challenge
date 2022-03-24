import {EmployeesTableComponent} from './employees-table.component';
import {render, RenderResult} from "@testing-library/angular";
import {EmployeesDatabase} from "../../../core/store/employees/employees.values";
import {Employee} from "../../../core/models/employee.model";
import {TuiDialogService, TuiNotificationsService} from "@taiga-ui/core";
import {MockProvider} from "ng-mocks";
import {Actions, Store} from "@ngxs/store";
import {Subject} from "rxjs";

describe('EmployeesTableComponent', () => {
  let result: RenderResult<EmployeesTableComponent>
  beforeEach(async () => {
    result = await render(EmployeesTableComponent, {
      providers: [
        MockProvider(TuiDialogService, {open: jest.fn()}),
        MockProvider(Store, {}),
        MockProvider(Actions, {pipe: () => new Subject()}),
        MockProvider(TuiNotificationsService)
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
