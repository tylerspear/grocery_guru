const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')
const { ensureAuth } = require('../middleware/auth')
router.get('/', ensureAuth, recipeController.getDashboard)

module.exports = router 