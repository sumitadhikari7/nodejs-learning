const fs = require('fs');

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf8',(err,res)=>{
    if(err){
        reject(err)
    }
    else{
        resolve(res)
    }
})
    })
}
getText('./test/subfol/first.txt')
// if the file is read successfully,
.then((result) => console.log(result))
//if there is an error
.catch((err) => console.log(err));


const start = async()=>{
    try{
        const first = await getText('./test/subfol/first.txt');
        console.log(first)
    }catch(error){
        console.log(error)
    }
}

start()


