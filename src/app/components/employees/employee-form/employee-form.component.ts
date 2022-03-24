import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkPosition} from "../../../core/models/work-position.model";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../../../core/models/employee.model";

const RequiredWithError = (message: string) => (control: AbstractControl) => Validators.required(control) ? {required: message} : null

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent implements OnInit {
  @Output() submitEmployee: EventEmitter<Employee> = new EventEmitter<Employee>()
  @Input() submitLabel: string = 'Submit'

  public WorkPositionOptions = Object.entries(WorkPosition.Labels)

  public EmployeeForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [RequiredWithError('Name is required')]),
    surname: new FormControl(null, [RequiredWithError('Surname is required')]),
    work_position: new FormControl(null, [RequiredWithError('Work Position is required')]),
    date_of_birth: new FormControl(null, [RequiredWithError('Date of Birth is required')]),
  })

  constructor() {
  }

  ngOnInit(): void {

  }

  onSubmitEmployee() {
    if (this.EmployeeForm.valid) return this.submitEmployee.emit(Employee.new(this.EmployeeForm.value));
    this.EmployeeForm.markAllAsTouched()
  }

}
