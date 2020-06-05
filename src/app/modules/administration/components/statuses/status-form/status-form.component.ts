import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Status } from 'src/app/shared/models/status.model';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent implements OnInit {
  statusForm: FormGroup;
  @Input() status: Status;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.statusForm = this.createStatusForm();
  }

  createStatusForm(): FormGroup {
    return this.formBuilder.group({
      name: [this.status ? this.status.name : null, Validators.required],
      description: [this.status ? this.status.description : null]
    });
  }

  get name(): AbstractControl {
    return this.statusForm.get('name');
  }

  get description(): AbstractControl {
    return this.statusForm.get('description');
  }

  submit(): void {
    console.log(this.statusForm.value);
  }
}
