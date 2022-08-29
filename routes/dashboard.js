const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')

router.get('/', recipeController.getDashboard)

module.exports = router 