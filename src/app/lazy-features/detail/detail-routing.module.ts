import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { APIService } from 'src/app/services/api.service';

const routes: Routes = [
  //resolve ში მოდის ფუნქციის მიერ დაბრუნებული data 
  //resolve Guard იღებს ობიექტს სადაც key : value გადავეცი
  // detail არის ის სახელი სადაც მივიღებთ data - ს .
  // APIService არის ის სერვისი სადაც ავღწერეთ resolve მეთოდი

  //Warning ! რადგან ეს მოდული ზარმაცად იტვირთება resolve არ მუშაობს ისე როგორც საჭიორა
  //რადგან თუ data არის null მან საერთოდ არ უნდა შეასრულოს route - ის ცვლილება
  {path: "" , component : DetailComponent, resolve:{detail : APIService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
