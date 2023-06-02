import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: string, isLast: boolean): string {
      if (value && !isLast)
        return `${value}, `;
        
      return value;
  }
}
