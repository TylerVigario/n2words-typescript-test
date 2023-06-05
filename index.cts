import('n2words/i18n/en.js').then(({ default: n2words }) => {
  if (typeof n2words !== 'function' || n2words(1) !== 'one') {
    throw new Error('CommonJS dynamic import failed.');
  }
});
