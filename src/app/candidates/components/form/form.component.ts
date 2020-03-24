import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CandidatesService } from '../../services/candidates.service';
import { Candidate } from '../../models/candidate.model';
import { forkJoin } from 'rxjs';
import { ChannelsService } from 'src/app/shared/services/channels/channels.service';
import { JobsService } from 'src/app/shared/services/jobs/jobs.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  candidatesForm: FormGroup;
  submitted: boolean = false;
  aspiratedJobs = [];
  attractionChannels = [];

  constructor(private candidatesService: CandidatesService,
    private channelsService: ChannelsService,
    private jobsService: JobsService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.candidatesForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(7)]),
      aspiratedJob: new FormControl(null, Validators.required),
      attractionChannel: new FormControl(null, Validators.required),
      CVUrl: new FormControl(null, Validators.required)
    });
    forkJoin([this.channelsService.getChannels(), this.jobsService.getJobs()])
      .subscribe(response => {
        this.attractionChannels = response[0].map(channel => {
          return { id: channel.id, name: channel.name };
        });
        this.aspiratedJobs = response[1].map(job => {
          return { id: job.id, name: job.name };
        });
      });
  }

  get f() {
    return this.candidatesForm.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.candidatesForm.invalid) { return; }
    const name = this.candidatesForm.value['name'];
    const email = this.candidatesForm.value['email'];
    const phoneNumber = this.candidatesForm.value['phoneNumber'];
    const aspiratedJob = this.candidatesForm.value['aspiratedJob'];
    const attractionChannel = this.candidatesForm.value['attractionChannel'];
    const CVUrl = this.candidatesForm.value['CVUrl'];

    const candidate: Candidate = {
      name,
      email,
      phoneNumber,
      aspiratedJob,
      attractionChannel,
      CVUrl
    };
    this.candidatesService.createCandidate(candidate).subscribe(response => {
      console.log(response);
    });
    this.candidatesForm.reset();
    this.submitted = false;
  }
}
