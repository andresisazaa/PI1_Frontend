import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HiringProcessesComponent } from './components/hiring-processes/hiring-processes.component';

export const hiringProcessesRoutes: Routes = [
    { path: 'procesos', component: HiringProcessesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(hiringProcessesRoutes)],
    exports: [RouterModule]
})
export class HiringProcessesRoutingModule {}
