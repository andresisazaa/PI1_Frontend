import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { JobsService } from 'src/app/core/services/jobs.service';
import { Job } from '../../../../shared/models/job.model';
import { Channel } from '../../../../shared/models/channel.model';
import { Candidate } from '../../../../shared/models/candidate.model';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss'],
})
export class CandidateFormComponent implements OnInit {
  candidateForm: FormGroup;
  aspiratedJobs: Job[] = [];
  attractionChannels: Channel[] = [];
  @Output() submitCandidate: EventEmitter<Candidate>;

  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService,
    private channelsService: ChannelsService
  ) {
    this.submitCandidate = new EventEmitter<Candidate>();
  }

  ngOnInit(): void {
    this.candidateForm = this.createCandidateForm();
    this.getFormData().subscribe(([channels, jobs]) => {
      this.attractionChannels = channels;
      this.aspiratedJobs = jobs;
    }, error => {
    });
  }

  getFormData(): Observable<[Channel[], Job[]]> {
    const channels$ = this.channelsService.getChannels();
    const jobs$ = this.jobsService.getJobs();
    return forkJoin(channels$, jobs$);
  }

  createCandidateForm(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required, Validators.minLength(10)]],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required, Validators.minLength(7)]],
      aspiratedJob: [null, Validators.required],
      attractionChannel: [null, Validators.required],
      CVUrl: [null, Validators.required],
    });
  }

  submitForm(): void {
    if (this.candidateForm.invalid) {
      return;
    }
    const candidate: Candidate = this.candidateForm.value;
    this.submitCandidate.emit(candidate);
  }
}
