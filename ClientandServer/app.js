const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const Blog = require('./models/blog')


//express app
const app = express()

//connect to mongoDB
const dbURL = 'mongodb+srv://ritesh:root@nodejs.w4kgb.mongodb.net/NodeJs?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err)=> console.log(err))

//register view engine
app.set('view engine', 'ejs')

// app.use((req, res, next)=>{
//     console.log('new request mode:');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:',req.method);
//     next();
// })

//middleware and static files

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));
// app.use(morgan('tiny'))

//mongoose and mongo sandbox routes
app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title:'Ritesh Prajapati',
        snippet: 'Hi my name is ritesh prajapati, and this is my first blog',
        body:'this is more about of my blogs'
    })
    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('61782939255eb7b243b22e5f')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/',(req,res)=>{

    // res.send("<h1>Welcome, Ritesh !!</h1>")
    
    //routing and html page
    // res.sendFile('./view/index.html',{root: __dirname});

    // const blogs = [
    //     {title:'Mantu finds eggs', snippet:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    //     {title:'Amit finds star', snippet:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    //     {title:'how to defeat Browser', snippet:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},

    // ]
    // res.render('index',{title:'Home',blogs}); 
    res.redirect('/blogs');
})

// app.use((req, res, next)=>{
//     console.log("This is a next middleware")
//     next();
// })

app.get('/about',(req,res)=>{

    // res.send("<h1>This is About page</h1>")

     //routing and html page
    // res.sendFile('./view/about.html',{root:__dirname})
        ('about',{title:'About'});
})

//redirects
app.get('/about-me',(req,res)=>{
    res.redirect('./about');
})

//blogs route
app.get('/blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        
        res.render('index',{title:'All Blogs', blogs:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})

//post method or insert data
app.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body);

    blog.save()
    .then((result)=>{
        res.redirect('/blogs');

    })

    .catch((err)=>{
        console.log(err)
    })
})

app.get('/blogs/create',(req, res)=>{
    res.render('create',{title:'Create'})
})

app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id; 
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{blog: result, title : 'Blog Details'})
    })
    .catch((err)=>{
        console.log(err)
    })

})

app.delete('/blogs/:id', (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/blogs'});
    })
    .catch((err)=>{
        console.log(err)
    })
})
 


//404 page
app.use((req,res)=>[
    // res.status(404).sendFile('./view/404.html',{root:__dirname})
    res.status(404).render('404',{title:'404'})
])

//listen for reaquest
