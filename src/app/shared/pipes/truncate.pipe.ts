import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number, type?: string): string {
    if (!value) return '';
    if (type && type === 'char') {
      if (value.length <= limit) {
        return value;
      } else {
        return value.substring(0, limit) + '...';
      }
    } else {
      const words = value.split(' ');
      if (words.length <= limit) {
        return value;
      } else {
        return words.slice(0, limit).join(' ') + '...';
      }
    }
  }
}
