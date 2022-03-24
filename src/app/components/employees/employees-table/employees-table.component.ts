import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from "../../../core/models/employee.model";

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesTableComponent implements OnInit {
  @Input() employees: Employee[] = []
  @Output() signOffEmployee: EventEmitter<Employee> = new EventEmitter<Employee>()

  columns = ['full_name', 'work_position', 'date_of_birth', 'actions']

  constructor() {
  }

  ngOnInit(): void {
  }

  requestSignOfEmployee(employee: Employee) {

    this.signOffEmployee.emit(employee)
  }

}
