import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Candidate } from '../../../../shared/models/candidate.model';
import { CandidatesService } from 'src/app/core/services/candidates.service';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { JobsService } from 'src/app/core/services/jobs.service';
import { Job } from '../../../../shared/models/job.model';
import { Channel } from '../../../../shared/models/channel.model';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss'],
})
export class CandidateFormComponent implements OnInit {
  candidatesForm: FormGroup;
  submitted: boolean = false;
  aspiratedJobs: Job[] = [];
  attractionChannels: Channel[] = [];

  constructor(
    private candidatesService: CandidatesService,
    private channelsService: ChannelsService,
    private jobsService: JobsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.candidatesForm = this.createCandidateForm();
    forkJoin([
      this.channelsService.getChannels(),
      this.jobsService.getJobs(),
    ]).subscribe(([attractionChannels, aspiratedJobs]) => {
      this.attractionChannels = attractionChannels.map(channel => ({ id: channel.id, name: channel.name }));
      this.aspiratedJobs = aspiratedJobs.map(job => ({ id: job.id, name: job.name }));
    });
  }

  createCandidateForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(10)]],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required, Validators.minLength(7)]],
      aspiratedJob: [null, Validators.required],
      attractionChannel: [null, Validators.required],
      CVUrl: [null, Validators.required]
    });
  }

  get f() {
    return this.candidatesForm.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.candidatesForm.invalid) {
      return;
    }
    const {
      name,
      email,
      phoneNumber,
      attractionChannel,
      CVUrl } = this.candidatesForm.value;
    const candidate: Candidate = {
      name,
      email,
      phoneNumber,
      attractionChannel,
      CVUrl,
    };
    this.candidatesService.createCandidate(candidate).subscribe((response) => {
      console.log(response);
    });
    this.candidatesForm.reset();
    this.submitted = false;
  }
}
