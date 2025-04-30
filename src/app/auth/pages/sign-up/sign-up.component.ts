import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const { firstName, lastName, email, password, confirmPassword } = this.signUpForm.value;

      if (password !== confirmPassword) {
        Swal.fire({
          icon: 'warning',
          title: 'Advertencia',
          text: 'Las contraseñas no coinciden.',
          confirmButtonText: 'Aceptar',
          customClass: {
            confirmButton: 'btn btn-primary'
          },
          buttonsStyling: false
        });
        return;
      }

      // Agregar usuario al localStorage
      this.userService.addUser({ email, password });

      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Usuario registrado exitosamente.',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      }).then(() => {
        this.router.navigate(['auth/login']);
      });

    }
  }
}
