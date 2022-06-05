import { TODO_JPA_API_URL } from './../../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo,Confirmation, ListTodosComponent } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  constructor(
    private http:HttpClient,
    
  ) { }

  retrieveAllTodos(username) {
    return this.http.get<Todo>(`${TODO_JPA_API_URL}`);
    // users/${username}/todos`);
    //console.log("Execute Hello World Bean Service")
  }
  
  // deleteTodo(username, id){
  //   return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  // }

  // retrieveTodo(username, id){
  //   return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  // }
  // updateTodo(username, id, todo){
  //   return this.http.put(
  //         `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
  //               , todo);
  // }
  
 
  createTodo(token,todo){
    console.log(token);
    const httpOptions = {
     // headers: new HttpHeaders({ 'Content-Type': 'application/json' })

    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'token'})
  };
    // const httpOptions={headers:new HttpHeaders({
    //   'Authorization':token
    // }),};
    return this.http.post<any>(
              `${TODO_JPA_API_URL}/createReturnRequest`
                ,todo
                ,httpOptions
                );
  }

}
