import { Component } from '@angular/core';
import { DataService } from 'app/data.service';
import { DataForm } from '../../dataForm';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.sass']
})
export class DataInputComponent {

  model = new DataForm("");

  constructor(private dataService: DataService) { }

  onSubmit() {
    this.dataService.save(this.model);
  }

}
