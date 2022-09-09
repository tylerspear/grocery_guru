const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cart')
const { ensureAuth } = require('../middleware/auth')
router.get('/', ensureAuth, cartController.getCart)

module.exports = router