import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  { path: 'verify', component: VerifyComponent },
  { path: '', redirectTo: '/verify', pathMatch: 'full' },
  { path: 'todolist', component: TodolistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

