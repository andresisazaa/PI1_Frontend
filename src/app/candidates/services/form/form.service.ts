import { Injectable } from '@angular/core';
import { JobsService } from 'src/app/shared/services/jobs/jobs.service';
import { ChannelsService } from 'src/app/shared/services/channels/channels.service';
import { forkJoin } from 'rxjs';
import { Channel } from 'src/app/shared/models/channel.model';
import { Job } from 'src/app/shared/models/job.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  channels: Channel[] = [];
  jobs: Job[] = [];
  constructor(private jobsService: JobsService, private channelsService: ChannelsService) { }


  async getFormFields() {
    forkJoin([this.channelsService.getChannels(), this.jobsService.getJobs()])
      .subscribe(response => {
        this.channels = response[0].map(channel => {
          return {
            id: channel.id,
            name: channel.name
          };
        });
        this.jobs = response[1].map(job => {
          return {
            id: job.id,
            name: job.name
          };
        });
        return [this.channels, this.jobs];
      });

  }
}
