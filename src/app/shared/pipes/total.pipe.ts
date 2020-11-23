import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Order, ...args: number[]): number {
    if (value) {
      if ('TTC' in args) {
        return value.totalTtc();
      } else {
        return value.totalHt();
      }
    }
    return null;
  }

}
