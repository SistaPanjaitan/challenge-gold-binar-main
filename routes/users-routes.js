const router = require ('express').Router();
const usersControllers = require ('../controllers/users-controllers');

router.post('/register', usersControllers.register);
router.put('/password', usersControllers.updatePassword);
router.post('/login', usersControllers.login);

module.exports = router;
