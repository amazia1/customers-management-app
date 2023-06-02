import { Observable, Subject, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { ApiResponse } from 'src/app/models/api-response';
import { UpdateCustomerDto } from './customer-details/customer-modal/update-customer-dto';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private url: string = 'http://localhost:5128/api/Customers';

  private customerSubject: Subject<Customer> = new Subject<Customer>();
  public customerData$ = this.customerSubject.asObservable()

  constructor(private httpClient: HttpClient) { }

  GetCustomerById(id: string) : Observable<ApiResponse<Customer>> {
    return this.httpClient.get<ApiResponse<Customer>>(`${this.url}/${id}`)
    .pipe(catchError((error): Observable<any> => {
      return throwError(() => new Error('An Error occured while fetching customer'));
    }));
  }

  updateCustomer(customer: UpdateCustomerDto) :Observable<ApiResponse<Customer>> {
    return this.httpClient.put<ApiResponse<Customer>>(this.url, customer)
    .pipe(catchError((error): Observable<any> => {
      return throwError(() => new Error('An Error occured while updating customer'));
    }));
  }

  updateData(data: Customer) {
    this.customerSubject.next(data);
  }
}
