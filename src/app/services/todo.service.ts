import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Todo } from '../todolist/todo';
import { tap, catchError } from 'rxjs/operators';

@Injectable(
)
export class TodoService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/todos";

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.path).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  RemoveTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.path}/${todo.id}`).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Bir hata oluştu: ${err.error.message}`;
      
    }
    else {
      errorMessage = `Sistemsel bir hata: ${err.status}`;
    }
    return throwError(errorMessage);
  }

}
