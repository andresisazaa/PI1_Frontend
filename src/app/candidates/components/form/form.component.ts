import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  candidatesForm: FormGroup;
  submitted: boolean = false;

  aspiratedJobs: string[] = ['Java Developer', 'Node.js Developer', '.NET Developer', 'Frontend Developer'];
  attractionChannels: string[] = ['Computrabajo', 'LinkedIn', 'Redes sociales', 'Referencias personales'];

  constructor(private candidatesService: CandidatesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.candidatesForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(7)]),
      aspiratedJob: new FormControl(null, Validators.required),
      attractionChannel: new FormControl(null, Validators.required)
    });
    console.log(this.f);
  }

  get f() {
    return this.candidatesForm.controls;
  }

  submitForm() {
    console.log(this.f);
    this.submitted = true;
    if (this.candidatesForm.invalid) { return; }

    const name = this.candidatesForm.value['name'];
    const email = this.candidatesForm.value['email'];
    const phoneNumber = this.candidatesForm.value['phoneNumber'];
    const aspiratedJob = this.candidatesForm.value['aspiratedJob'];
    const attractionChannel = this.candidatesForm.value['attractionChannel'];

    const candidate = {
      name,
      email,
      phoneNumber,
      aspiratedJob,
      attractionChannel
    };

    this.candidatesService.createCandidate(candidate).subscribe(response => {
      console.log(response);
      console.log('CREADO CON EXITO');
      
    })
    // this.candidatesForm.reset();
    // this.submitted = false;
  }
}
