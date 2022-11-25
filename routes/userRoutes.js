const express = require('express');
const router = express.Router();
const userController = require('../api/controllers/userController');

router.route('/')
.get(userController.getAllUsers)
.post(userController.createNewUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);

module.exports = router;