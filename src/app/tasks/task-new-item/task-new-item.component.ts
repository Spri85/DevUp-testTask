import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskService} from '../../services/task.service';
import {Task} from '../../models/Item.model';
import {Router} from '@angular/router';
import {fadeStateTrigger} from '../../anumations';

@Component({
  selector: 'app-task-new-item',
  templateUrl: './task-new-item.component.html',
  styleUrls: ['./task-new-item.component.css'],
  animations: [
    fadeStateTrigger
  ]
})
export class TaskNewItemComponent implements OnInit {
  addTaskForm: FormGroup;
  taskTypes: string[];

  constructor(private fb: FormBuilder, public taskService: TaskService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.addTaskForm = this.fb.group({
      name: ['', Validators.required],
      description: [],
      status: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.taskTypes = this.taskService.getTaskTypes();
  }

  onSubmit(newTask: Task) {
    if (this.addTaskForm.valid) {
      this.taskService.addTask(newTask);
      this.addTaskForm.reset();

      this.router.navigateByUrl('/');
    }
  }

  get name() {
    return this.addTaskForm.get('name');
  }

  get status() {
    return this.addTaskForm.get('status');
  }

}
