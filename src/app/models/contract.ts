import { Package } from './package';
import { ContractTypes } from './contract-types'

export class Contract {
  
  id: number;

  contractNumber: string;

  contractName: string;

  contractType: ContractTypes;

  packages: Array<Package>;
}