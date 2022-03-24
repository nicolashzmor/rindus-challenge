import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchAndAddActionBarComponent } from './search-and-add-action-bar/search-and-add-action-bar.component';
import {
  TuiFieldErrorPipeModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiIslandModule,
  TuiSelectModule
} from "@taiga-ui/kit";
import {
  TuiButtonModule,
  TuiDataListModule, TuiErrorModule,
  TuiHostedDropdownModule, TuiLabelModule,
  TuiSvgModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import {TuiTableModule} from "@taiga-ui/addon-table";
import {RouterModule} from "@angular/router";
import { WorkPositionTableLabelComponent } from './work-position-table-label/work-position-table-label.component';
import { SignOffConfirmationComponent } from './sign-off-confirmation/sign-off-confirmation.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';



@NgModule({
  declarations: [
    SearchAndAddActionBarComponent,
    EmployeesTableComponent,
    WorkPositionTableLabelComponent,
    SignOffConfirmationComponent,
    EmployeeFormComponent
  ],
    exports: [
        SearchAndAddActionBarComponent,
        EmployeesTableComponent,
        EmployeeFormComponent
    ],
  imports: [
    CommonModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    ReactiveFormsModule,
    TuiTableModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    RouterModule,
    TuiLabelModule,
    TuiIslandModule,
    TuiSelectModule,
    TuiInputDateModule,
    TuiFieldErrorPipeModule,
    TuiErrorModule
  ]
})
export class EmployeesModule { }
