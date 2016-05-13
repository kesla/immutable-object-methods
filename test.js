import test from 'ava';
import 'babel-core/register';
import {assign, setIn, mergeDeep} from './lib';

test('setIn', t => {
  const input = Object.freeze({});
  const actual = setIn(input, Object.freeze(['a', 'b', 'c']), 'foo');
  const expected = {
    a: {
      b: {
        c: 'foo'
      }
    }
  };
  t.deepEqual(actual, expected);
});

test('setIn with unchanged array', t => {
  const input = Object.freeze({
    a: 'b',
    c: [1, 2, 3]
  });
  const actual = setIn(input, Object.freeze(['a']), 'yo');
  const expected = {
    a: 'yo',
    c: [1, 2, 3]
  };
  t.deepEqual(actual, expected);
  t.is(actual.c, input.c);
});

test('setIn with unchanged value', t => {
  const input = Object.freeze({
    a: {
      b: 'c'
    }
  });
  const actual = setIn(input, Object.freeze(['a', 'b']), 'c');
  const expected = input;
  t.is(actual, expected);
});

test('setIn with nested changed value', t => {
  const input = Object.freeze({
    a: {
      b: 'c'
    }
  });
  const actual = setIn(input, Object.freeze(['a', 'b']), 'd');
  const expected = {
    a: {
      b: 'd'
    }
  };
  t.deepEqual(actual, expected);
});

test('setIn with null value, unchanged', t => {
  const input = Object.freeze({
    a: {
      b: 0
    }
  });
  const actual = setIn(input, Object.freeze(['a', 'b']), 0);
  const expected = input;
  t.is(actual, expected);
});

test('assign', t => {
  const actual = assign(Object.freeze({}));
  const expected = {};
  t.deepEqual(actual, expected);
  t.not(actual, expected);
});

test('assign multiple', t => {
  const actual = assign(Object.freeze({a: 'b'}), Object.freeze({c: 'd'}));
  const expected = {a: 'b', c: 'd'};
  t.deepEqual(actual, expected);
});

test('mergeDeep', t => {
  const input = Object.freeze({});
  const changes = Object.freeze({
    a: {
      b: {
        c: 'foo'
      }
    },
    d: 'bar'
  });
  const actual = mergeDeep(input, changes);
  const expected = changes;
  t.deepEqual(actual, expected);
});

test('mergeDeep with unchanged array', t => {
  const input = Object.freeze({
    a: 'b',
    c: [1, 2, 3]
  });
  const changes = Object.freeze({a: 'yo'});
  const actual = mergeDeep(input, changes);
  const expected = {
    a: 'yo',
    c: [1, 2, 3]
  };
  t.deepEqual(actual, expected);
  t.is(actual.c, input.c);
});

test('mergeDeep with unchanged value', t => {
  const input = Object.freeze({
    a: {
      b: 'c'
    },
    beep: 'boop'
  });
  const changes = Object.freeze({
    a: {
      b: 'c'
    }
  });
  const actual = mergeDeep(input, changes);
  const expected = input;
  t.is(actual, expected);
});

test('mergeDeep with unchanged values', t => {
  const input = Object.freeze({
    a: {
      b: 'c'
    },
    beep: 'boop',
    foo: 'bar'
  });
  const changes = Object.freeze({
    a: {
      b: 'c'
    },
    beep: 'boop'
  });
  const actual = mergeDeep(input, changes);
  const expected = input;
  t.is(actual, expected);
});

test('mergeDeep with nested changed value', t => {
  const input = Object.freeze({
    a: {
      b: 'c'
    },
    foo: 'bar'
  });
  const changes = Object.freeze({
    a: {
      b: 'd'
    }
  });
  const actual = mergeDeep(input, changes);
  const expected = {
    a: {
      b: 'd'
    },
    foo: 'bar'
  };
  t.deepEqual(actual, expected);
});

test('mergeDeep with null value, unchanged', t => {
  const input = Object.freeze({
    a: {
      b: 0
    },
    c: false
  });
  const changes = Object.freeze({
    a: {
      b: 0
    }
  });
  const actual = mergeDeep(input, changes);
  const expected = input;
  t.is(actual, expected);
});
