import {Component} from '@angular/core';
import {Actions, ofAction, Store} from "@ngxs/store";
import {Employee} from "../../core/models/employee.model";
import {EmployeesActions} from "../../core/store/employees/employees.actions";
import {EmployeesEvents} from "../../core/store/employees/employees.events";
import {take} from "rxjs";
import {TuiNotification, TuiNotificationsService} from "@taiga-ui/core";
import {Router} from "@angular/router";
import SignUpNewEmployeeSucceeded = EmployeesEvents.SignUpNewEmployeeSucceeded;
import SignUpNewEmployeeFailed = EmployeesEvents.SignUpNewEmployeeFailed;

@Component({
  selector: 'app-employees-new',
  templateUrl: './employees-new.component.html',
  styleUrls: ['./employees-new.component.scss']
})
export class EmployeesNewComponent {

  constructor(
    protected store: Store,
    protected router: Router,
    protected actions$: Actions,
    protected notifications: TuiNotificationsService) {
  }


  signUpCustomer(employee: Employee) {
    this.actions$.pipe(
      ofAction(SignUpNewEmployeeSucceeded, SignUpNewEmployeeFailed),
      take(1)
    ).subscribe((action) => {
      if (action === SignUpNewEmployeeSucceeded) {
        this.notifications.show('Saved Employee', {
          label: 'Succeded!',
          status: TuiNotification.Success,
          autoClose: 2000
        }).subscribe()
        this.goBackToList();
      }
      if (action === SignUpNewEmployeeFailed) {
        this.notifications.show('Something went wrong', {
          label: 'Failed when saving',
          status: TuiNotification.Error,
          autoClose: 2000
        }).subscribe();
      }
    })
    this.store.dispatch(new EmployeesActions.SignUpNewEmployee(employee))
  }

  protected goBackToList() {
    this.router.navigate(['/']).then()
  }

}
