const fs = require('fs')
fs.readFile('./text.txt', (err,data) =>{
    if(err){
        console.log(err)
    }
    console.log(data.toString)
})


fs.writeFile('./text2.txt', 'Welcome back ritesh ',() =>{
    console.log("File was written");
})

fs.writeFile('./text.txt', 'Good Bye Ritesh ',() =>{
    console.log("File was written");
})

fs.mkdir('./assests', (err) => {
    if(err){
        console.log(err)
    }
    console.log("Folder Created")
})

if(!fs.existsSync('./assests'))
{
    fs.mkdir('./assests',(err) =>{
        if(err){
            console.log(err)
        }
        console.log("Folder Created")
    })
}else{
    fs.rmdir('./assests',(err) => {
        if(err){
            console.log(err)
        }
        console.log("Folder Deleted")
    })
}

if(fs.existsSync('./deleteText.txt')){
    fs.unlink('./deleteText.txt',(err) => {
        if(err){
            console.log(err)
        }
        console.log("File delete")
    })
}