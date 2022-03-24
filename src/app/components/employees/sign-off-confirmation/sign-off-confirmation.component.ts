import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {TuiDialogContext} from "@taiga-ui/core";
import {Employee} from "../../../core/models/employee.model";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-off-confirmation',
  templateUrl: './sign-off-confirmation.component.html',
  styleUrls: ['./sign-off-confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignOffConfirmationComponent implements OnInit {
  employee: Employee

  verification: FormControl = new FormControl('', [Validators.required])

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any, Employee>,
  ) {
    this.employee = context.data
  }

  ngOnInit(): void {

  }

  submitSignOff(){
    this.context.completeWith(this.verification.value)
  }

}
