module.exports = {
    getHome: (req,res) => {
        res.render('login', {title: 'Login'})
    }
}