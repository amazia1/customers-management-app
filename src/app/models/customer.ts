import { Contract } from './contract';

export class Customer {
  
  id:number

  firstName: string;

  lastName: string;

  idCard: string
        
  city?: string;

  street?: string;

  houseNumber?: string
  
  zipCode?: string;

  Contracts: Array<Contract>
 
}