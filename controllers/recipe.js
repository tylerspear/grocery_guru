const Recipe = require('../models/Recipe')
const User = require('../models/User')

module.exports = {
    getRecipes: async (req, res) => {
        try {
            const recipes = await Recipe.find({status: 'public'})
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
            const favoriteIDs = await User.find({
                _id: req.user.id
            }).select("favorites")
            //console.log(favoriteIDs)
            const favorites = await Recipe.find({_id: {$in: favoriteIDs[0].favorites }})
            res.render('recipes/dashboard', {title: 'Dashboard', recipes, favorites})
        }
        catch(err){
            console.error(err)
        }
    },
    showRecipe: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id)
                .populate('user')
                .lean()
            res.render('recipes/show', {title: 'Recipe', recipe})
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
            req.body.user = req.user.id
            await Recipe.create(req.body)
            res.redirect('/dashboard')
        }
        catch (err) {
            console.error(err)
        }
    },
    favoriteRecipe: async (req, res) => {
        try {
            await User.findOneAndUpdate(
                { _id: req.user.id },
                {
                    $push: { favorites: req.params.id }
                }
            )
            res.redirect('/recipes')
        }
        catch (err) {
            console.error(err)
        }
    }
}