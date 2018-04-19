const express   = require('express');
const router    = express.Router();
const Blog      = require('../models/Blog');

router.get('/', (req, res) =>{
    Blog
        .find()
        .then(blogs => {
            res.status(200).json(blogs);
        });
});

router.get('/featured', (req, res) => {
    Blog
        .where('featured').equals(true)
        .then(blogs => {
            res.status(200).json(blogs);
    });
});

router.get('/:id', (req, res) => {
    Blog
        .findById(req.params.id)
        .then(blogs => {
            if (!blogs) {
                return res.status(404).send('Not Found')
            }
            res.status(200).json(blogs);
        });
});


router.post('/', (req, res) => {
    var blog = new Blog(req.body)
    blog
        .save()
        .then( blogs => {
            res.status(201).json(blogs);
        });
});

router.put('/:id', (req, res) => {
    Blog
        .findByIdAndUpdate(req.params.id, req.body)
        .then(blogs => {
            res.status(204).json(blogs);
        });
});

router.delete('/:id', (req, res) => {
    Blog
        .findByIdAndRemove(req.params.id)
        .then(blogs => {
            res.status(200).json(blogs)
        });
});

module.exports = router;
