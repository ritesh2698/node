// let fname = "Ritesh Prajapati", city = "Navi Mumbai";
// console.log("Name of candidet :"+fname);

// const { people } = require("../people");

// console.log("City name of the candidet :"+city);

// const greet = (Ename) =>{
//     console.log("Name : "+Ename)
// } 
// greet("Ritesh Prajapati");
// greet("Amit")


// setTimeout(()=>{
//     console.log("Hello, This is interval time")
// },2000)

// console.log(__dirname)
// console.log(__filename)

// const fs = require('fs')
// fs.readFile('./text1.txt',(err,data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })
// fs.writeFile('./text1.txt',"Welcome Ritesh!!",()=>{
//     console.log("File is written")

// })

// fs.mkdir('./textFile',(err) => {
//     if(err)
//     {
//         console.log(err)
//     }
//     console.log("Folder Created")
// })
// fs.rmdir('./textFile',(err) =>{
//     if(err){
//         console.log(err)
//     }
//     console.log("Folder Deleted")
// })

// if(!fs.existsSync('./TextFile')){
//     fs.mkdir('./TextFile',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("Folder Created")
//     })
    
// }
// else{
//     fs.rmdir('./TextFile',(err)=>{
//         if(err)
//         {
//             console.log(err)
//         }
//         console.log("Folder deleted")
//     })
// }

// const {people1, age1} = require('./people1')
// console.log(people1, age1 )

// const os = require('os')
// console.log(os.platform())
// console.log(os.homedir)
// console.log(os.hostname())
// console.log(os.loadavg)
// console.log(os.networkInterfaces)
// console.log(os.release)

// const fs = require('fs')
// const readStream = fs.createReadStream('./text1.txt',{encoding:'utf-8'})
// const writeStream = fs.createWriteStream('./text4.txt')

// readStream.on('data',(chunk)=>{
//     console.log("New chunk")
//     console.log(chunk)

//     writeStream.write("Hii this is new chunk \n")
//     writeStream.write(chunk)
// })
