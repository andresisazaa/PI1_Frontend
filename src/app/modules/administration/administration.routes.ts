import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdministrationComponent } from './pages/administration/administration.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { StatusesComponent } from './pages/statuses/statuses.component';

const routes: Routes = [
  {
    path: '', component: AdministrationComponent,
    children: [
      { path: '', component: ChannelsComponent },
      { path: 'canales', component: ChannelsComponent },
      { path: 'empleos', component: JobsComponent },
      { path: 'estados', component: StatusesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
