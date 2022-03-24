import {EmployeesListComponent} from './employees-list.component';
import {render} from "@testing-library/angular";
import {MockProvider} from "ng-mocks";
import {Store} from "@ngxs/store";

describe('EmployeesListComponent', () => {
  it('should render', async () => {
    await render(EmployeesListComponent, {
      providers: [MockProvider(Store)]
    })
  })
});
