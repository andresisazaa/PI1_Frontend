import { Component, Inject } from '@angular/core';
import { Channel } from 'src/app/shared/models/channel.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.scss']
})
export class ChannelDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public channel: Channel) { }
}
