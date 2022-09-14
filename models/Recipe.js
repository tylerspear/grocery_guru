const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    cookTime: {
        type: Number
    },
    ingredients: {
        type: String,
        required: true,
        trim: true
    },
    steps: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
     },
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'public',
        enum: ['public', 'private']
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema)