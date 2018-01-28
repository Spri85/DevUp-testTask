import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../models/Item.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onRemoveTask = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {

  }

  removeTask(id: number) {
    this.onRemoveTask.emit(id);
  }


}

