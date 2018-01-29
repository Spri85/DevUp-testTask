import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../models/Item.model';
import {ActivatedRoute, Router} from '@angular/router';
import {fadeStateTrigger} from '../../animations';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  animations: [
    fadeStateTrigger
  ]
})
export class TaskDetailsComponent implements OnInit {
  currentTask: Task;
  currentId: number;
  types: string[];

  constructor(
    public taskService: TaskService,
    private  route: ActivatedRoute,
    private router: Router) { }



  ngOnInit() {
    this.currentId = this.getCurrentTaskId();
    this.types = this.taskService.getTaskTypes();
    this.currentTask = this.taskService.getTaskById(this.currentId);
  }

  private getCurrentTaskId(): number {
    return +this.route.snapshot.params['id'];
  }


  onRemoveTask(): void {
    this.taskService.removeTask(this.currentId);

    this.router.navigateByUrl('/');
  }

  onSave() {
  this.taskService.updateTask(this.currentTask);
    this.router.navigateByUrl('/');
  }

}
