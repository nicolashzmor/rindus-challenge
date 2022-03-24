import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {EmployeesSelectors} from "../../core/store/employees/employees.selectors";
import {EmployeesActions} from "../../core/store/employees/employees.actions";
import UpdateFilterBy = EmployeesActions.UpdateFilterBy;

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  public employees$ = this.store.select(EmployeesSelectors.GetEmployees())

  constructor(protected store: Store) {
  }

  ngOnInit(): void {
  }

  filterEmployees(filterBy: string){
    this.store.dispatch(new UpdateFilterBy(filterBy))
  }

}
