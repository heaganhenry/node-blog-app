const router = require('express').Router();
const Blog = require('../models/blogModel');

router.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('blogs/index', { blogs: result, title: 'All blogs' });
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/create', (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
});

router.post('/create', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Blog not found' });
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('blogs/edit', { blog: result, title: 'Edit Blog' });
        })
        .catch(err => {
            console.log(err);
        });
});

router.post('/edit', (req, res) => {
    Blog.updateOne(
        { _id: req.body._id },
        {
            $set: {
                title: req.body.title,
                snippet: req.body.snippet,
                body: req.body.body
            }
        })
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;