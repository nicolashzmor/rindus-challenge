import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../core/models/employee.model";
import {map, mergeMap, Observable, take, tap} from "rxjs";
import {Actions, ofAction, Store} from "@ngxs/store";
import {EmployeesSelectors} from "../../core/store/employees/employees.selectors";
import {EmployeesActions} from "../../core/store/employees/employees.actions";
import {EmployeesEvents} from "../../core/store/employees/employees.events";
import {TuiNotification, TuiNotificationsService} from "@taiga-ui/core";
import UpdateEmployeeData = EmployeesActions.UpdateEmployeeData;
import UpdateEmployeeDataSucceeded = EmployeesEvents.UpdateEmployeeDataSucceeded;
import UpdateEmployeeDataFailed = EmployeesEvents.UpdateEmployeeDataFailed;

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.scss']
})
export class EmployeesEditComponent {
  public employee$: Observable<Employee> = this.route.paramMap.pipe(
    map((params) => params.get('employee_id')),
    mergeMap((employee_id: string | null) => this.store.select(EmployeesSelectors.GetEmployeeById(employee_id))),
    tap((employee => !employee && this.goBackToList())),
    map(employee => employee as Employee)
  )
  protected successOrFailed$ = this.actions$.pipe(ofAction(UpdateEmployeeDataSucceeded, UpdateEmployeeDataFailed))

  constructor(
    protected route: ActivatedRoute,
    protected store: Store,
    protected router: Router,
    protected actions$: Actions,
    protected notifications: TuiNotificationsService
  ) {
  }

  updateEmployee(employee: Employee) {
    this.successOrFailed$.pipe(take(1)).subscribe((action) => {
      if (action === UpdateEmployeeDataSucceeded) {
        this.notifications.show('Saved Employee', {
          label: 'Succeded!',
          status: TuiNotification.Success,
          autoClose: 2000
        }).subscribe()
        this.goBackToList();
      }
      if (action === UpdateEmployeeDataFailed) {
        this.notifications.show('Something went wrong', {
          label: 'Failed when saving',
          status: TuiNotification.Error,
          autoClose: 2000
        }).subscribe();
      }
      return false;
    })
    this.store.dispatch(new UpdateEmployeeData(employee))
  }

  protected goBackToList() {
    this.router.navigate(['/']).then()
  }
}
