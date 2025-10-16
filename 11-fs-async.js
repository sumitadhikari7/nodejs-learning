const fs = require('fs');

console.log('start');

const read = fs.readFile('./test/subfol/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log('Error reading file:', error);
        return;
    }

    console.log('File content:', result);

    // Now that we have result, we can write the file
    const write = fs.writeFile('./test/subfol/res.txt', `Here is the result: ${result}`, (err) => {
        if (err) {
            console.log('Error writing file:', err);
            return;
        }
        console.log('res.txt written successfully');
    });
});




//Self Prac
const second = fs.readFile('./test/subfol/second.txt', 'utf8', (errr,resu) => {
    if(errr){
        console.log('Error reading the file');
        return;
    }
    console.log('File content:', resu);

    const wsec= fs.writeFile('./test/subfol/test.txt', `Here is the result: ${resu}`, (er,re) =>{
    if(er){
        console.log('Error writing the file');
        return;
    }
    console.log('test.txt written successfully');
    //appending to file
    const app= fs.appendFile('./test/subfol/test.txt', '\nNew line added', (err)=>{
        if(err){
            console.log('Erroe appending file',err);
            return;
        }
        console.log('New line appended successfully');
    })
})
})

