module.exports = {
   getCart: async (req, res) => {
    res.render('cart', {title: 'Cart'})
   },
   addToCart: async (req, res) => {
      res.redirect('back')
   }
}