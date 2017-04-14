import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rented'
})
export class RentedPipe implements PipeTransform {

  transform(tapes: any, args?: any): any {
    if (!tapes) return [];
    return tapes.filter(tape => tape.status == "rented");
  }

}
