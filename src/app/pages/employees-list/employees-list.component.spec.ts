import {EmployeesListComponent} from './employees-list.component';
import {render} from "@testing-library/angular";

describe('EmployeesListComponent', () => {
  it('should render the title', async () => {
    await render(EmployeesListComponent)
  })
});
