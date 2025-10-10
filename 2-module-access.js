const names = require('./4-names');
const sayHello = require('./5-utils');
// 7 ma export gareko xaina tara pani chalxa 
// entire file nai run garne ho vane export garna pardaina
require('./7-mind-grenade')
// ALternative from 6
const alt = require('./6-alternative-flavor')

console.log(alt); 

sayHello(names.ronaldo);
sayHello(names.vini);
