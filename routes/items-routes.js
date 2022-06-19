const router = require ('express').Router();
const itemsController = require ('../controllers/items-controllers');

router.post('/', itemsController.addItem);
router.get('/', itemsController.getAllItems);
router.get('/:id', itemsController.getByID);
router.put('/:id', itemsController.updateItem);
router.delete('/', itemsController.deleteItem);

module.exports = router;