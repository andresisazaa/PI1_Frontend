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
  private URL = `${environment.backend_URL}/channels`;
  constructor(private http: HttpClient) { }

  getChannels(): Observable<Channel[]> {
    return this.http.get(`${this.URL}`)
      .pipe(map((res: Channel[]) => res));
  }

  getChannelById(id: number): Observable<Channel> {
    return this.http.get(`${this.URL}/${id}`)
      .pipe(map((res: Channel) => res));
  }

  createChannel(channel: Channel): Observable<Channel> {
    return this.http.post(`${this.URL}`, channel)
      .pipe(map((res: Channel) => res));
  }

  updateChannel(channel: Channel): Observable<string> {
    return this.http.put(`${this.URL}/${channel.id}`, channel)
      .pipe(map((res: { message: string }) => res.message));
  }

  deleteChannel(id: number): Observable<string> {
    return this.http.delete(`${this.URL}/${id}`)
      .pipe(map((res: string) => res));
  }
}
