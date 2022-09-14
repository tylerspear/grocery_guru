const Recipe = require('../models/Recipe')

module.exports = {
    getRecipes: async (req, res) => {
        try {
            const recipes = await Recipe.find()
            .populate('user')
            .sort({ createdAt: 'desc' })
            .lean()
            
            res.render('recipes/index', {title: 'All Recipes', recipes})
        }
        catch(err) {
            console.error(err)
        }
    },
    getDashboard: async (req, res) => {
        try {
            const recipes = await Recipe.find({
                user: req.user.id
            })
            res.render('recipes/dashboard', {title: 'Dashboard', recipes})
        }
        catch(err){
            console.error(err)
        }
    },
    showRecipe: async (req, res) => {
        try {
            res.render('recipes/show', {title: 'Recipe'})
        }
        catch(err) {
            console.error(err)
        }
    },
    newRecipe: (req, res) => {
        try {
            res.render('recipes/new', {title: 'New Recipe'})
        }
        catch (err){
            console.error(err)
        }
    },
    postRecipe: async (req, res) => {
        try {
            console.log(req.body)
            req.body.user = req.user.id
            await Recipe.create(req.body)
            res.redirect('/dashboard')
        }
        catch (err) {
            console.error(err)
        }
    }
}