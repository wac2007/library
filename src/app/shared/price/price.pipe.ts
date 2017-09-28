import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, args?: Object): string {
    let sDecimal = value.toFixed(2);
    sDecimal = sDecimal.replace('.', ',')
    return `R$${sDecimal}`;
  }
}
