import { Component, Input } from '@angular/core';
import { Contract } from 'src/app/models/contract';
import { Package } from 'src/app/models/package';

@Component({
  selector: 'app-contract-packages',
  templateUrl: './contract-packages.component.html',
  styleUrls: ['./contract-packages.component.scss']
})
export class ContractPackagesComponent {

  @Input() packages: Array<Package>;
  @Input() contract: Contract;

  trackBy(index: number, item: Package) {
    return item.id;
  }
}
