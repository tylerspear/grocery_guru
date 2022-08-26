const express = require('express')
const app = express()
const dotenv = require('dotenv')
const methodOverride = require('method-override')
const path = require('path')
const exphbs = require('express-handlebars')
const MongoStore = require('connect-mongo')

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
dotenv.config({ path: './config/config.env'})
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//Routes
const mainRoutes = require('./routes/main')
app.use('/', mainRoutes)

//ACTIVATE PORT
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`server running on ${process.env.PORT || PORT}`)
})
