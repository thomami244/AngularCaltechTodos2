import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo {

  constructor (public id : number, public description : string, public done: boolean, public targetDate: Date) {
  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit{
    constructor(private todoDataService: TodoDataService) { }

    ngOnInit() {
      this.refreshTodos()
    }

    todos4: Todo[] = [];

  refreshTodos(){
    this.todoDataService.retrieveAllTodos('vinodh').subscribe(
      response => {
        // console.log(response);
        this.todos4 = response;
      }
    )
  }
}


// export class ListTodosComponent {


// todos3 = [
// new Todo(1,'Learn to Dance', false, new Date() ),
// new Todo(2,'Become an expert at angular', false, new Date() ),
// new Todo(3,'visit the USA', false, new Date() )
// ]

// todos = [
//   {id:1, description: 'Learn to Dance'},
//   {id:2, description: 'Become an expert at angular'}

// ]

//   todo = {
//   id: 1,
//   description: 'Learn to Dance'
//   }

// }
