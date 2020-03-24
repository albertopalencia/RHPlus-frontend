import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/modals/meeting';
import { MatDialogRef } from '@angular/material';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  meeting : Meeting = new Meeting();

  constructor(public dialogRef:MatDialogRef<MeetingComponent>, private meetingService:MeetingService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.onCreateMeeting();
    this.onClose();
  }

  onCreateMeeting():void {
    this.meetingService.onCreateMeeting(this.meeting)
    .subscribe( data => {
      alert("meeting created successffuly");
    });

  }

  onClose(){
    this.dialogRef.close();
  }

}
