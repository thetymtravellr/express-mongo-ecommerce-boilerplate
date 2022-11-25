const express = require('express');
const router = express.Router();
const paymentController = require('../api/controllers/paymentController');

router.route('/')
.post(paymentController.createPaymentRefund)

module.exports = router;