const fs = require('fs')

const first = fs.readFileSync('./test/subfol/first.txt','utf-8');
const second = fs.readFileSync('./test/subfol/second.txt','utf-8');

console.log(first, second);

//automatically creates a file with name auto-gen and adds the content 'Here is the result....'
const wfirst = fs.writeFileSync('./test/subfol/auto-gen', `Here is the result: ${first}, ${second}`,
    {flag:'a'}
)
//flag:'a' = append mode


//without sync, we use callback. see the codes below
const read = fs.readFile('./test/subfol/first.txt', 'utf8', (error,result)=>{
    if(error){
        console.log(error)
        return
    }
    console.log(result)
})
const write = fs.writeFile('./test/subfol/res.txt', `Here is the result : ${first}, ${second}`,
    (err, res)=>{
        if(err){
            console.log('Error writing file:', err);
            return;
        }
        console.log('res.txt written successfully');
    }
);