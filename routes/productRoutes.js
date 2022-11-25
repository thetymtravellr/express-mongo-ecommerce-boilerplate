const express = require('express');
const router = express.Router();
const productController = require('../api/controllers/productController');

router.route('/')
.get(productController.getAllProducts)
.post(productController.createNewProduct)
.patch(productController.updateProduct)
.delete(productController.deleteProduct);

module.exports = router;