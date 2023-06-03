import { Component } from '@angular/core';
import { LoginService } from './components/login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(private authService: LoginService) {  }

  logout() {
    this.authService.logout();
  }
}
