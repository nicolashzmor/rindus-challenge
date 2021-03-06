import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesListComponent} from "./employees-list/employees-list.component";
import {EmployeesNewComponent} from "./employees-new/employees-new.component";
import {EmployeesEditComponent} from "./employees-edit/employees-edit.component";
import {ResetComponent} from "./reset/reset.component";

const routes: Routes = [
  {path: 'employees', component: EmployeesListComponent},
  {path: 'employees/new', component: EmployeesNewComponent},
  {path: 'employees/:employee_id', component: EmployeesEditComponent},
  {path: 'reset', component: ResetComponent },
  {path: '**', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
