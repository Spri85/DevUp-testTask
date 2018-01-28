import { Component, OnInit } from '@angular/core';
import {fadeStateTrigger} from '../anumations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    fadeStateTrigger
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
