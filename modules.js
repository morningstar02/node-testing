const names = require('./names')
const sayHi = require('./utils');
console.log(names);
console.log(sayHi);

const data = require('./alternative-flavor')

require('./mind-grenade')
console.log(data);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);