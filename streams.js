const fs = require('fs')

const readStream = fs.createReadStream('./text3.txt',{encoding: 'utf-8'})
const writestream = fs.createReadStream('./text4.txt')


readStream.on('data',(chunk) => {
    console.log("----New Chunk----")
    console.log(chunk)

writestream.write('\New Chunk')
writestream.write(chunk);
})