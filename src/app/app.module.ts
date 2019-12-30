import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { CandidatesModule } from './candidates/candidates.module';
import { HiringProcessesModule } from './hiring-processes/hiring-processes.module';
import { ReportsModule } from './reports/reports.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CandidatesModule,
    HiringProcessesModule,
    ReportsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
