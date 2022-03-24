import {EmployeesEditComponent} from './employees-edit.component';
import {render, RenderResult} from "@testing-library/angular";
import {RouterTestingModule} from "@angular/router/testing";
import {MockProvider, MockProviders} from "ng-mocks";
import {Actions, Store} from "@ngxs/store";
import {TuiNotificationsService} from "@taiga-ui/core";
import {Employee} from "../../core/models/employee.model";
import MockedFn = jest.MockedFn;
import {Subject} from "rxjs";

describe('EmployeesEditComponent', () => {
  let result: RenderResult<EmployeesEditComponent>
  let storeDispatcher: MockedFn<any>
  beforeEach(async () => {
    storeDispatcher = jest.fn()
    result = await render(EmployeesEditComponent, {
      imports: [RouterTestingModule],
      providers: [
        MockProvider(Store, {dispatch: storeDispatcher}),
        MockProvider(Actions, { pipe: () => new Subject()}),
        MockProviders(TuiNotificationsService)
      ]
    })
  })
  it('should render', () => {
    expect(result.fixture.componentInstance).toBeTruthy()
  })
  it('should dispatch store action to update', () => {
    result.fixture.componentInstance.updateEmployee(Employee.new({
      id: '5aec6c1a-29d3-4baf-bb8b-baa91387fe10',
      name: 'Eve',
      surname: 'Nolan',
      work_position: 'full-stack developer',
      date_of_birth: '1987-09-29T00:00:00.000Z',
    }))
    expect(storeDispatcher).toHaveBeenCalled()
  })
});
