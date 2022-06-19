const router = require ('express').Router();
const OrdersControllers = require ('../controllers/orders-controllers');

router.get('/', OrdersControllers.getAllOrders);
router.get('/:id', OrdersControllers.getOrder);
router.post('/', OrdersControllers.createOrder);
router.put('/:id', OrdersControllers.updateOrder);
router.delete('/:id', OrdersControllers.deleteOrder);

module.exports = router;