import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-view-search-form',
  templateUrl: './data-view-search-form.component.html',
  styleUrls: ['./data-view-search-form.component.sass']
})
export class DataViewSearchFormComponent {

  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {}

  public handleClick(value: string): void {
    this.update.next({ value: value });
  }

}
