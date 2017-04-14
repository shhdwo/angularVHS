import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBorrower'
})
export class FilterBorrowerPipe implements PipeTransform {

  transform(tapes: any, termBorrower: any): any {
    if (termBorrower === undefined) return tapes;
    if (!tapes) return [];
    return tapes.filter(function(tape){
      return tape.borrower.toLowerCase().includes(termBorrower.toLowerCase());
    })
  }

}
