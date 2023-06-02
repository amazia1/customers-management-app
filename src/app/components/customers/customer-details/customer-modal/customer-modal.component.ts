import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ApiResponse } from 'src/app/models/api-response';
import { CustomersService } from '../../customers.service';
import { UpdateCustomerDto } from './update-customer-dto';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss']
})
export class CustomerModalComponent implements OnInit, OnDestroy {

  city: string;
  street: string;
  houseNumber: string;
  zipCode: string;

  customer: ApiResponse<Customer>;
  data: UpdateCustomerDto;
  updatedCustomer$: Observable<ApiResponse<Customer>>;
  subscription: Subscription;
  customerForm: FormGroup;

  constructor(
    private customerService: CustomersService,
    private modalService: NgxSmartModalService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      'city': new FormControl(''),
      'street': new FormControl(''),
      'houseNumber': new FormControl(''),
      'zipCode': new FormControl('')
    });
    
    this.customer = this.modalService.getModalData('customerModal');

    this.customerForm.setValue({
      city: this.customer.data.city,
      street: this.customer.data.street,
      houseNumber: this.customer.data.houseNumber,
      zipCode: this.customer.data.zipCode
    });
  }

  updateDetails() : void {
    const customer: UpdateCustomerDto = { id: this.customer.data.id, ...this.customerForm.value}
      
    this.updatedCustomer$ = this.customerService.updateCustomer(customer)
    this.subscription = this.updatedCustomer$
      .subscribe((response: ApiResponse<Customer>) => {
        this.customer.data = response.data;
        this.customerService.updateData(response.data);
        this.closeModal();
        this.toastService.success('Customer updated successfully');
      })
  }

  closeModal() {
    this.modalService.close('customerModal');
    this.modalService.resetModalData('customerModal');
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}
