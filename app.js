const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const methodOverride = require('method-override')
const path = require('path')
const exphbs = require('express-handlebars')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const connectDB = require('./config/database')
require('./config/passport')(passport)

//HANDLEBARS SETUP
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

//CONFIG FILES
dotenv.config({ path: './config/config.env'})

//DB Connection
connectDB()

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(passport.initialize())
app.use(passport.session())

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.DB_STRING
    })
}))


//ROUTES
const mainRoutes = require('./routes/main')
const recipeRoutes = require('./routes/recipe')
const dashboardRoutes = require('./routes/dashboard')
const cartRoutes = require('./routes/cart')
const authRoutes = require('./routes/auth')
app.use('/', mainRoutes)
app.use('/recipes', recipeRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/cart', cartRoutes)
app.use('/auth', authRoutes)

//ACTIVATE PORT
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`server running on ${process.env.PORT || PORT}`)
})
