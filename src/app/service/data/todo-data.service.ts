import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  constructor(private httpClient: HttpClient) { }

  retrieveAllTodos(username :any){
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

 retrieveTodo(username :any, id :number){
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username: any,id: number,todo: Todo){
    return this.httpClient.put(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }

  createTodo(username: any, todo: Todo) {
    return this.httpClient.post(`http://localhost:8080/users/${username}/todos`,todo);
  }
}
