import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from 'src/app/models/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:5128/api/Auth';

  constructor(private httpClient: HttpClient) { }

  public checkCustomerExist(idCard: string): Observable<ApiResponse<boolean>> {
    const params = new HttpParams().set('idCard', idCard);

    return this.httpClient.get<ApiResponse<boolean>>(`${this.url}/${idCard}`);
  }
}