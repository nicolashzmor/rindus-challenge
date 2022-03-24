import {EmployeeFormComponent} from './employee-form.component';
import {render, RenderResult, screen} from "@testing-library/angular";
import {
  TuiFieldErrorPipeModule,
  TuiInputComponent,
  TuiInputDateComponent,
  TuiIslandComponent,
  TuiSelectComponent
} from "@taiga-ui/kit";
import {MockComponent} from "ng-mocks";
import {TuiErrorComponent} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";
import MockedFn = jest.MockedFn;

describe('EmployeeFormComponent', () => {
  let result: RenderResult<EmployeeFormComponent>
  let submitEmployeeEmitter: MockedFn<any>
  beforeEach(async () => {
    submitEmployeeEmitter = jest.fn()
    result = await render(EmployeeFormComponent, {
      declarations: [
        MockComponent(TuiIslandComponent),
        MockComponent(TuiInputComponent),
        MockComponent(TuiInputDateComponent),
        MockComponent(TuiErrorComponent),
        MockComponent(TuiSelectComponent)
      ],
      imports: [TuiFieldErrorPipeModule, ReactiveFormsModule],
      componentProperties: {submitEmployee: {emit: submitEmployeeEmitter} as any}
    })
  })
  it('should render', () => {
    expect(result.fixture.componentInstance).toBeTruthy()
  })

  it('should emit an employee when submitted', () => {
    // Too much implementation detail and dependencies here, but test validation behavior is important
    const form = result.fixture.componentInstance.EmployeeForm

    form.patchValue({
      name: 'Jeff',
      surname: 'Forin',
      work_position: 'full-stack developer',
      date_of_birth: new Date().toISOString()
    })
    form.updateValueAndValidity()

    screen.getByText('Submit').click()
    expect(submitEmployeeEmitter).toHaveBeenCalled()
  })
});
