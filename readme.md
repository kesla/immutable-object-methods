# immutable-object-methods 

Update normal plain javascript object, immutable style. Simlar to how immutable.js, seamless-immutable etc does it but a lot smaller and simpler.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install immutable-object-methods --save
```

## Usage

```js
import {setIn, mergeDeep, assign} from 'immutable-object-methods';

const input = {a: {b: 'c'}};
const updated = setIn(input, ['a', 'd'], 'e');

console.log(input);
console.log(updated);

const merged = mergeDeep(
  {foo: 'bar'},
  {beep: {boop: 4711}, foo: 'bas'}
);
console.log(merged);

// immutable assign
const assigned = assign({foo: 'bar'}, {foz: 'baz'});
console.log(assigned);

```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [object-assign](https://github.com/sindresorhus/object-assign): ES2015 Object.assign() ponyfill

## Dev Dependencies

- [ava](https://github.com/sindresorhus/ava): Futuristic test runner 🚀
- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [package-json-to-readme](https://github.com/zeke/package-json-to-readme): Generate a README.md from package.json contents
- [semistandard](https://github.com/Flet/semistandard): All the goodness of `feross/standard` with semicolons sprinkled on top.
- [snazzy](https://github.com/feross/snazzy): Format JavaScript Standard Style as Stylish (i.e. snazzy) output


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
