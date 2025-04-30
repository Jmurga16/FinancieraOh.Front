import { Component } from '@angular/core';
import { CustomCookieService } from '@core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private customCookieService: CustomCookieService) { }

  signOut(): void {
    this.customCookieService.deleteToken();
  }
}
