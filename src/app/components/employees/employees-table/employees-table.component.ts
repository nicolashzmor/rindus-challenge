import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Injector, Input, Output} from '@angular/core';
import {Employee} from "../../../core/models/employee.model";
import {TuiDialogService, TuiNotification, TuiNotificationsService} from "@taiga-ui/core";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {SignOffConfirmationComponent} from "../sign-off-confirmation/sign-off-confirmation.component";
import {Actions, ofAction, Store} from "@ngxs/store";
import {EmployeesActions} from "../../../core/store/employees/employees.actions";
import {EmployeesEvents} from "../../../core/store/employees/employees.events";
import {take} from "rxjs";
import SignOffEmployee = EmployeesActions.SignOffEmployee;
import SignOffEmployeeSucceeded = EmployeesEvents.SignOffEmployeeSucceeded;
import SignOffEmployeeFailed = EmployeesEvents.SignOffEmployeeFailed;

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesTableComponent {
  @Input() employees: Employee[] = []
  @Output() signOffEmployee: EventEmitter<{ employee: Employee, verification: string }> = new EventEmitter()

  columns = ['full_name', 'work_position', 'date_of_birth', 'actions']

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    @Inject(Store) private store: Store,
    @Inject(Actions) private actions: Actions,
    @Inject(TuiNotificationsService) protected notifications: TuiNotificationsService
  ) {
  }


  requestSignOfEmployee(employee: Employee) {
    this.dialogService.open<string>(
      new PolymorpheusComponent(SignOffConfirmationComponent, this.injector),
      {
        data: employee
      }
    ).subscribe({
      next: (verification) => this.signOff(employee, verification)
    })
  }

  public signOff(employee: Employee, verification: string) {
    this.actions.pipe(
      ofAction(SignOffEmployeeSucceeded, SignOffEmployeeFailed),
      take(1)
    ).subscribe((action) => {

      if (action === SignOffEmployeeSucceeded) {
        this.notifications.show('Signed off Employee successfully', {
          label: 'Success',
          status: TuiNotification.Info,
          autoClose: 2000
        }).subscribe()
      }
      if (action === SignOffEmployeeFailed) {
        this.notifications.show('Verification Failed. Employee couldn\'t be signed off', {
          label: 'Fail',
          status: TuiNotification.Error,
          autoClose: 2000
        }).subscribe()
      }
    })
    this.store.dispatch(new SignOffEmployee(employee, verification))
  }

}
