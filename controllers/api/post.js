const router = require('express').Router();
const {Post} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth ,async (req, res) => {
    try {
      const dbUserData = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
      });
      res.status(200).json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    // delete one post by its `id` value
    try{
      const post = await Post.update({
          title: req.body.title,
          content: req.body.content,
          user_id: req.session.user_id
        },
        {
        where: {
          id: req.params.id
        }
      })
      if(!post){
        res.status(404).json({message: "unable to update post"})
      }
      res.status(200).json(post)
    } catch(err){
      res.status(400).json(err)
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete one product by its `id` value
    try{
      const post = await Post.destroy({
        where: {
          id: req.params.id
        }
      })
      if(!post){
        res.status(404).json({message: "unable to delete post"})
      }
      res.status(200).json(post)
    } catch(err){
      res.status(400).json(err)
    }
  });

module.exports = router;