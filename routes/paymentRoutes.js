const express = require('express');
const router = express.Router();
const paymentController = require('../api/controllers/paymentController');

router.route('/')
.get(paymentController.getPaymentInfo)
.post(paymentController.createPaymentIntent)

module.exports = router;