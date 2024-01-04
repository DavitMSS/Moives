import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFour0fourComponent } from './page-four0four/page-four0four.component';

const routes: Routes = [
 {
  path:"",
  component:PageFour0fourComponent,
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
