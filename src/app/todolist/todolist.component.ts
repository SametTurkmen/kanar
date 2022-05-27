import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { TodoService } from '../services/todo.service';
import { Todo } from './todo';
import { VerifyComponent } from '../verify/verify.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  providers: [TodoService]
})
export class TodolistComponent implements OnInit {

  todos: Todo[]=[];

  constructor(
    private alertifyServices: AlertifyService,
    private todoService: TodoService,

    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    if (VerifyComponent.islogin !== true) {
      this.router.navigate(['/verify']);
    }
    else {
      this.todoService.getTodos().subscribe(data => {
        this.todos = data;
      });
    }
  }

  removeTodo(todo: Todo) {

    this.todoService.RemoveTodo(todo).subscribe();

    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    });
    this.alertifyServices.success("Todo başarıyla silindi");

  }
}
