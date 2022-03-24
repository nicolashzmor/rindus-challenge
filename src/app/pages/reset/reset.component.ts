import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {EmployeesActions} from "../../core/store/employees/employees.actions";
import {Router} from "@angular/router";
import ResetEmployeesDatabase = EmployeesActions.ResetEmployeesDatabase;

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetComponent implements OnInit {

  constructor(protected store: Store, protected router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(ResetEmployeesDatabase).subscribe(() => this.router.navigate(['/']))
  }

}
