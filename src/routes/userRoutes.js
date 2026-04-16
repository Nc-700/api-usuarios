const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/users', controller.getUsers);
router.post('/users', controller.createUser);
router.put('/users/:id', controller.updateUser);
router.delete('/users/:id', controller.deleteUser);

module.exports = router;