const router = require('express').Router();
const { User, Post, Comment} = require('../../models');

router.post('/', async (req, res) => {
    try {
      const dbUserData = await Post.create({
        title: req.body.title,
        content: req.body.content,
      });
  /*
      req.session.save(() => {
        req.session.loggedIn = true;
  
        
      });*/
      res.status(200).json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;