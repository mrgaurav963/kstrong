import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 12): string {
    if (!value) return '';
    const words = value.split(' ');
    if (words.length <= limit) {
      return value;
    } else {
      return words.slice(0, limit).join(' ') + '...';
    }
  }
}
