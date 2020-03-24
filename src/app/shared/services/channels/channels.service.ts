import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Channel } from '../../models/channel.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  constructor(private http: HttpClient) { }
  API_URL = 'http://localhost:3000';

  getChannels(): Observable<Channel[]> {
    return this.http.get(`${this.API_URL}/channels`)
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
    return this.http.get(`${this.API_URL}/channels/${id}`)
      .pipe(map(response => {
        const id = response['id'];
        const name = response['name'];
        const description = response['descripton'];
        const channel: Channel = { id, name, description };
        return channel;
      }));
  }

  createChannel(channelData: Object): Observable<Channel> {
    return this.http.post(`${this.API_URL}/channels`, { ...channelData })
      .pipe(map(response => {
        const id = response['id'];
        const name = response['name'];
        const description = response['descripton'];
        const channel: Channel = { id, name, description };
        return channel;
      }));
  }

  updateChannel(channelData: Channel) {
    return this.http.put(`${this.API_URL}/channels/${channelData.id}`, { ...channelData });
  }

  deleteChannel(id: number) {
    return this.http.delete(`${this.API_URL}/channels/${id}`);
  }
}
