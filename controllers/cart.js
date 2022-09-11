module.exports = {
   getCart: async (req, res) => {
    res.render('cart', {title: 'Cart'})
   }
}