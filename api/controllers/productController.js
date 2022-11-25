const Product = require('../models/Product')
const asyncHandler = require('express-async-handler')

// @desc Get all product
// @route GET /product
// @access Private
const getAllProducts = asyncHandler(async (req, res) => {
    // Get all users from MongoDB
    const products = await Product.find().lean()

    // If no users 
    if (!products?.length) {
        return res.status(400).json({ message: 'No product found' })
    }
    res.json(products)
})

// @desc Create new product
// @route POST /product
// @access Private
const createNewProduct = asyncHandler(async (req, res) => {
    const { title, price, category, description } = req.body

    // Confirm data
    if (!title || !price || !Array.isArray(category) || !description) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const productObject = { title, price, category, description }

    // Create and store new user 
    const product = await Product.create(productObject)

    if (product) { //created 
        res.status(201).json({ message: `Product created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
})

// @desc Update a user
// @route PATCH /users
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
    const { id, title, price, category, description } = req.body

    // Confirm data 
    if (!id || !title || !price || !Array.isArray(category) || !description) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Does the user exist to update?
    const product = await Product.findById(id).exec()

    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }

    product.title = title
    product.price = price
    product.category = category
    product.description = description

    const updateProduct = await product.save()

    res.json({ message: `product updated` })
})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Product ID Required' })
    }

    // Does the user exist to delete?
    const product = await Product.findById(id).exec()

    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }

    const result = await product.deleteOne()

    const reply = `Product with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct
}