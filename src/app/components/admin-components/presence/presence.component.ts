import {  OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {  ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';
import { Presence } from 'src/app/modals/presence';
import { EmployeService } from 'src/app/services/employe.service';
//import { colors } from '../demo-utils/colors';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css'] 
})
export class PresenceComponent implements OnInit {

  presences:Presence[];

  constructor(private employeService:EmployeService ) { }

  ngOnInit() {
    this.employeService.getAttendance().subscribe(
      response =>{
        console.log(response);
        this.presences= response;
      }
     );
  }

  

  
}
