import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerifyComponent } from './verify/verify.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { TodolistComponent } from './todolist/todolist.component';




@NgModule({
  declarations: [
    AppComponent,
    VerifyComponent,
    TodolistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CountdownModule,
    HttpClientModule,
  ],
  providers: [VerifyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }