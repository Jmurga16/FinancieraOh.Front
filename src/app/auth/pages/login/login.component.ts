import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginUserDto } from '../../models/login-user-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService

  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let form = this.loginForm.value as LoginUserDto;

      console.log('Login form:', form);

      this.authService.login(form).subscribe({
        next: (response) => {
          console.log('Inicio de sesión exitoso:', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Autenticación fallida:', error);
        }
      });
    }
  }
}
