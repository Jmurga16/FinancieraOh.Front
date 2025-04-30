import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ValidateEmailComponent } from './pages/validate-email/validate-email.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ContainerAuthComponent } from './components/container-auth/container-auth.component';



@NgModule({
  declarations: [
    LoginComponent,
    ValidateEmailComponent,
    SignUpComponent,
    ContainerAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }
