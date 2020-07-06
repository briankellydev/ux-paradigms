import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLandingComponent } from './form-landing/form-landing.component';


const routes: Routes = [
  {
    path: '',
    component: FormLandingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
