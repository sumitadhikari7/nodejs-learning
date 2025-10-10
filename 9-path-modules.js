
//aba 'path' import gareko mathi os jasari nai
const path = require('path');
//imports path

console.log(path.sep)

//File Path
const filePath = path.join('/test/','subfol','test.txt')
console.log(filePath)

//only base path
const base = path.basename(filePath)
console.log(base)

//provides full location
const absolute = path.resolve(__dirname,'test','subfol','test.txt');
console.log(absolute)
