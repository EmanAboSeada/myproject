import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName:string) {
    if(value.length === 0 || filterString ==''){
      return value;
    }
    return value.filter((val)=>{
      return val[propName].toLowerCase().search(filterString.toLowerCase()) !== -1;
    })
  }

}
