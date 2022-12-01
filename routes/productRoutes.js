const express = require('express');
const router = express.Router();
const productController = require('../api/controllers/productController');

router.route('/')
    .get(productController.getAllProducts)
    .post(productController.createNewProduct)

router.route('/:id')
    .get(productController.getSingleProducts)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router;