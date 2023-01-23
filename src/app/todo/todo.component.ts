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
  todo: Todo[] = [];

  constructor(private todoDataService:TodoDataService, private activatedRoute: ActivatedRoute ) { }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params[`id`];
    this.todoDataService.retrieveTodo(`vinodh`, this.id).subscribe(
       data => this.todo = data
      // data => console.log(data)
    )
  }
}
