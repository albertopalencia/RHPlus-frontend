import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modals/todo';
import { MatDialogRef } from '@angular/material';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  public todo: Todo = new Todo();

  constructor(public dialogRef: MatDialogRef<AddTodoComponent>, private todoService:TodoService) { }

  ngOnInit() {
  }

  onSubmit(){
  
  this.onCreateTodo();
  this.onClose();
  }

  onCreateTodo():void {
    this.todoService.createTodo(this.todo)
    .subscribe(  data => {
      alert("todo created successfully");
    });
  };

  onClose(){
    this.dialogRef.close();
  }

}
