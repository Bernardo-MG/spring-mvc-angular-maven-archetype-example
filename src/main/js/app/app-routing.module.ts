import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataViewSearchComponent } from './data-view/data-view-search/data-view-search.component';
import { DataFormViewComponent } from './data-form/data-form-view/data-form-view.component';
import { DataReportComponent } from './data-report/data-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' },
  { path: 'data', component: DataViewSearchComponent },
  { path: 'form', component: DataFormViewComponent },
  { path: 'report', component: DataReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
