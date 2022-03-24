import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesNewComponent } from './employees-new/employees-new.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';


@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesNewComponent,
    EmployeesEditComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
