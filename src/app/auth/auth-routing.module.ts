import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ValidateEmailComponent } from './pages/validate-email/validate-email.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ContainerAuthComponent } from './components/container-auth/container-auth.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerAuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'validate',
        component: ValidateEmailComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }