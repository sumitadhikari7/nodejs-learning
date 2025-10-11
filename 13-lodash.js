
const lodash = require('lodash')

const items = [1,[2,[3,[4,[5]]]]]
const newitems= lodash.flattenDeep(items);
console.log(newitems);

//add= add only 2 numbers
//sum= provides sum of all the numbers
const numbers = [1,2,3,4,5,6,7]
const add=lodash.sum(numbers);
console.log(add);

const hel= lodash.chunk(numbers,2);
console.log(hel);

const hi= lodash.clone(numbers);
console.log(hi);
console.log('hey, nodemon check',);