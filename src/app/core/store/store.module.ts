import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from "@ngxs/store";
import {EmployeesState} from "./employees/employees.state";
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([EmployeesState]),
    NgxsStoragePluginModule.forRoot({key: [EmployeesState]}),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ]
})
export class StoreModule {
}
