import {EmployeesNewComponent} from './employees-new.component';
import {render, RenderResult} from "@testing-library/angular";
import {MockProvider, MockProviders} from "ng-mocks";
import {Actions, Store} from "@ngxs/store";
import {EmployeesActions} from "../../core/store/employees/employees.actions";
import {Employee} from "../../core/models/employee.model";
import MockedFn = jest.MockedFn;
import SignUpNewEmployee = EmployeesActions.SignUpNewEmployee;
import {Subject} from "rxjs";
import {TuiNotificationsService} from "@taiga-ui/core";
import {RouterTestingModule} from "@angular/router/testing";

describe('EmployeesNewComponent', () => {
  let result: RenderResult<EmployeesNewComponent>
  let component: EmployeesNewComponent
  let storeDispatcher: MockedFn<any>
  beforeEach(async () => {
    storeDispatcher = jest.fn()
    result = await render(EmployeesNewComponent, {
      imports: [RouterTestingModule],
      providers: [
        MockProvider(Store, {dispatch: storeDispatcher}),
        MockProvider(Actions, { pipe: () => new Subject()}),
        MockProviders(TuiNotificationsService),
      ]
    })
    component = result.fixture.componentInstance
  })
  it('should render', () => {
    expect(result.fixture.componentInstance).toBeTruthy()
  })

  it('should dispatch action to create', () => {
    const employee = Employee.new({
      id: '5aec6c1a-29d3-4baf-bb8b-baa91387fe10',
      name: 'Eve',
      surname: 'Nolan',
      work_position: 'full-stack developer',
      date_of_birth: '1987-09-29T00:00:00.000Z',
    })
    component.signUpCustomer(employee)
    expect(storeDispatcher).toHaveBeenCalledWith(new SignUpNewEmployee(employee))
  })
});
