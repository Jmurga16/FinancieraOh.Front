import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CustomCookieService } from 'src/app/core/services/cookie.service';

export const AuthGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CustomCookieService);
  const router = inject(Router);

  if (cookieService.readToken()) {
    return true;
  } else {
    return router.navigate(['auth/login']);
  }

};
