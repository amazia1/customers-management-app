import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Observable, Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  idCard: string
  data$: Observable<ApiResponse<string>>;
  subscription: Subscription;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'idCard': new FormControl(this.idCard, [this.customIdValidator])
    });
  }

  login() {
    const id = this.loginForm.value.idCard;
    this.data$ = this.loginService.checkCustomerExist(id);

    this.subscription = this.data$
    .subscribe((response: ApiResponse<string>) => {
      if(response.data && response.success) {
        localStorage.setItem('token', response.data);
        this.router.navigate(['/customers', id]);
        return;
      }

      if (response.message && !response.success) {
        this.toastService.error(response.message);
      }
    });
  }

  customIdValidator(control: FormControl) {
    const value: boolean = /\d{9}/.test(control.value) && Array.from(control.value, Number).reduce((counter, digit, i) => {
      const step = digit * ((i % 2) + 1);
      return counter + (step > 9 ? step - 9 : step);
      }) % 10 === 0;

    if (!value) {
      return { 'idValidator': true };
    }
    return null;
  }
    
  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}
