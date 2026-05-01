const _ = require('lodash');

let numbers = [[0, 1], [[2, 3], [4, [5]]]];
let doubled = _.flattenDeep(numbers).map((num) => num * 2);
console.log('Doubled numbers:', doubled);