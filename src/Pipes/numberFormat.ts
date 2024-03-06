import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

    transform(value: string): string {
        const numberValue = parseFloat(value.replace(/,/g, ''));

        if (isNaN(numberValue)) {
            return value;
        }

        const formattedValue = numberValue.toLocaleString('en-IN');

        return formattedValue;
    }

}
