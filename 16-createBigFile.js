const fs = require('fs')
for(let i=0; i<100000; i++){
    fs.writeFileSync('./test/subfol/big.txt', `Hello World ${i}\n`, {flag: 'a'})
}