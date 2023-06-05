import n2words from 'n2words/i18n/en.js';

if (typeof n2words !== 'function' || n2words(1) !== 'one') {
    throw new Error('ESM import failed.');
}