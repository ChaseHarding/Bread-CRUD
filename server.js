// DEPENDICIES
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

mongoose.connect(process.env.Mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
    console.log('Connected to MongoDB')
})


// CONFIGURATION

const PORT = process.env.PORT
const app = express()



// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))



// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Bread!')
})

// Breads
const breadsController = require('./controllers/bread_controller.js')
app.use('/breads', breadsController)

//BAKERS
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})