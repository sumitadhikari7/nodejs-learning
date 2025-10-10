const fs = require('fs')

const first = fs.readFileSync('./test/subfol/first.txt','utf-8');
const second = fs.readFileSync('./test/subfol/second.txt','utf-8');

console.log(first, second);

//automatically creates a file with name auto-gen and adds the content 'Here is the result....'
const wfirst = fs.writeFileSync('./test/subfol/auto-gen', `Here is the result: ${first}, ${second}`,
    {flag:'a'}
)
//flag:'a' = append mode