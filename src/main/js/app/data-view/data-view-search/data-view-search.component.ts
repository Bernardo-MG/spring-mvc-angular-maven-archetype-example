import { Component, OnInit } from '@angular/core';
import { Data } from '../../data';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-data-view-search',
  templateUrl: './data-view-search.component.html',
  styleUrls: ['./data-view-search.component.sass']
})
export class DataViewSearchComponent implements OnInit {

  shownData: Data[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(): void {
    this.dataService.search("").subscribe(data => this.shownData = data);
  }

  handleSearch(query): void {
    this.dataService.search(query.value).subscribe(data => this.shownData = data);
  }

}
