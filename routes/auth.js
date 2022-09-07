const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc authenticate with google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

module.exports = router