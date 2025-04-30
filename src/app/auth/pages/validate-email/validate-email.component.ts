import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrl: './validate-email.component.scss'
})
export class ValidateEmailComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService

  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }


  onSubmit() {
    if (this.form.valid) {
      let email = this.form.controls["email"].value;

      if (this.authService.isEmailRegistered(email)) {
        console.log('El email ya está registrado.');

        Swal.fire({
          title: 'Advertencia!',
          text: 'El email ya está registrado.',
          icon: 'warning',
          confirmButtonText: 'Aceptar',
          customClass: {
            confirmButton: 'btn btn-primary'
          },
          buttonsStyling: false
        }).then(() => {
          this.router.navigate(['auth/login']);
        });

      } else {
        this.router.navigate(['auth/sign-up']);
      }
    }
  }

}
