import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';
import { CustomersService } from '../customers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy {
  @Input() customer: Customer;

  subscription: Subscription;

  constructor (
    private customerService: CustomersService,
    private modalService: NgxSmartModalService
  ) { }

  ngOnInit(): void {

    this.customerService.customerData$
      .subscribe(data => {
        const { city, street, houseNumber, zipCode } = data;
        this.customer.city = city;
        this.customer.street = street;
        this.customer.houseNumber = houseNumber;
        this.customer.zipCode = zipCode;
      });

    this.modalService.create('customerModal', CustomerModalComponent, { dismissable: false });
  }

  editDetails(customer: Customer): void {
    this.modalService.setModalData(customer, 'customerModal', true);
    this.modalService.open('customerModal');
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe()
  }
}
