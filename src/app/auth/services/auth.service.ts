import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CustomCookieService } from 'src/app/core/services/cookie.service';
import { LoginUserDto } from '../models/login-user-dto';
import { AuthResponse } from '../models/auth-response';
import { UserService } from '@core/services';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private readonly baseUrl: string = '';
    private readonly endpointAuth = 'auth/login';
    private readonly localStorageKey = 'users';

    constructor(
        private http: HttpClient,
        private router: Router,
        private cookieService: CustomCookieService,
        private userService: UserService
    ) {
        this.userService.initializeUsers();
    }

    private getUsers(): { email: string; password: string }[] {
        const users = localStorage.getItem(this.localStorageKey);
        return users ? JSON.parse(users) : [];
    }

    login(request: LoginUserDto): Observable<AuthResponse> {
        const users = this.getUsers();
        console.log('Users:', users);
        const user = users.find(
            u => u.email === request.email && u.password === request.password
        );

        if (user) {
            const fakeToken = 'fake-jwt-token';
            this.cookieService.saveToken(fakeToken);
            return of({ token: fakeToken });
        } else {
            return throwError(() => new Error('Credenciales inválidas'));
        }
    }

    isEmailRegistered(email: string): boolean {
        const users = this.getUsers();
        return users.some(user => user.email === email);
    }

    logout(): void {
        this.cookieService.deleteToken();
        this.router.navigate(['auth/login']);
    }

    isAuthenticated(): boolean {
        return !!this.cookieService.readToken();
    }
}
