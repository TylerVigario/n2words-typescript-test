"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import('n2words/i18n/en.js').then(({ default: n2words }) => {
    if (typeof n2words !== 'function') {
        throw new Error('CommonJS dynamic import failed.');
    }
});
