import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { DataListComponent } from './data-list/data-list.component';
import { DataViewSearchComponent } from './data-view-search/data-view-search.component';
import { DataViewSearchFormComponent } from './data-view-search-form/data-view-search-form.component';

@NgModule({
  declarations: [
    DataListComponent,
    DataViewSearchComponent,
    DataViewSearchFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    DataListComponent
  ]
})
export class DataViewModule { }
