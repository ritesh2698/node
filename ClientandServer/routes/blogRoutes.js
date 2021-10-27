const express = require('express');
const Blog = require('../models/blog')


app.get('/',(req,res)=>{
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