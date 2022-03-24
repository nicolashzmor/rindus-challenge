import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesNewComponent } from './employees-new/employees-new.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import {LayoutModule} from "../components/layout/layout.module";
import {TuiInputModule, TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {EmployeesModule} from "../components/employees/employees.module";
import { ResetComponent } from './reset/reset.component';


@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesNewComponent,
    EmployeesEditComponent,
    ResetComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        LayoutModule,
        TuiInputModule,
        TuiPrimitiveTextfieldModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        EmployeesModule,
        TuiIslandModule
    ]
})
export class PagesModule { }
