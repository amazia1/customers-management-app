import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CustomersComponent } from './components/customers/customers.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsComponent } from './components/customers/customer-details/customer-details.component';
import { CustomerContractsComponent } from './components/customers/customer-contracts/customer-contracts.component';
import { ContractPackagesComponent } from './components/customers/customer-contracts/contract-packages/contract-packages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faFile as farFile } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faUserPen as fasUserPen } from '@fortawesome/free-solid-svg-icons';
import { faPen as fasPen } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot as fasLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare as faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft as faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faIdCard as fasIdCard } from '@fortawesome/free-solid-svg-icons';
import { faUser as fasUser } from '@fortawesome/free-solid-svg-icons';
import { faFileContract as fasFileContract } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    CustomerContractsComponent,
    ContractPackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar, fasUserPen, faPenToSquare, faArrowLeft, fasLocationDot, fasPen, fasIdCard, fasUser,fasFileContract, farFile);
  }
}
