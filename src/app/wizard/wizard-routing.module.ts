import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardLandingComponent } from './wizard-landing/wizard-landing.component';


const routes: Routes = [
  {
    path: '',
    component: WizardLandingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
