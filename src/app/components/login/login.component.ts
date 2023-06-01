import { Component, OnDestroy } from '@angular/core';
import { LoginService } from './login.service';
import { Observable, Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  idCard: string
  data$: Observable<ApiResponse<number>>;
  subscription: Subscription;

  constructor(private loginService: LoginService, private router: Router) { }

  checkCustomerExist() {
    this.data$ = this.loginService.checkCustomerExist(this.idCard);

    this.subscription = this.data$
    .subscribe((customer: ApiResponse<number>) => {
      if(customer.data)
        this.router.navigate(['/customers', customer.data]);
    });
  }
    
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
