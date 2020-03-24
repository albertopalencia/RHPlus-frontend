import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material'; 
import { AjoutNoteComponent } from '../ajout-note/ajout-note.component';
import { NoteinterneService } from 'src/app/services/noteinterne.service';
import { NoteInterne } from 'src/app/modals/noteInterne';

@Component({
  selector: 'app-notes-internes',
  templateUrl: './notes-internes.component.html',
  styleUrls: ['./notes-internes.component.css']
})
export class NotesInternesComponent implements OnInit {
  
  isPopupOpened = true;
  noteInterne : NoteInterne = new NoteInterne();
  notesInternes:NoteInterne[];
  constructor(private dialog: MatDialog, private noteInterneService:NoteinterneService) { }

  ngOnInit() {
    this.refreshData();
  }

  /*onAddNote(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ; 
    dialogConfig.autoFocus = true ; 
    dialogConfig.width = "60%";
    dialogConfig.width = "400px";
    let dialogRef = this.dialog.open(AjoutNoteComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
      this.refreshData();
    });
  }*/

  onAddNote() {
    this.isPopupOpened = true;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ; 
    dialogConfig.autoFocus = true ; 
    dialogConfig.width = "40%";
    const dialogRef = this.dialog.open(AjoutNoteComponent,dialogConfig );

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      this.refreshData();
    });
  }

  refreshData(){
    this.noteInterneService.getAllNoteIntern()
    .subscribe(
      response => {
        this.notesInternes = response; }
     );
  }

  deleteNote(noteInterne:NoteInterne): void {
    this.noteInterneService.deleteNoteById(noteInterne.id)
      .subscribe( data => {
        this.notesInternes = this.notesInternes.filter(u => u !== noteInterne);
      })
    
  }


}
