import { getResource, LanguageType } from '../../features/indexReference';

describe('getResource', () => {
    it('should return the correct resource for the "en" language', () => {
        const language: LanguageType = 'en';
        const resource = getResource(language);
        expect(resource).toEqual({
            'Hello': 'Hello',
        });
    });

    it('should return the correct resource for the "ja" language', () => {
        const language: LanguageType = 'ja';
        const resource = getResource(language);
        expect(resource).toEqual({
            'Hello': 'こんにちは',
        });
    });

    it('should return the correct resource for the "fr" language', () => {
        const language: LanguageType = 'fr';
        const resource = getResource(language);
        expect(resource).toEqual({
            'Hello': 'Bonjour',
        });
    });

    it('should throw an error for the "ch" language', () => {
        const language: any = 'ch';
        expect(() => getResource(language)).toThrowError('Invalid language');
    });

    it('直接文字を返す', () => {
        const language: LanguageType = 'ja';
        const { Hello } = getResource(language);
        expect(Hello).toEqual('こんにちは');
    });

});

