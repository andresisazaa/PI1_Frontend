import { Component, OnInit, Input } from '@angular/core';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { Channel } from 'src/app/shared/models/channel.model';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.scss']
})
export class ChannelDetailComponent implements OnInit {
  @Input() channel: Channel;
  constructor(private channelsService: ChannelsService) { }

  ngOnInit(): void {
    // this.getChannelDetails();
  }

  // getChannelDetails(): void {
  //   this.channelsService.getChannelById(this.channelId)
  //     .subscribe(channel => {
  //       this.channel = channel;
  //       console.log(this.channel);

  //     });
  // }
}
