import {Action, State, StateContext} from "@ngxs/store";
import {EmployeesModels} from "./employees.models";
import {EmployeesActions} from "./employees.actions";
import {EmployeesDatabase} from "./employees.values";
import {EmployeesService} from "./employees.service";
import {catchError, concatMap, tap} from "rxjs/operators";
import {EmployeesEvents} from "./employees.events";
import ResetEmployeesDatabase = EmployeesActions.ResetEmployeesDatabase;
import SignUpNewEmployee = EmployeesActions.SignUpNewEmployee;
import UpdateEmployeeData = EmployeesActions.UpdateEmployeeData;
import SignOffEmployee = EmployeesActions.SignOffEmployee;
import SignUpNewEmployeeSucceed = EmployeesEvents.SignUpNewEmployeeSucceeded;
import SignUpNewEmployeeFailed = EmployeesEvents.SignUpNewEmployeeFailed;
import UpdateEmployeeDataSucceeded = EmployeesEvents.UpdateEmployeeDataSucceeded;
import UpdateEmployeeDataFailed = EmployeesEvents.UpdateEmployeeDataFailed;
import SignOffEmployeeSucceeded = EmployeesEvents.SignOffEmployeeSucceeded;
import SignOffEmployeeFailed = EmployeesEvents.SignOffEmployeeFailed;
import FetchEmployees = EmployeesActions.FetchEmployees;

@State<EmployeesModels.State>({
  name: 'employees',
  defaults: []
})
export class EmployeesState {

  constructor(protected employees: EmployeesService) {
  }

  @Action(ResetEmployeesDatabase)
  onResetEmployeesDatabase(ctx: StateContext<EmployeesModels.State>) {
    return ctx.patchState(EmployeesDatabase)
  }

  @Action(SignUpNewEmployee)
  onSignUpNewEmployee(ctx: StateContext<EmployeesModels.State>, {employee}: SignUpNewEmployee) {
    try {
      const employeeDTO = employee.asCreateDTO()
      return this.employees.signUpEmployee(employeeDTO).pipe(
        tap(employee => ctx.patchState([...ctx.getState(), employee])),
        concatMap(() => ctx.dispatch(SignUpNewEmployeeSucceed)),
        concatMap(() => ctx.dispatch(FetchEmployees)),
        catchError(() => ctx.dispatch(SignUpNewEmployeeFailed))
      )
    } catch (e) {
      return ctx.dispatch(SignUpNewEmployeeFailed)
    }
  }

  @Action(UpdateEmployeeData)
  onUpdateEmployeeData(ctx: StateContext<EmployeesModels.State>, {employee}: UpdateEmployeeData) {
    try {
      const employeeDTO = employee.asUpdateDTO()
      return this.employees.updateEmployeeData(employeeDTO).pipe(
        tap(employee => ctx.patchState([...ctx.getState().filter(e => e.id === employee.id), employee])),
        concatMap(() => ctx.dispatch(UpdateEmployeeDataSucceeded)),
        concatMap(() => ctx.dispatch(FetchEmployees)),
        catchError(() => ctx.dispatch(UpdateEmployeeDataFailed))
      )
    } catch (e) {
      return ctx.dispatch(UpdateEmployeeDataFailed)
    }
  }

  @Action(SignOffEmployee)
  onSignOffEmployee(ctx: StateContext<EmployeesModels.State>, {employee, verification}: SignOffEmployee) {
    const verified = employee.signOffVerification(verification)
    if (verified) {
      return this.employees.signOffEmployee(employee.id.toString()).pipe(
        tap(employee_id => ctx.patchState([...ctx.getState().filter(e => e.id === employee_id)])),
        concatMap(() => ctx.dispatch(SignOffEmployeeSucceeded)),
        concatMap(() => ctx.dispatch(FetchEmployees)),
        catchError(() => ctx.dispatch(SignOffEmployeeFailed))
      )
    } else {
      return ctx.dispatch(SignOffEmployeeFailed)
    }

  }
}