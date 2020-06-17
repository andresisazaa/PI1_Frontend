import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChannelFormComponent } from '../../components/channels/channel-form/channel-form.component';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent {
  showFormModal: boolean;
  constructor(private dialog: MatDialog) { }

  openAddChannelModal() {
    this.dialog.open(ChannelFormComponent, { data: { channel: null } })
  }
}
