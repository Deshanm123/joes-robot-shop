import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './sign-in/sign-in.component';
import {TemplateFormControlComponent} from './template-form-control/template-form-control.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignInComponent, TemplateFormControlComponent],
  imports: [
    CommonModule ,FormsModule //FormsModule is required for data binding eg-[(ngModel)] is imported from this module
  ]
})
export class UserModule { }
