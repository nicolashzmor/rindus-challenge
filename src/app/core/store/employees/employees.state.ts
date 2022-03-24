import {Action, State, StateContext} from "@ngxs/store";
import {EmployeesModels} from "./employees.models";
import {EmployeesActions} from "./employees.actions";
import {EmployeesDatabase} from "./employees.values";
import {EmployeesService} from "./employees.service";
import {catchError, concatMap, tap} from "rxjs/operators";
import {EmployeesEvents} from "./employees.events";
import {Injectable} from "@angular/core";
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
import UpdateFilterBy = EmployeesActions.UpdateFilterBy;
import InitializeEmployees = EmployeesActions.InitializeEmployees;

@State<EmployeesModels.State>({
  name: 'employees',
  defaults: {
    employees: [],
    filterBy: null
  }
})
@Injectable()
export class EmployeesState {

  constructor(protected employees: EmployeesService) {
  }

  @Action(InitializeEmployees)
  onInitializeEmployees(ctx: StateContext<EmployeesModels.State>) {
    if (!ctx.getState().employees.length) {
      return ctx.dispatch(FetchEmployees)
    }
    return true;
  }

  @Action(FetchEmployees)
  onFetchEmployees(ctx: StateContext<EmployeesModels.State>) {
    return this.employees.fetchEmployees().pipe(
      tap((employees) => ctx.patchState({employees}))
    )
  }

  @Action(ResetEmployeesDatabase)
  onResetEmployeesDatabase(ctx: StateContext<EmployeesModels.State>) {
    return ctx.patchState({employees: EmployeesDatabase})
  }

  @Action(SignUpNewEmployee)
  onSignUpNewEmployee(ctx: StateContext<EmployeesModels.State>, {employee}: SignUpNewEmployee) {
    try {
      const employeeDTO = employee.asCreateDTO()
      return this.employees.signUpEmployee(employeeDTO).pipe(
        tap(employee => ctx.patchState({employees: [...ctx.getState().employees, employee]})),
        concatMap(() => ctx.dispatch(SignUpNewEmployeeSucceed)),
        // concatMap(() => ctx.dispatch(FetchEmployees)),
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
      const employeeIndex = ctx.getState().employees.findIndex((e) => e.id === employee.id)

      //
      return this.employees.updateEmployeeData(employeeDTO).pipe(
        tap(employee => {
          const employees = ctx.getState().employees
          employees.splice(employeeIndex, 1, employee)
          ctx.patchState({employees: employees})
        }),
        concatMap(() => ctx.dispatch(UpdateEmployeeDataSucceeded)),
        // concatMap(() => ctx.dispatch(FetchEmployees)),
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
        tap(employee_id => ctx.patchState({employees: ctx.getState().employees.filter(e => e.id !== employee_id)})),
        concatMap(() => ctx.dispatch(SignOffEmployeeSucceeded)),
        // concatMap(() => ctx.dispatch(FetchEmployees)),
        catchError(() => ctx.dispatch(SignOffEmployeeFailed))
      )
    } else {
      return ctx.dispatch(SignOffEmployeeFailed)
    }

  }

  @Action(UpdateFilterBy)
  onUpdateFilterBy(ctx: StateContext<EmployeesModels.State>, {filterBy}: UpdateFilterBy) {
    ctx.patchState({filterBy})
  }
}
