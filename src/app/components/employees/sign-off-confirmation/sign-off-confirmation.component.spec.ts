import {SignOffConfirmationComponent} from './sign-off-confirmation.component';
import {render, RenderResult, screen} from "@testing-library/angular";
import {MockProvider} from "ng-mocks";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {Employee} from "../../../core/models/employee.model";
import MockedFn = jest.MockedFn;

describe('SignOffConfirmationComponent', () => {
  const employee = Employee.new({
    id: '5aec6c1a-29d3-4baf-bb8b-baa91387fe10',
    name: 'Eve',
    surname: 'Nolan',
    work_position: 'full-stack developer',
    date_of_birth: '1987-09-29T00:00:00.000Z',
  })
  let result: RenderResult<SignOffConfirmationComponent>
  let completeWith: MockedFn<any>

  beforeEach(async () => {
    completeWith = jest.fn()
    result = await render(SignOffConfirmationComponent, {
      providers: [MockProvider(POLYMORPHEUS_CONTEXT, {data: employee, completeWith})]
    })
  })
  it('should display user\'s name', () => {
    screen.getAllByText(employee.full_name)
  })

  it('should complete dialog when submitting', () => {
    screen.getByText('Sign-off Employee').click()
    expect(completeWith).toHaveBeenCalled()
  })
});
