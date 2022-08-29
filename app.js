const express = require('express')
const app = express()
const dotenv = require('dotenv')
const methodOverride = require('method-override')
const path = require('path')
const exphbs = require('express-handlebars')
const MongoStore = require('connect-mongo')

//HANDLEBARS SETUP
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

//CONFIG FILE
dotenv.config({ path: './config/config.env'})

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//ROUTES
const mainRoutes = require('./routes/main')
const recipeRoutes = require('./routes/recipe')
const dashboardRoutes = require('./routes/dashboard')
const cartRoutes = require('./routes/cart')
app.use('/', mainRoutes)
app.use('/recipes', recipeRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/cart', cartRoutes)

//ACTIVATE PORT
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`server running on ${process.env.PORT || PORT}`)
})
