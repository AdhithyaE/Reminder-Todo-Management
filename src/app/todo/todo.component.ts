import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo,Confirmation } from '../list-todos/list-todos.component';
import { Token } from '@angular/compiler';
import {TokenStorageService} from '../service/token-storage.service'
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo: Todo
   userName=''
   contactNumber=0
   cardNumber=0
  isPriorityRequest=false
 errorMessage=false
  componentType=''
  componentName=''
  quantity=0
//isLoggedIn=false
 conform:Confirmation
  constructor(
    private todoService: TodoDataService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private hard:HardcodedAuthenticationService,
  ) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    this.todo=new Todo(this.userName,this.contactNumber,this.cardNumber,
      this.isPriorityRequest,this.componentType,this.componentName,this.quantity)
    //  this.isLoggedIn = !!this.tokenStorage.getToken();
  }

  saveTodo() {
   // if(this.id == -1) { //=== ==
  //  this.hard.setRequest(this.todo.userName)
      this.todoService.createTodo(this.tokenStorage.getToken(), this.todo)
          .subscribe (
            data => {
                console.log(data.requestId)
                this.hard.setData(data)
                sessionStorage.setItem('userName',this.todo.userName)
                // this.hard.setRequest(this.userName)
                console.log(sessionStorage.getItem('userName'))
              
              this.router.navigate(['todos',this.todo.userName])
            },
            err => {
              this.errorMessage = err.error.message;
              console.log(this.errorMessage);
              console.log(this.todo);
            //  / this.isLoginFailed = true;
            this.errorMessage=true
            }
          )
    // } else {
    //   this.todoService.updateTodo('in28minutes', this.id, this.todo)
    //       .subscribe (
    //         data => {
    //           console.log(data)
    //           this.router.navigate(['todos'])
    //         }
    //       )
    // }
  }
   checkHighPriority(that) {
     console.log(that);
    if (that === "integral") {
        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
}
}
