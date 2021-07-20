import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MultipleComponent } from './multiple/multiple.component';
import { MultipleimgShowComponent } from './multipleimg-show/multipleimg-show.component';
import { SingleComponent } from './single/single.component';
import { SingleimgShowComponent } from './singleimg-show/singleimg-show.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'single', component: SingleComponent },
  { path: 'single-img-show/:id', component: SingleimgShowComponent },
  { path: 'multiple', component: MultipleComponent },
  { path: 'multiple-img-show/:id', component: MultipleimgShowComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
