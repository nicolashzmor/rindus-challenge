import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from "@ngxs/store";
import {EmployeesState} from "./employees/employees.state";
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([EmployeesState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ]
})
export class StoreModule {
}
