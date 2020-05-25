import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Channel } from 'src/app/shared/models/channel.model';

@Component({
  selector: 'app-channel-form',
  templateUrl: './channel-form.component.html',
  styleUrls: ['./channel-form.component.scss']
})
export class ChannelFormComponent implements OnInit {
  channelId: number;
  @Input() channel: Channel;
  channelForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.channelForm = this.createChannelForm();
  }

  createChannelForm(): FormGroup {
    return this.formBuilder.group({
      name: [this.channel ? this.channel.name : null, Validators.required],
      description: [this.channel ? this.channel.description : null]
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
