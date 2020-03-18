import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../modals/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'http://localhost:8080';  

  constructor(private http:HttpClient) { }

  public getTodos(){
    return this.http.get<any>(this.baseUrl + '/todos/');
     
  }

  createTodo(todoData: Todo) {
    return this.http.post(this.baseUrl + '/todos/', todoData);
      
  }


  updateTodo(todoData: Todo)  {
    return this.http.put(this.baseUrl + '/api/todos/' + todoData.id, todoData);
      
  }

  deleteTodo(id: number) {
    return this.http.delete(this.baseUrl + '/api/todos/' + id);
      
  }

}
