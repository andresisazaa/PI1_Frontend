import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

import { Candidate } from "../../../../shared/models/candidate.model";
import { forkJoin } from "rxjs";
import { CandidatesService } from 'src/app/core/services/candidates.service';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { JobsService } from 'src/app/core/services/jobs.service';

@Component({
  selector: "app-candidate-form",
  templateUrl: "./candidate-form.component.html",
  styleUrls: ["./candidate-form.component.scss"],
})
export class CandidateFormComponent implements OnInit {
  candidatesForm: FormGroup;
  submitted: boolean = false;
  aspiratedJobs = [];
  attractionChannels = [];

  constructor(
    private candidatesService: CandidatesService,
    private channelsService: ChannelsService,
    private jobsService: JobsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.candidatesForm = this.formBuilder.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
      ]),
      aspiratedJob: new FormControl(null, Validators.required),
      attractionChannel: new FormControl(null, Validators.required),
      CVUrl: new FormControl(null, Validators.required),
    });
    forkJoin([
      this.channelsService.getChannels(),
      this.jobsService.getJobs(),
    ]).subscribe((response) => {
      this.attractionChannels = response[0].map((channel) => {
        return { id: channel.id, name: channel.name };
      });
      this.aspiratedJobs = response[1].map((job) => {
        return { id: job.id, name: job.name };
      });
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
    const name = this.candidatesForm.value["name"];
    const email = this.candidatesForm.value["email"];
    const phoneNumber = this.candidatesForm.value["phoneNumber"];
    const aspiratedJob = this.candidatesForm.value["aspiratedJob"];
    const attractionChannel = this.candidatesForm.value["attractionChannel"];
    const CVUrl = this.candidatesForm.value["CVUrl"];

    const candidate: Candidate = {
      name,
      email,
      phoneNumber,
      aspiratedJob,
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
