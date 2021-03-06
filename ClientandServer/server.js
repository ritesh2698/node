const fs = require('fs');
const http = require('http');
const _ = require('lodash')


const server = http.createServer((req,res) =>{

    //lodash  
    const num = _.random(0, 100);
    console.log(num);

    const greet = _.once(()=>{
        console.log("Hello Ritesh")
    })
    greet()
    greet()


    console.log(req.url, req.method)

    //------------------Plain text-------------------------------------
    //set header content type
    // res.setHeader('Content-Type','text/plain');
    // res.write("Welcome, Ritesh to node js");
    // res.end();
    
    //-------------------html type-----------------------------------------
    // res.setHeader('Content-Type','text/html')
    // res.write('<head><link rel="styelsheet" href="#"></head>')
    // res.write('<p>Hello, Ritesh!!</P>')
    // res.write('<h3>Welcome Back, Ritesh !!')
    // res.end();

    //.........................external html type...................................................................
    // res.setHeader('Content-Type', 'text/html')
    // fs.readFile('./views/index.html',(err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         // res.write(data);
    //         // res.end()

    //         res.end(data)
    //     }
    // })

    //------------------Route----------------------
    res.setHeader('Content-Type', 'text/html')

    let path ='./views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            //status code
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html'
            //status code
            res.statusCode = 200;
            break;

            //Redirect to page
            case '/about-me':
                res.statusCode =301;
                res.setHeader('Location','/about');
                res.end();
                break;

        default:
            path += '404.html';
            //status code
            res.statusCode = 404;
            break;
    }

    //send an html file
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            // res.write(data);
            // res.end()

            res.end(data)
        }
    })    

});

server.listen(3000, 'localhost', () =>{
    console.log("Listening for request on port 3000")
})