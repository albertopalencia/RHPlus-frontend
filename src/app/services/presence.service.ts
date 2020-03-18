import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Presence } from '../modals/presence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  presence:Presence = new Presence();

  constructor(private httpClient:HttpClient) { }

getPresences():Observable<any> {
  return this.httpClient.get<any> ("http//localhost:8080/presences");
}

public createPresence(presence)
{

  console.log(presence);
  return this.httpClient.post<any>("http://localhost:8080/createPresence",presence);

}
}
