import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    args = args ? args: {};
    let currency = (args.currency == undefined) ? 'R$' : args.currency;
    let decimal = isNaN(Math.abs(args.decimal)) ? 2 : args.decimal;
    let point = (args.point == undefined) ? ',' : args.point;
    let thousand = (args.thousand == undefined) ? '.' : args.thousand;
    let signal = value < 0 ? '-' : '';

    let intPart = String(parseInt(value = Math.abs(Number(value) || 0).toFixed(decimal)));
    var position = (position = intPart.length) > 3 ? position % 3 : 0;

    return currency + 
      signal +
      (position ? intPart.substr(0, position) + thousand : '') +
      (intPart.substr(position).replace(/(\d{3})(?=\d)/g, "$1" + thousand)) +
      (decimal ? point + Math.abs(value - parseInt(intPart)).toFixed(decimal).slice(2) : "");
  }
}
