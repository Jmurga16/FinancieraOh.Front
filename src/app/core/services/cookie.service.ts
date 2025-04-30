import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class CustomCookieService {
    constructor(private cookieService: CookieService) { }

    saveToken() {
        const now = new Date();
        const expires = new Date(now.getTime() + 5 * 60000); // 5 minutes
        this.cookieService.set('token', '123456', expires);
    }

    readToken() {
        return this.cookieService.get('token');
    }

    deleteToken() {
        this.cookieService.delete('token');
    }
}