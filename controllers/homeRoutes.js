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
            const post = await Post.findAll({
                where:{
                    user_id: req.session.user_id
                },
                include: {
                    model: User,
                    attributes: ['username']}
            });
    
            const posts = post.map((postx) => postx.get({ plain: true }));
            
            res.render('dashboard', {
                posts,
                logged_in: req.session.logged_in 
            })
        } catch(err){
            res.json(err)
        }  
})

router.get('/dashboard/new', withAuth ,async (req,res)=>{
    try{
        const post = await Post.findAll({
            where:{
                user_id: req.session.user_id
            },
            include: {
                model: User,
                attributes: ['username']}
        });

        const posts = post.map((postx) => postx.get({ plain: true }));
        
        res.render('dashboardNew', {
            posts,
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

router.get('/dashboard/edit/:id', withAuth ,async (req,res)=>{
    try{
        const post = await Post.findByPk(req.params.id, {
            include: {
                model: User,
                attributes: ['username']}
            });

        const posts = post.get({ plain: true });


        res.render('editpost', {
            posts,
            logged_in: req.session.logged_in 
        })
    } catch(err){
        res.json(err)
    }  
})

router.get('/signup', async (req,res)=>{   
    try{
        res.render('signup');
    } catch(err){
        res.status(400).json(err)
    }
})

router.get('/post/:id' ,withAuth, async (req,res)=>{
    try{
        const com = await Comment.findAll(/*req.params.id,*/ {
           include: {
                model: User,
                attributes: ['username']},
        where: {
            post_id: req.params.id
        }});
        const post = await Post.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['username']},
            {
                model: Comment,
                attributes: ['comment','date'],
                include:{
                    model: User,
                    attributes: ['username']
                }},
            ]});

        const posts = post.get({ plain: true });

        const comments = com.map((comment) => comment.get({ plain: true }));

        console.log(comments)

        res.render('comment', {
            comments,
            posts,
            logged_in: req.session.logged_in 
        })
    } catch(err){
        res.json(err)
    }  
})


/*
router.get('/post/:id' ,withAuth,async (req,res)=>{
    try{
        const post = await Post.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['username']},
            {
                model: Comment,
                attributes: ['comment','date'],
                include:{
                    model: User,
                    attributes: ['username']
                }},
            ]});

        const posts = post.get({ plain: true });

        console.log(posts)

        res.render('comment', {
            posts,
            logged_in: req.session.logged_in 
        })
    } catch(err){
        res.json(err)
    }  
})
*/
module.exports = router;
