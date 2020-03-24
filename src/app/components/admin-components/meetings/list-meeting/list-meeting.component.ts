import { Component, OnInit } from '@angular/core';
import { MeetingComponent } from '../meeting/meeting.component';
import { Meeting } from 'src/app/modals/meeting';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit {

  isPopupOpened = true ; 
  meeting : Meeting = new Meeting();
  meetings : Meeting[];

  constructor(private dialog:MatDialog, private meetingService:MeetingService) { }

  ngOnInit() {
    this.refreshData();
  }

  onAddNote() {
    this.isPopupOpened = true;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ; 
    dialogConfig.autoFocus = true ; 
    dialogConfig.width = "40%";
    const dialogRef = this.dialog.open(MeetingComponent,dialogConfig );

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      this.refreshData();
    });
  }

  refreshData(){
    this.meetingService.getAllmeetings()
    .subscribe(
      response => {
        this.meetings = response; }
     );
  }


}
