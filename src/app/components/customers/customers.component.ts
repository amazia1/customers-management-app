import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from './customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerId: string;
  customer$: Observable<ApiResponse<Customer>>;

  constructor (private service: CustomersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id');
    this.customer$ = this.service.GetCustomerById(this.customerId);
  }
}
