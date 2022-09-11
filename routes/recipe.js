const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, recipeController.getRecipes)
router.get('/new', ensureAuth, recipeController.newRecipe)
router.get('/:id', ensureAuth, recipeController.showRecipe)


module.exports = router 