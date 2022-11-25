require("dotenv").config();
const asyncHandler = require('express-async-handler')
const bkash = require('api')('@bkash/v1.2.0-beta#1mld74kq6voepa');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const getPaymentInfo = asyncHandler(async (req, res) => {
	console.log("test")
})
/* 
@desc STRIPE PAYMENT SECTION
*/
const createPaymentIntent = asyncHandler(async (req, res) => {
	let { amount, id } = req.body

	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Spatula company",
			payment_method_types: ['card'],
		})
		res.send({
			message: "Payment successful",
			success: true,
			clientSecret: payment.client_secret
		})
	} catch (error) {
		console.log("Error", error)
		res.send({
			message: "Payment failed",
			success: false
		})
	}
})

const calculateRefundAmount = (amount) => {
	const newAmount = (Number(amount) / 100) * 0.8;
	return newAmount
}

const createPaymentRefund = asyncHandler(async (req, res) => {
	let { id, amount } = req.body

	try {
		const refund = await stripe.refunds.create({
			payment_intent: id,
			amount: calculateRefundAmount(amount)
		});
		console.log("Refund", refund)
		res.json({
			message: "Refund successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Refund failed",
			success: false
		})
	}
})

/* 
@desc BKASH PAYMENT SECTION
*/

const createBkashPayment = asyncHandler(async (req, res) => {
	try {
		const { data } = await bkash.createPayment()
		res.json({ data })
	}
	catch (error) {
		console.log(error)
	}
})

module.exports = {
	getPaymentInfo,
	createPaymentIntent,
	createPaymentRefund,
	createBkashPayment
}