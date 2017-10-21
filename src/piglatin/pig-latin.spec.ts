import { PigLatin } from './index';

describe('Pig Latin Lib', () => {
    it('should throw an error if the value passed in is null, undefined or empty', () => {
        expect(() => { PigLatin.translate(null); })
            .toThrowError('The value passed in to [translate] method is either null, undefined or empty');
        expect(() => { PigLatin.translate(undefined); })
            .toThrowError('The value passed in to [translate] method is either null, undefined or empty');
        expect(() => { PigLatin.translate(' '); })
            .toThrowError('The value passed in to [translate] method is empty');
        expect(() => { PigLatin.translate('asd@'); })
            .toThrowError('The value passed in (asd@) to [translate] method contains invalid characters');
    });

    it('should translate words starting with vowels', () => {
        const word1 = 'eye';
        const word2 = 'eat';
        const word3 = 'an';
        const word4 = 'egg';
        const word5 = 'available';

        const result1 = PigLatin.translate(word1);
        const result2 = PigLatin.translate(word2);
        const result3 = PigLatin.translate(word3);
        const result4 = PigLatin.translate(word4);
        const result5 = PigLatin.translate(word5);

        expect(result1).toBe('eye-ay');
        expect(result2).toBe('eat-ay');
        expect(result3).toBe('an-ay');
        expect(result4).toBe('egg-ay');
        expect(result5).toBe('available-ay');
    });

    it('should translate words starting with consonants followed by a vowel', () => {
        const word1 = 'banana';
        const word2 = 'beast';
        const word3 = 'dough';
        const word4 = 'happy';
        const word5 = 'yours';

        const result1 = PigLatin.translate(word1);
        const result2 = PigLatin.translate(word2);
        const result3 = PigLatin.translate(word3);
        const result4 = PigLatin.translate(word4);
        const result5 = PigLatin.translate(word5);

        expect(result1).toBe('anana-bay');
        expect(result2).toBe('east-bay');
        expect(result3).toBe('ough-day');
        expect(result4).toBe('appy-hay');
        expect(result5).toBe('ours-yay');
    });

    it('should translate words starting with consonant clusters', () => {
        const word1 = 'star';
        const word2 = 'three';
        const word3 = 'spray';
        const word4 = 'prays';
        const word5 = 'troll';

        const result1 = PigLatin.translate(word1);
        const result2 = PigLatin.translate(word2);
        const result3 = PigLatin.translate(word3);
        const result4 = PigLatin.translate(word4);
        const result5 = PigLatin.translate(word5);

        expect(result1).toBe('ar-stay');
        expect(result2).toBe('ee-thray');
        expect(result3).toBe('ay-spray');
        expect(result4).toBe('ays-pray');
        expect(result5).toBe('oll-tray');
    });

    it('should translate words starting with "QU" as a special case', () => {
        const word1 = 'question';
        const word2 = 'queue';
        const word3 = 'quick';

        const result1 = PigLatin.translate(word1);
        const result2 = PigLatin.translate(word2);
        const result3 = PigLatin.translate(word3);

        expect(result1).toBe('estion-quay');
        expect(result2).toBe('eue-quay');
        expect(result3).toBe('ick-quay');
    });
});