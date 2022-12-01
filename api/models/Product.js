const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 1000000
    },
    size: [
        {
            type: Number,
            required: true,  
        }
    ],
    category: [
        {
            type: String,
            required: true
        }
    ],
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1000
    },

    image: [
        {
            type: String,
            required: true
        }
    ],
    
},
    {
        timestamps: true
    });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;