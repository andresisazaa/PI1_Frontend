import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-channel-form',
  templateUrl: './channel-form.component.html',
  styleUrls: ['./channel-form.component.scss']
})
export class ChannelFormComponent implements OnInit {
  channelForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.channelForm = this.createChannelForm();
  }

  createChannelForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, Validators.required],
      description: [null]
    });
  }

  get name(): AbstractControl {
    return this.channelForm.get('name');
  }

  get description(): AbstractControl {
    return this.channelForm.get('description');
  }

  submit(): void {
    console.log(this.channelForm.value);
  }
}
