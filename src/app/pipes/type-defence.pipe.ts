import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeDefence'
})
export class TypeDefencePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
