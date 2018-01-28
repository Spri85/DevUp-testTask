import {Component, OnChanges, OnInit} from '@angular/core';
import {Task} from '../models/Item.model';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskTypes: string[];
  tasks: Task[];
  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.taskTypes = this.taskService.getTaskTypes();
  }

  filteredTasks(taskStatus: string): Task[] {
    return this.tasks.filter((task: Task) => task.status === taskStatus);
  }


  removeTask(id: number) {
    this.taskService.removeTask(id);
    this.tasks = this.taskService.getTasks();
  }

  onTaskDrop(task: Task, newStatus: string): void {
    task.status = newStatus;
    this.taskService.updateTask(task);
  }
}
