module.exports = {
    getRecipes: async (req, res) => {
        try {
            res.render('recipes/index')
        }
        catch(err) {
            console.error(err)
        }
    },
    getDashboard: async (req, res) => {
        try {
            res.render('recipes/dashboard')
        }
        catch(err){
            console.error(err)
        }
    }
}