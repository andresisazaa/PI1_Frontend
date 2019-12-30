import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiringProcessesComponent } from './components/hiring-processes/hiring-processes.component';
import { HiringProcessesRoutingModule } from './hiring-processes.routes';

@NgModule({
  declarations: [HiringProcessesComponent],
  imports: [
    CommonModule,
    HiringProcessesRoutingModule
  ],
  exports: [HiringProcessesComponent]
})
export class HiringProcessesModule { }
