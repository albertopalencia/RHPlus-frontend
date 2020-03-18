import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modals/todo';
import { TodoService } from 'src/app/services/todo.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AjoutNoteComponent } from '../../notes/ajout-note/ajout-note.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo : Todo = new Todo();
  todos:Todo[];

  constructor(private dialog: MatDialog, private todoService:TodoService) { }

  ngOnInit() {
    this.refreshData();
  }

  onAddNote(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ; 
    dialogConfig.autoFocus = true ; 
    dialogConfig.width = "60%";
    dialogConfig.width = "400px";
    let dialogRef = this.dialog.open(AddTodoComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
      this.refreshData();
    });
  }

  refreshData(){
    this.todoService.getTodos()
    .subscribe(
      response => {
        this.todos = response; }
     );
  }

}
