const router = require('express').Router();
const userRoutes = require('./user');
//const commentRoutes = require('./comment');
const postRoutes = require('./post');

router.use('/user', userRoutes);
//router.use('/comment', commentRoutes);
router.use('/post', postRoutes);


module.exports = router;