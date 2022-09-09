const express = require('express')
const passport = require('passport')
const router = express.Router()
const authController = require('../controllers/auth')
const { ensureAuth } = require('../middleware/auth')

// @desc authenticate with google
// @route GET /auth/google
// router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get('/', authController.getLogin)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/logout', authController.logout)

module.exports = router