const fs = require('fs')

const readStream = fs.createReadStream('./text3.txt',{encoding: 'utf-8'})

readStream.on('data',(chunk) => {
    console.log("----New Chunk----")
    console.log(chunk)
})