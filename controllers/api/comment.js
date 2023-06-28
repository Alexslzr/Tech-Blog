const router = require('express').Router();
const { User, Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req,res)=>{

    try{
        const comments = await Comment.create({
            post_id: req.params.id,
            user_id: req.session.user_id,
            comment: req.body.newComment,   
        });

    res.status(200).json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
