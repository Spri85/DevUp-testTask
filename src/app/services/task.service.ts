import { Injectable } from '@angular/core';
import {Task} from '../models/Item.model';

@Injectable()
export class TaskService {

  private nextId: number;
  private taskTypes: string[] = [
    'To do',
    'Doing',
    'Done'
  ];

  constructor() {
    const tasks = this.getTasks();

    if (tasks.length === 0) {
      this.nextId = 0;
    } else {
      const maxId = tasks[tasks.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  getTaskTypes(): string[] {
    return this.taskTypes;
  }

  updateTask(updatedTask: Task) {
    let tasks =  this.getTasks();
    const index = tasks.findIndex(task => task.id === updatedTask.id);
    tasks[index] = updatedTask;
    this.setLocalStorageTasks(tasks);
  }

  addTask(newTask: Task) {
    let tasks = this.getTasks();
    newTask.id = this.nextId;
    tasks.push(newTask);

    this.setLocalStorageTasks(tasks);
    this.nextId++;
  }


  getTasks(): Task[] {
    const localStorageItem = JSON.parse(localStorage.getItem('tasks'));
    return localStorageItem == null ? [] : localStorageItem.tasks;
  }

  getTaskById(id: number): Task {
    const tasks =  this.getTasks();
    return tasks.find((task: Task) => task.id === id );
  }

  removeTask(id: number): void {
    let tasks =  this.getTasks();
    tasks = tasks.filter((task) => task.id !== id);
    this.setLocalStorageTasks(tasks);
  }

  private setLocalStorageTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify({tasks: tasks }));
  }



}
