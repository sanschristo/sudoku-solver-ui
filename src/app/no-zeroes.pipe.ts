import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noZeroes'
})
export class NoZeroesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number | null {
    if (value === 0) return null;

    return value;
  }

}
