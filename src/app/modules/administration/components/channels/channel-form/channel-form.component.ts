import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Channel } from 'src/app/shared/models/channel.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-channel-form',
  templateUrl: './channel-form.component.html',
  styleUrls: ['./channel-form.component.scss']
})
export class ChannelFormComponent implements OnInit {
  channel: Channel;
  channelForm: FormGroup;
  @Output() submitChannel: EventEmitter<Channel>;
  constructor(
    private formBuilder: FormBuilder,
    private channelsService: ChannelsService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Channel) {
    this.submitChannel = new EventEmitter<Channel>();
    this.channel = data || null;
  }

  ngOnInit(): void {
    this.channelForm = this.createChannelForm();
  }

  createChannelForm(): FormGroup {
    return this.formBuilder.group({
      name: [this.channel ? this.channel.name : null, Validators.required],
      description: [this.channel ? this.channel.description : null]
    });
  }

  submit(): void {
    const channel: Channel = this.channelForm.value;
    this.submitChannel.emit(channel);
    if (this.channel === null) {
      this.channelsService.createChannel(channel)
        .subscribe(createdChannel => {
          this.snackBar.open(`Canal con id ${createdChannel.id} agregado`, null, { duration: 2000 })
        }, error => {
          this.snackBar.open('No se pudo agregar el canal', null, { duration: 2000 });
        })
    } else {
      channel.id = this.channel.id;
      this.channelsService.updateChannel(channel)
        .subscribe(message => {
          this.snackBar.open(message, null, { duration: 2000 })
        }, ({ error }) => {
          this.snackBar.open(error.message, null, { duration: 2000 });
        })
    }
  }
}
