const express = require('express');
const { append } = require('vary');

//express app
const app = express()

//register view engine
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{

    // res.send("<h1>Welcome, Ritesh !!</h1>")
    
    //routing and html page
    // res.sendFile('./view/index.html',{root: __dirname});

    const blogs = [
        {title:'Mantu finds eggs', snippet:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
        {title:'Amit finds star', snippet:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
        {title:'how to defeat Browser', snippet:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},

    ]
    res.render('index',{title:'Home',blogs}); 
})

app.get('/about',(req,res)=>{

    // res.send("<h1>This is About page</h1>")

     //routing and html page
    // res.sendFile('./view/about.html',{root:__dirname})
    res.render('about',{title:'About'});
})

//redirects
app.get('/about-me',(req,res)=>{
    res.redirect('./about');
})

app.get('/blogs/create',(req, res)=>{
    res.render('create',{title:'Create'})
})
//404 page
app.use((req,res)=>[
    // res.status(404).sendFile('./view/404.html',{root:__dirname})
    res.status(404).render('404',{title:'404'})
])

//listen for reaquest
app.listen(3000)