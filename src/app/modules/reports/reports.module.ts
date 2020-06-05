import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports.routes';
import { GoogleChartsModule } from 'angular-google-charts';
import { ReportsComponent } from './components/reports/reports.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    GoogleChartsModule
  ]
})
export class ReportsModule { }
