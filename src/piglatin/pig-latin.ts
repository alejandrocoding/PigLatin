export class PigLatin {

    private static INSTANCE: PigLatin;

    private readonly VOWELS = ['a', 'e', 'i', 'o', 'u'];
    private readonly SUFFIX = 'ay';
    private readonly SEPARATOR = '-';

    static getInstance() {
        if (!this.INSTANCE) {
            this.INSTANCE = new PigLatin();
        }
        return this.INSTANCE;
    }

    static translate(value: string) {
        return this.getInstance().translate(value);
    }

    translate(value: string) {
        this.printErrorIfStringIsWrong(value, 'translate');

        const isStartingWithVowel = this.startWithVowel(value);
        if (isStartingWithVowel) {
            return this.addSeparatorAndSuffix(value);
        }
        const indexNextVowel = this.findIndexNextVowel(value);
        const consonants = value.substr(0, indexNextVowel);
        const restOfWord = value.substr(indexNextVowel, value.length);
        return this.addSeparatorConsonantsAndSuffix(restOfWord, consonants);
    }

    private isVowel(letter: string) {
        this.printErrorIfCharIsWrong(letter, 'isVowel');
        return !!~this.VOWELS.indexOf(letter);
    }

    private startWithVowel(word: string) {
        this.printErrorIfStringIsWrong(word, 'startWithVowel');
        return this.isVowel(word.charAt(0));
    }

    private addSeparator(word: string) {
        this.printErrorIfStringIsWrong(word, 'addSeparator');
        return word + this.SEPARATOR;
    }

    private addSuffix(word: string) {
        this.printErrorIfStringIsWrong(word, 'addSuffix');
        return word + this.SUFFIX;
    }

    private addSeparatorAndSuffix(word: string) {
        const wordWithSeparator = this.addSeparator(word);
        return this.addSuffix(wordWithSeparator);
    }

    private addConsonantsToTheEnd(word: string, consonants: string) {
        this.printErrorIfStringIsWrong(word, 'addConsonantsToTheEnd');
        this.printErrorIfStringIsWrong(consonants, 'addConsonantsToTheEnd');
        return word + consonants;
    }

    private addSeparatorConsonantsAndSuffix(word: string, consonants: string) {
        let result = this.addSeparator(word);
        result = this.addConsonantsToTheEnd(result, consonants);
        return this.addSuffix(result);
    }

    private findIndexNextVowel(word: string) {
        this.printErrorIfStringIsWrong(word, 'findIndexNextVowel');
        if (this.isSpecialCase(word)) {
            return 2;
        }
        const arr = word.split('');
        for (let index = 0; index < arr.length; index++) {
            if (this.isVowel(arr[index])) {
                return index;
            }
        }
        return -1;
    }

    private isSpecialCase(word: string) {
        const specialCase = 'qu';
        return word.startsWith(specialCase) && word.length > specialCase.length;
    }

    private printErrorIfStringIsWrong(text: string, methodName: string) {
        if (!text) {
            throw Error(`The value passed in to [${methodName}] method is either null, undefined or empty`);
        }
        if (text.trim().length === 0) {
            throw Error(`The value passed in to [${methodName}] method is empty`);
        }
        if (!/^[a-zA-Z-]+$/.test(text)) {
            throw Error(`The value passed in (${text}) to [${methodName}] method contains invalid characters`);
        }
    }

    private printErrorIfCharIsWrong(char: string, methodName: string) {
        if (!char) {
            throw Error(`The value passed in to [${methodName}] method is either null or undefined`);
        }
        if (char.length !== 1) {
            throw Error(`The value passed in (${char}) to [${methodName}] method is not a char`);
        }
        if (!/^[a-zA-Z-]+$/.test(char)) {
            throw Error(`The value passed in (${char}) to [${methodName}] method contains invalid characters`);
        }
    }
}