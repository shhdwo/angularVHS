import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tapes: any, term: any): any {
    if (term === undefined) return tapes;
    if (!tapes) return [];
    return tapes.filter(function(tape){
      return tape.title.toLowerCase().includes(term.toLowerCase());
    })
  }

}
