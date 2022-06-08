const router = require ('express').Router();
const itemsController = require ('../controllers/items-controllers');

router.get('/', itemsController.getAllItems);
router.get('/:id', itemsController.getByID);
router.put('/:id', itemsController.updateItem);

module.exports = router;