import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdministrationComponent } from './pages/administration/administration.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { StatusesComponent } from './pages/statuses/statuses.component';
import { JobListComponent } from './components/jobs/job-list/job-list.component';
import { JobFormComponent } from './components/jobs/job-form/job-form.component';
import { JobDetailComponent } from './components/jobs/job-detail/job-detail.component';
import { ChannelListComponent } from './components/channels/channel-list/channel-list.component';
import { ChannelFormComponent } from './components/channels/channel-form/channel-form.component';
import { StatusListComponent } from './components/statuses/status-list/status-list.component';
import { StatusFormComponent } from './components/statuses/status-form/status-form.component';
import { StatusDetailComponent } from './components/statuses/status-detail/status-detail.component';
import { ChannelDetailComponent } from './components/channels/channel-detail/channel-detail.component';

const routes: Routes = [
  {
    path: '', component: AdministrationComponent,
    children: [
      {
        path: 'empleos', component: JobsComponent,
        children:
          [
            { path: '', component: JobListComponent },
            { path: 'nuevo', component: JobFormComponent },
            { path: ':id', component: JobDetailComponent }
          ]
      },
      {
        path: 'canales', component: ChannelsComponent,
        children: [
          { path: '', component: ChannelListComponent },
          { path: 'nuevo', component: ChannelFormComponent },
          { path: ':id', component: ChannelDetailComponent }
        ]
      },
      {
        path: 'estados', component: StatusesComponent,
        children: [
          { path: '', component: StatusListComponent },
          { path: 'nuevo', component: StatusFormComponent },
          { path: ':id', component: StatusDetailComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
