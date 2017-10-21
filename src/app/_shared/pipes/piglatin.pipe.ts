import { Pipe, Injectable, PipeTransform } from '@angular/core';

import { PigLatin } from '@piglatin/index';

@Pipe({ name: 'pigLatinPipe' })
@Injectable()
export class PigLatinPipe implements PipeTransform {

    transform(value: string): string {
        if (!value || value.length === 0) {
            return '';
        }
        if (!/^[a-zA-Z]*$/.test(value)) {
            return 'Only letters allowed!';
        }
        return PigLatin.translate(value);
    }
}