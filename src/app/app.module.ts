import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDragDropModule } from 'ng-drag-drop';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskNewItemComponent } from './tasks/task-new-item/task-new-item.component';
import {TaskService} from './services/task.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'task/:id', component: TaskDetailsComponent},
  {path: 'newTask', component: TaskNewItemComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TaskItemComponent,
    TaskDetailsComponent,
    TaskNewItemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgDragDropModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
