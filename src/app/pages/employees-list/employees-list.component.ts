import {Component, OnInit} from '@angular/core';
import {EmployeesDatabase} from "../../core/store/employees/employees.values";
import {Employee} from "../../core/models/employee.model";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  employees = EmployeesDatabase.map(e => Employee.new(e))

  constructor() {
  }

  ngOnInit(): void {
  }

}
