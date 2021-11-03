const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

//Get users
router.get('/', (req, res) => {
    User.findAll({
        attributes: {
            exclude: ['password']
        }
    }).then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Get user by id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            id: req.params.id
        },
        include: [{
            model: Post,
            attributes: ['id', 'title', 'content', 'created_at']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'created_at'],
            include: {
                model: Post,
                attributes: ['title']
            }
        }]
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({
                message: 'User not found'
            });
            return;
        } res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Create user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
})