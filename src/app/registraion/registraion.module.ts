import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistraionRoutingModule } from './registraion-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingSpinnerComponent} from './../loaading-spinner/loading-spinner.component'
  import { from } from 'rxjs';

@NgModule({
  declarations: [SignUpComponent, LogInComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    RegistraionRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    FontAwesomeModule
  ]
})
export class RegistraionModule { }
