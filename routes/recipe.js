const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, recipeController.getRecipes)
router.get('/new', ensureAuth, recipeController.newRecipe)
router.get('/:id', ensureAuth, recipeController.showRecipe)
router.post('/', ensureAuth, recipeController.postRecipe)
router.put('/favorite/:id', ensureAuth, recipeController.favoriteRecipe)
router.put('/unfavorite/:id', ensureAuth, recipeController.removeFavorite)
module.exports = router 