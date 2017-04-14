import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(tapes: any, sortParam: any): any {
  if (sortParam === undefined) return tapes;
  if (!tapes) return [];
  tapes.sort((a: any, b: any) => {
     if (a[sortParam] < b[sortParam]) {
       return -1;
     } else if (a[sortParam] > b[sortParam]) {
       return 1;
     } else {
       return 0;
     }
   });
   return tapes;
   }

}
