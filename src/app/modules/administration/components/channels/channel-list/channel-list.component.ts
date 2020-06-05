import { Component, OnInit, ViewChild } from '@angular/core';
import { Channel } from 'src/app/shared/models/channel.model';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  channelsData: MatTableDataSource<Channel>
  displayedColumns: string[] = [];
  channels: Channel[] = [];
  loadingChannels: boolean;
  showModal: boolean;
  channel: Channel;
  channelViewFlag: boolean;
  channelEditFlag: boolean;
  channelDeleteFlag: boolean;
  constructor(private channelsService: ChannelsService) { }

  ngOnInit(): void {
    this.getChannels();
  }

  getChannels(): void {
    this.loadingChannels = true;
    this.channelsService.getChannels().subscribe(channels => {
      this.channels = channels;
      this.setTableConfig();
      this.loadingChannels = false;
    });
  }

  setTableConfig(): void {
    this.displayedColumns = ['ID', 'name', 'actions'];
    this.channelsData = new MatTableDataSource<Channel>(this.channels);
    this.channelsData.paginator = this.paginator;
    this.channelsData.sort = this.sort;
  }


  viewChannelDetails(channel: Channel): void {
    this.channelsService.getChannelById(channel.id)
      .subscribe(channel => {
        this.channel = channel;
        this.showModal = true;
        this.channelViewFlag = true;
      });
  }

  editChannel(channel: Channel): void {
    this.channelsService.getChannelById(channel.id)
      .subscribe(channel => {
        this.channel = channel;
        this.showModal = true;
        this.channelEditFlag = true;
      });
  }

  closeModal(): void {
    this.showModal = false;
    this.channelViewFlag = false;
    this.channelEditFlag = false;
    this.channelDeleteFlag = false;
  }
}
