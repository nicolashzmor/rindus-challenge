import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Injector, Input, Output} from '@angular/core';
import {Employee} from "../../../core/models/employee.model";
import {TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {SignOffConfirmationComponent} from "../sign-off-confirmation/sign-off-confirmation.component";
import {Store} from "@ngxs/store";
import {EmployeesActions} from "../../../core/store/employees/employees.actions";
import SignOffEmployee = EmployeesActions.SignOffEmployee;

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
    @Inject(Store) private store: Store
  ) {
  }


  requestSignOfEmployee(employee: Employee) {
    this.dialogService.open<string>(
      new PolymorpheusComponent(SignOffConfirmationComponent, this.injector),
      {
        data: employee
      }
    ).subscribe({
      next: (verification) => this.store.dispatch(new SignOffEmployee(employee, verification))
    })
  }

}
