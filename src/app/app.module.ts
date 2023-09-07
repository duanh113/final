import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './ToDo/ToDo.component';
import { InProgressComponent } from './InProgress/InProgress.component';
import { InReviewComponent } from './InReview/InReview.component';
import { DoneComponent } from './Done/Done.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'ToDo',
    component: ToDoComponent,
  },
  {
    path: 'InProgress',
    component: InProgressComponent,
  },
  {
    path: 'InReview',
    component: InReviewComponent,
  },
  {
    path: 'Done',
    component: DoneComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    InProgressComponent,
    InReviewComponent,
    DoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
