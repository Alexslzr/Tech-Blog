const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');


router.get('/', async (req,res)=>{   
    try{

        const post = await Post.findAll({
            include: {
                model: User,
                attributes: ['username']}
        });

        const posts = post.map((postx) => postx.get({ plain: true }));
        
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in 
        })
    } catch(err){
        res.status(400).json(err)
    }
})

router.get('/dashboard', withAuth ,async (req,res)=>{
        try{
            res.render('dashboard', {
                logged_in: req.session.logged_in 
            })
        } catch(err){
            res.json(err)
        }  
})


router.get('/login', async (req,res)=>{   
    try{
        res.render('login');
    } catch(err){
        res.status(400).json(err)
    }
})

router.get('/signup', async (req,res)=>{   
    try{
        res.render('signup');
    } catch(err){
        res.status(400).json(err)
    }
})


module.exports = router;