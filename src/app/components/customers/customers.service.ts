import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { ApiResponse } from 'src/app/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private url: string = 'http://localhost:5128/api/Customers';

  constructor(private httpClient: HttpClient) { }

  GetCustomerById(id: string) : Observable<ApiResponse<Customer>> {
    return this.httpClient.get<ApiResponse<Customer>>(`${this.url}/${id}`);
  }
}
