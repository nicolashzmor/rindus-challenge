import {Component} from '@angular/core';
import {Store} from "@ngxs/store";
import {EmployeesActions} from "./core/store/employees/employees.actions";
import InitializeEmployees = EmployeesActions.InitializeEmployees;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(protected store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(InitializeEmployees)
  }
}
