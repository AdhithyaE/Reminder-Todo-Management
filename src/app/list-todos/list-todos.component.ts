import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
export class Todo {
  constructor(
    // public id: number,
    // public description: string,
    // public done: boolean,
    // public targetDate: Date,
    public userName: string,
    public contactNumber:number,
    public cardNumber:number,
    public isPriorityRequest: boolean,

    public componentType:String,
    public componentName:string,
    public quantity:number

  ){

  }
}
export class Confirmation{
  constructor(
      public userName: string,
      public requestId:string,
      public  processingCharge:number,
      public  packageAndDeliveryCharge:number,
      public dateOfDelivery: Date,
      public total:number
  
  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  //isLoggedIn = true;
   todo: Todo;
   confirmation:Confirmation
   token: String
   userName=sessionStorage.getItem('userName')
  requestId=""
   processingCharge=""
   packageAndDeliveryCharge=""
   dateOfDelivery=""
   total=""
   name=''
  constructor(
    private todoService:TodoDataService,
    private tokenStorage:TokenStorageService,
    private router : Router,
    private route:ActivatedRoute,
    private hard:HardcodedAuthenticationService,
  ) { }

  ngOnInit() {
    //this.isLoggedIn = !!this.tokenStorage.getToken();
    this.name = this.route.snapshot.params['name'];
    this.requestId=this.hard.getRequestId()
    this.dateOfDelivery=this.hard.getDateOfDelivery()
    this.requestId=this.hard.getRequestId()
    this.packageAndDeliveryCharge=this.hard.getPackageAndDeliveryCharge()
    this.processingCharge=this.hard.getProcessingCharge()
   // this.userName=sessionStorage.getItem('userName')
    this.total=this.hard.getTotal()
    //this.reloadPage()
  }
  refreshTodos(){
    this.todoService.createTodo(this.tokenStorage.getToken,this.todo).subscribe(
      response => {
        console.log(response);
        
      }
    )
  }
  reloadPage(): void {
     }
   setConfirmation(data,todo){
    //this.confirmation.userName=todo.userName
  //  this.confirmation.requestId=data.requestId
    console.log(this.confirmation)
   }
  // refreshTodos(){
  //   this.todoService.retrieveAllTodos('in28minutes').subscribe(
  //     response => {
  //       console.log(response);
  //       this.todo = response;
  //     }
  //   )
  // }
  addTodo(){
   this.router.navigate(['payment'])
   }
  // deleteTodo(id) {
  //   console.log(`delete todo ${id}` )
  //   this.todoService.deleteTodo('in28minutes', id).subscribe (
  //     response => {
  //       console.log(response);
  //       this.message = `Delete of Todo ${id} Successful!`;
  //       this.refreshTodos();
  //     }
  //   )
  // }

  // updateTodo(id) {
  //   console.log(`update ${id}`)
  //   this.router.navigate(['todos',id])
  // }

  
}
