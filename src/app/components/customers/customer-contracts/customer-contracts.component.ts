import { Package } from 'src/app/models/package';
import { Customer } from './../../../models/customer';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-contracts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-contracts.component.html',
  styleUrls: ['./customer-contracts.component.scss']
})
export class CustomerContractsComponent {
  @Input() customer: Customer;
  packages: Array<Package>;

  showPackages(packages: Array<Package>) {
    this.packages = packages;
  }

  
}
