import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../data';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.sass']
})
export class DataListComponent {

  @Input() data: Data[];

  constructor() { }

}
