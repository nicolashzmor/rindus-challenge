import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import {TuiSvgModule} from "@taiga-ui/core";
import { SectionHeaderComponent } from './section-header/section-header.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        MainHeaderComponent,
        SectionHeaderComponent
    ],
  exports: [
    MainHeaderComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    TuiSvgModule,
    RouterModule
  ]
})
export class LayoutModule { }
