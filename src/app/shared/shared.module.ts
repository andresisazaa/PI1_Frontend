import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedRoutingModule } from './shared.routes';

import { ChannelsService } from './services/channels/channels.service';
import { JobsService } from './services/jobs/jobs.service';

@NgModule({
  declarations: [SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule
  ],
  providers: [ChannelsService, JobsService],
  exports: [SidebarComponent, FooterComponent]
})
export class SharedModule { }
