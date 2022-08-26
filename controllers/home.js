module.exports = {
    getHome: (req,res) => {
        res.render('login', {layout: 'login'})
    }
}