import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { DataInputComponent } from './data-input/data-input.component';
import { DataFormViewComponent } from './data-form-view/data-form-view.component';



@NgModule({
  declarations: [
    DataInputComponent,
    DataFormViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    DataInputComponent,
    DataFormViewComponent,
    MatButtonModule,
    MatInputModule
  ]
})
export class DataFormModule { }
