const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true
    },
    // ratings: {
    //     type: Number,
    //     required: true
    // },
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
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema)