const router = require ('express').Router();
const postsControllers = require ('../controllers/posts-controllers');

router.get('/', postsControllers.getAllPosts);
router.get('/:id', postsControllers.getPost);
router.post('/', postsControllers.createPost);
router.put('/:id', postsControllers.updatePost);
router.delete('/:id', postsControllers.deletePost);

module.exports = router;