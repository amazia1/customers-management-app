import { Contract } from './../../../models/contract';
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
  contract: Contract

  showPackages(contract: Contract, packages: Array<Package>) {
    this.packages = packages;
    this.contract = contract;
  }

  trackBy(index: number, item: Contract) {
    return item.id;
  }
  
}
