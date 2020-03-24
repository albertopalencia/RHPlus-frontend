import { Injectable } from '@angular/core';
import { Meeting } from '../modals/meeting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  meeting : Meeting = new Meeting();
  constructor(private httpClient:HttpClient) { }

  getAllmeetings():Observable<any> {
  
    return this.httpClient.get<any>("http://localhost:8080/meetings");
   }

  public onCreateMeeting(meeting) {
   
   return this.httpClient.post<any>("http://localhost:8080/meetings/create",meeting);
  }

  public deleteMeetingById (id: number)  {
    return this.httpClient.delete("http://localhost:8080/meetings/delete"+"/" + id);
  }


}
