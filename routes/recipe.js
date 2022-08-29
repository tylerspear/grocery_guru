const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')

router.get('/', recipeController.getRecipes)
router.get('/:id', recipeController.showRecipe)

module.exports = router 