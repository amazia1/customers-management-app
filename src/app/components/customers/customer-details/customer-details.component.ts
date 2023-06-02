import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: Customer;

  constructor (private modalService: NgxSmartModalService) {}

  ngOnInit(): void {
    this.modalService.create('customerModal', CustomerModalComponent, { dismissable: false });
  }

  editDetails(customer: Customer): void {
    this.modalService.setModalData(customer, 'customerModal', true);
    this.modalService.open('customerModal');
  }
}
