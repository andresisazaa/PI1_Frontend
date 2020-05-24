import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/shared/models/channel.model';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {
  channels: Channel[] = [];
  loadingChannels: boolean;
  constructor(private channelsService: ChannelsService) { }

  ngOnInit(): void {
    this.getChannels();
  }

  getChannels(): void {
    this.loadingChannels = true;
    this.channelsService.getChannels().subscribe(channels => {
      this.channels = channels;
      this.loadingChannels = false;
    });
  }

}
