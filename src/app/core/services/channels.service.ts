import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Channel } from 'src/app/shared/models/channel.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  constructor(private http: HttpClient) { }

  getChannels(): Observable<Channel[]> {
    return this.http.get(`${environment.backend_URL}/channels`)
      .pipe(map(response => {
        const channels: Channel[] = [];
        Object.keys(response).forEach(key => {
          const { id, name, description } = response[key];
          const channel: Channel = { id, name, description };
          channels.push(channel);
        });
        return channels;
      }));
  }

  getChannelById(id: number): Observable<Channel> {
    return this.http.get(`${environment.backend_URL}/channels/${id}`)
      .pipe(map(response => {
        const id = response['id'];
        const name = response['name'];
        const description = response['descripton'];
        const channel: Channel = { id, name, description };
        return channel;
      }));
  }

  createChannel(channelData: Object): Observable<Channel> {
    return this.http.post(`${environment.backend_URL}/channels`, { ...channelData })
      .pipe(map(response => {
        const id = response['id'];
        const name = response['name'];
        const description = response['descripton'];
        const channel: Channel = { id, name, description };
        return channel;
      }));
  }

  updateChannel(channelData: Channel) {
    return this.http.put(`${environment.backend_URL}/channels/${channelData.id}`, { ...channelData });
  }

  deleteChannel(id: number) {
    return this.http.delete(`${environment.backend_URL}/channels/${id}`);
  }
}
