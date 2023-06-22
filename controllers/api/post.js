const router = require('express').Router();
const { User, Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth ,async (req, res) => {
    try {
      const dbUserData = await Post.create({
        title: req.body.title,
        content: req.body.content,
        id: req.session.user_id
      });
      res.status(200).json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;