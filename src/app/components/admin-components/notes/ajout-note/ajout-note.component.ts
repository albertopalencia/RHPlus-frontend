import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NoteInterne } from 'src/app/modals/noteInterne';
import { NoteinterneService } from 'src/app/services/noteinterne.service';

@Component({
  selector: 'app-ajout-note',
  templateUrl: './ajout-note.component.html',
  styleUrls: ['./ajout-note.component.css']
})
export class AjoutNoteComponent implements OnInit {
  
  public noteInterne: NoteInterne = new NoteInterne();

  constructor(public dialogRef: MatDialogRef<AjoutNoteComponent>, private noteInterneService:NoteinterneService) { }

  ngOnInit() {
  }

  onSubmit(){
  
  this.onCreateNoteInterne();
  this.onClose();
  }

  onCreateNoteInterne():void {
    this.noteInterneService.onCreateNoteInterne(this.noteInterne)
    .subscribe(  data => {
      alert("note created successfully");
    });
  };

  onClose(){
    this.dialogRef.close();
  }

}
