import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'searchFilter',
  pure: false
})

export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {

    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (item) {
      return JSON.stringify(item.title).toLowerCase().includes(args);
    });
  }
}
