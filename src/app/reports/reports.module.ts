import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportsRoutingModule } from './reports.routes';



@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  exports: [ReportsComponent]
})
export class ReportsModule { }
