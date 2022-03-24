import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchAndAddActionBarComponent } from './search-and-add-action-bar/search-and-add-action-bar.component';
import {TuiInputModule} from "@taiga-ui/kit";
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import {TuiTableModule} from "@taiga-ui/addon-table";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SearchAndAddActionBarComponent,
    EmployeesTableComponent
  ],
  exports: [
    SearchAndAddActionBarComponent,
    EmployeesTableComponent
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
        RouterModule
    ]
})
export class EmployeesModule { }
