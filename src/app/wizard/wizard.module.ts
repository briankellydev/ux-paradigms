import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardLandingComponent } from './wizard-landing/wizard-landing.component';
import { WizardRoutingModule } from './wizard-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [WizardLandingComponent],
  imports: [
    CommonModule,
    WizardRoutingModule,
    MatStepperModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class WizardModule { }
