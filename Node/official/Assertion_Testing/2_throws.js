const assert = require('assert');

assert.throws(
  () => {
    throw new Error('Wrong value');
  },
  Error
);

assert.throws(
  () => {
    throw new Error('Wrong value');
  },
  function(err) {
    if ((err instanceof Error) && /value/.test(err)) {
      return true;
    }
  },
  'unexpected error'
);
