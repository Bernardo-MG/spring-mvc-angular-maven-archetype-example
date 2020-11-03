import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-data-report',
  templateUrl: './data-report.component.html',
  styleUrls: ['./data-report.component.sass']
})
export class DataReportComponent {

  constructor(private dataService: DataService) { }

  public download(): void {
    this.dataService.report();
  }

}
