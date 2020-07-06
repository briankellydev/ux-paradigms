import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLandingComponent } from './form-landing/form-landing.component';
import { FormRoutingModule } from './form-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FormLandingComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class FormModule { }
