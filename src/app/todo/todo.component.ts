import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  id!: number
  todo5!: Todo;
  // todo5: Todo = new Todo(1,'Learn to Dance', false, new Date() )
  // todo: Todo = Todo(1, '', false, new Date())
  // todo: Todo = new Todo(1,'Learn to Dance', false, new Date() )


  // todo5: Todo = new Todo(1,'Learn to Dance', false, new Date() )

  // todo: Todo = Todo(1, '', false, new Date())
  // todo: Todo = new Todo(1,'Learn to Dance', false, new Date() )

  constructor(private todoDataService:TodoDataService, private activatedRoute: ActivatedRoute ) { }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params[`id`];
    this.todo5 = new Todo(1, '', false, new Date());
    this.todoDataService.retrieveTodo(`vinodh`, this.id).subscribe(
       data => this.todo5 = data
      // data => console.log(data)
    )
  }
}
