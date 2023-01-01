const blogController = require('../controllers/blogController');

router.get('/', blogController.blog_index);
router.get('/create', blogController.blog_create_get);
router.post('/create', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);
router.get('/edit/:id', blogController.blog_edit_get);
router.post('/edit', blogController.blog_edit_post);