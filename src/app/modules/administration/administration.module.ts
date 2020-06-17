import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration.routes';
import { AdministrationComponent } from './pages/administration/administration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { StatusesComponent } from './pages/statuses/statuses.component';
import { JobFormComponent } from './components/jobs/job-form/job-form.component';
import { ChannelFormComponent } from './components/channels/channel-form/channel-form.component';
import { StatusFormComponent } from './components/statuses/status-form/status-form.component';
import { JobListComponent } from './components/jobs/job-list/job-list.component';
import { ChannelListComponent } from './components/channels/channel-list/channel-list.component';
import { StatusListComponent } from './components/statuses/status-list/status-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusDetailComponent } from './components/statuses/status-detail/status-detail.component';
import { JobDetailComponent } from './components/jobs/job-detail/job-detail.component';
import { ChannelDetailComponent } from './components/channels/channel-detail/channel-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AdministrationComponent,
    JobsComponent,
    ChannelsComponent,
    StatusesComponent,
    JobFormComponent,
    ChannelFormComponent,
    StatusFormComponent,
    JobListComponent,
    ChannelListComponent,
    StatusListComponent,
    StatusDetailComponent,
    JobDetailComponent,
    ChannelDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdministrationRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [ { provide: MAT_DIALOG_DATA, useValue: {} }]
})
export class AdministrationModule { }
