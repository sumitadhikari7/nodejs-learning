  //Stream is used for handling i/o operations, especially for large amounts of data
  //They let you process data piece by piece rather than loading entire thing into memory

  //Stream Type:
  //1. Readable- Read data from a source
  //2. Writeable- Write data into a destination
  //3. Duplex- Both read and write
  //4. Transform- Modify data while reading/writing

  const stream = require('fs')

  const readStream= stream.createReadStream('./test/subfol/big.txt',{
    highWaterMark: 90000,
    encoding: 'utf8'
  });
  function res(result){
    console.log(result)
  }

  readStream.on('data',res)
  //.on(event, handler)

  readStream.on('error', (err)=>{
    console.log(err)
  })

